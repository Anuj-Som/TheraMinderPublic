import React, { Component } from 'react'
import axios from 'axios'
import { Grid } from '@material-ui/core';
import ExerciseCard from './ExerciseTile.js';
//import Stack from '@mui/material/Stack'

import appConfig from '../../../app.config.js'
import exerciseData from '../../static/exercise_data.js'

axios.defaults.headers.common['api-key'] = appConfig.apiKey
  
class Workout extends Component {
  constructor (props) {
    super(props)
    this.state = {
      phone: this.props.match.params.phone, 
      data: null,
      error: null
    }
  }

  fetchPrescriptions = () => {
    const params = {
      phone_number: this.state.phone
    }

    axios.get('/api/get/prescribe', { params }).then((response) => {
      this.setState({
        data: response.data
      })
    }).catch((error) => {
      this.setState({
        error: 'Something went wrong'
      })
    })
  }

  componentDidMount = () => {
    this.fetchPrescriptions()
  }

  render () {
    let patient = this.state.data
    let render = null; 
    let error = null; 

    console.log(patient)
    if(patient != null){
      render = `${patient.full_name}\n`
    }

    if(this.state.error != null){
      error = 'Something went wrong'
      render = null; 
    }

    return (
      <div className='home'>
        <div className='name'>
          <h1>Welcome {render}</h1>
          <h1>{error}</h1>
          <Grid>
            { patient ? patient.workouts.map((typeName) => (
              <div>
                    {/* <h1>{typeName}</h1>
                    <img src={exerciseData[typeName.toString()].image_url}></img>
                    <b>{exerciseData[typeName.toString()].instructions}</b> */}
                    <ExerciseCard name={typeName} image={exerciseData[typeName.toString()].image_url} duration={patient.durations[patient.workouts.indexOf(typeName)]}
                    instructions={exerciseData[typeName.toString()].instructions.concat(`\nContinue exercising for ${patient.durations[patient.workouts.indexOf(typeName)]} seconds.`)}/>

              </div>
                  )) : null}
          </Grid>
        </div>
        <p>© TheraMinder, 2021</p>
      </div>
    )
  }
}

export default Workout
