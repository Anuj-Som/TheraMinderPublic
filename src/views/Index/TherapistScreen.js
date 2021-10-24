import React from 'react';
import { Button } from '@material-ui/core';
import { TextField } from '@material-ui/core';
import { MenuItem } from '@material-ui/core';
import { Grid } from '@material-ui/core';
import CircularProgress from '@mui/material/CircularProgress';
import Typography from '@material-ui/core/Typography';
import { Card, CardContent, CardActions} from '@material-ui/core';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import axios from 'axios';
import '../../public/stylesheets/scss/index.scss'


const workoutOptionsMenu = ["Straight Leg Raises", "Standing Quad Stretch",
                    "Squats","Lateral Leg Raises",
                    "Back Lunges", "Pigeon Stretch", "Single-Leg Hip Circles", 
                    "Single-Leg Glute Kicks (Donkey Kicks)", "Plie Squats"]

const durationOptionsMenu = [15, 30, 45, 60, 90, 120, 150, 180, 240, 300]

function listWithNewVal(list, index, key, newVal) {
  const newList = list.map((item, currIndex) => {
    if (currIndex !== index) {
      return item;
    }
    return { ...item, [key]: newVal };
  });
  return newList;
}

// https://goshakkk.name/array-form-inputs/
class TherapistScreen extends React.Component {
  
  constructor() {
    super();
    this.state = {
      name: "",
      exercises: [{ dataType: workoutOptionsMenu[0], duration: durationOptionsMenu[0]}],
      phone: 0,
      noDisplayName: true,
      noSensors: false,
      noTimeColumn: true,
      maxSensors: false,
      next: false,
      loading: false
    };
  }

  handleNext = () => {
    console.log(this.state)
    let exerciseNames = []
    let exerciseDuration = []
    for(var i=0;i<this.state.exercises.length;i++)
    {
      exerciseNames.push(this.state.exercises[i].dataType)
      exerciseDuration.push(this.state.exercises[i].duration)
    }

    console.log(exerciseNames)
    console.log(exerciseDuration)

    this.setState({
      loading: true
    })

    axios({
      method: 'post',
      url: '/api/prescribe',
      data: {
        full_name: this.state.name,
        phone: this.state.phone,
        workouts: {
          "workout": exerciseNames,
          "duration": exerciseDuration
        }
      }
    }).catch((err) =>{
      alert('Error: Something went wrong with submitting form')
      this.setState({
        loading: false
      })
      console.log(err); 
    })
    .then((data) =>{
      this.setState({
        loading: false
      })
      alert(data.data.message); 
      window.location.href = `/${this.state.phone}`
    });
  }

  addExercise = () => {
    console.log(this.state.noDisplayName)
    console.log(this.state.name)
    this.setState({
      exercises: this.state.exercises.concat([{ dataType: workoutOptionsMenu[0], duration: durationOptionsMenu[0]}]),
      noSensors: false,
      maxSensors: (this.state.exercises.length+1 == 5)
      
    });
    console.log(this.state.noDisplayName)
    console.log(this.state.name)
  }

  printState = () => {
    if (this.props.verbose) console.log(this.state.exercises);
  }

  /**
   * @description Removes sensor from form and updates the bone selection dropdown lists
   */
  deleteExercise = (removedIndex) => () => {
    if (this.props.verbose) console.log(`Deleting sensor with index ${removedIndex}`);
    this.setState({
      exercises: this.state.exercises.filter((sensor, currIndex) => currIndex !== removedIndex),
      
        noSensors: (this.state.exercises.length-1 < 1),
        maxSensors: false
      
    })
  }

  handlePhoneChange = (event) => {
    this.setState({
      phone: event.target.value
    }, ()=> {
      if(this.state.phone.length === 10) {
        this.setState({noTimeColumn: false})
      } else {
        this.setState({noTimeColumn: true})
      }
    });
  }

  handleDurationChange = (index) => (event) => {
    this.setState({ exercises: listWithNewVal(this.state.exercises, index, "duration", event.target.value) });
  }

  handleExerciseChange = (index) => (event) => {
    this.setState({ exercises: listWithNewVal(this.state.exercises, index, "dataType", event.target.value) });
  }

