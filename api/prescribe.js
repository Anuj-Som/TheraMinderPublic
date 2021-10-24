const express = require('express')
const router = express.Router()

const extension = require('./lib/extension.js')
const appConfig = require('../app.config.js')

// Set up twilio authentication
const twilio = require('twilio')
const accountSid = 'REDACTED'; // Your Account SID from www.twilio.com/console
const authToken = 'REDACTED'; // Your Auth Token from www.twilio.com/console
const client = new twilio(accountSid, authToken);

// Set up firebase authentication
const fs = require('firebase-admin');
const serviceAccount = require('./firestore_auth.json');
fs.initializeApp({
 credential: fs.credential.cert(serviceAccount)
});
const db = fs.firestore(); 

router.post('/', function (req, res, next) {
  // if (!extension.validateRequestHeader(req, res)) return false

  let post_body = req.body; 
  let phone_number_raw = post_body.phone.replace("-","")
  let phone_number = `+1${phone_number_raw}`

  let full_name = post_body.full_name
  let workouts = post_body.workouts['workout']
  let durations = post_body.workouts['duration']

  let handleWorkOuts = () => {
    let ret="";
    for(var i = 0; i < workouts.length; i++){
        ret +=`\n ${(i+1)}: ${workouts[i]} for ${durations[i]} seconds`
    }
    return ret; 
  }

  let generateURL = (phone_number_raw) => {
    let ret = `https://${req.get('host')}/workout/${phone_number_raw}/`;
    return ret; 
  }
  let url = generateURL(phone_number_raw)
  let message = `Hello ${full_name}. Please complete the following exercises for today's PT workout:\n${handleWorkOuts()}\n\nThe following link will guide you through your exercises:\n${url}` 

  const prescriptionsDB = db.collection('prescriptions'); 
  const data = {
    full_name, 
    workouts, 
    durations,
    completed: false
  }

  prescriptionsDB.doc(phone_number).set(data).then(() =>{
      client.messages
      .create({
        body: message,
        to: phone_number, // Text this number
        from: '+12512903153', // From a valid Twilio number
      })
      .catch((err) => {
        res.send({message: 'Data saved to database. However, could not send text message. Please validate phone number via Twilio'})
      })
      .then((message) => {
        res.send({message: 'Data saved to database and message sent via text!'})
        }
      );
  }); 
})

module.exports = router




