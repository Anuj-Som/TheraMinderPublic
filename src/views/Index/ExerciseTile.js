import * as React from 'react';
import { Button } from '@material-ui/core';
import { TextField } from '@material-ui/core';
import { MenuItem } from '@material-ui/core';
import { Grid } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import { Card, CardContent, CardActions, CardMedia} from '@material-ui/core';

export default function ExerciseCard(props) {
  let duration = props.duration
  let duration_text = ""

  let minutes = parseInt(duration / 60)
  let seconds = (duration % 60)

  console.log(minutes)
  console.log(seconds)

  if(minutes > 0){
    duration_text += `${minutes} minute(s) `
  }
  if(seconds > 0){
    duration_text += `${seconds} second(s)`
  }

  return (
    <div className="exerciseTile">
      <Card sx={{ maxWidth: 345 }}>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            <b>
              {props.name} for {duration_text}
            </b>
          </Typography>
          <CardMedia
            component="img"
            height="200"
            image={props.image}
          />
          <div className="instructions">
            <Typography variant="body2" color="text.secondary">
              {props.instructions}
            </Typography>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}