  handleNameChange = (event) => {
    this.setState({ name: event.target.value }, ()=>{
      if(this.state.name == '' || this.state.name == undefined) {
        this.setState({noDisplayName: true})
      } else {
        this.setState({noDisplayName: false})
      }
    })
  }

  NoExercisesError(props) {
    if (props.noSensors) {
      return <h>Please add at least one exercise.</h>;
    }
    return null;
  }

  render() {
    const loading = this.state.loading === true ? <CircularProgress /> : null; 
    return (
    <div className="therapistScreenContainer">
    <React.Fragment>
      <Card flex={"50%"}>
        <div className="therapistScreenCardContainer">
        <CardContent>
        <Typography variant="h2" gutterBottom style={{marginTop:20}} className="therapistScreenTitle">
          TheraMinder
        </Typography>

        <p><b>Instructions:</b> Assign a weekly workout routine for your client. Your client will receive reminders along with instructions on how to do the exercises</p>
        <p className="msg">Your client will only recieve text messages if subscribed via Twilio</p>
        

        <Typography variant="h6" gutterBottom style={{marginTop:20}}>
            Patient Info
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              label="Patient Name"
              fullWidth
              onChange={this.handleNameChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>

            <TextField
              fullWidth
              type="number"
              label="Patient Phone Number"
              onChange={this.handlePhoneChange}
              required
              error={this.state.noTimeColumn}
              helperText={this.state.noTimeColumn ? 'Format Error: must be 10 digits (i.e 3214231241)' : ' '}
            />

          </Grid>
          </Grid>
          <Typography variant="h6" gutterBottom style={{marginTop:20}}>
            Exercises
          </Typography>
          <Grid container spacing={3}>

          <Grid item xs={12}>
            <this.NoExercisesError noSensors={this.state.noSensors}></this.NoExercisesError>
          </Grid>

          {this.state.exercises.map((sensor, index) => (
              <Grid container item xs={12} spacing={3} justify="flex-start" alignItems="center">
                <Grid item xs={6}>
                  <TextField
                    fullWidth
                    id="datatype_select"
                    select
                    label="Exercise"
                    value={sensor.dataType}
                    onChange={this.handleExerciseChange(index)}
                  >
                    {workoutOptionsMenu.map((typeName) => (
                      <MenuItem key={typeName} value={typeName}>{typeName}</MenuItem>
                    ))}
                  </TextField>
                </Grid>
                <Grid item xs={3}>
                  <TextField 
                  fullWidth
                    type="number"
                    select
                    label="Duration (s)"
                    onChange={this.handleDurationChange(index)}
                    value={sensor.duration}
                    InputProps={{
                      inputProps: {
                        id: "duration"+index,
                        name: "duration",
                        min: "0",
                        placeholder: "Start column"
                      }
                    }}
                    required>
                      {durationOptionsMenu.map((typeName) => (
                      <MenuItem key={typeName} value={typeName}>{typeName}</MenuItem>
                    ))}
                  </TextField>
                </Grid>

                <Grid item xs={3} sm={3} alignItems="right">
                  <Button
                    color='primary'
                    onClick={this.deleteExercise(index)}
                    >
                    Remove
                  </Button>
                </Grid>
              </Grid>
        ))}
        <Grid container justify="center">
          <center>
            <Grid item xs={12} sm={12}>
                <Button
                  onClick={this.addExercise}
                  color='primary'
                  disabled={this.state.maxSensors}
                  endIcon={<AddCircleOutlineIcon />}
                  >
                  Add Exercise
                </Button>
            </Grid>
          </center>

        </Grid>

        </Grid>
        </CardContent>
        <div className="therapstScreenSubmit">
          <CardActions>
            <Button fullWidth type="submit" color="primary" variant="contained" className="button-submit" onClick={this.handleNext} disabled={(this.state.noDisplayName || this.state.noSensors || this.state.noTimeColumn || this.state.loading)}>Submit</Button>
          </CardActions>
          <center>
            {loading}
          </center>
        </div>
        </div>
      </Card>
    </React.Fragment>
    </div>
  );
  }
}

export default TherapistScreen;