const express = require('express')
const router = express.Router()

const extension = require('./lib/extension.js')
const appConfig = require('../app.config.js')


const fs = require('firebase-admin');
const serviceAccount = require('./firestore_auth.json');

const db = fs.firestore(); 


router.get('/', function (req, res, next) {                             //NO PLUS WHEN GETTING REQUEST
  // if (!extension.validateRequestHeader(req, res)) return false
    let phone_number = `+1${req.query.phone_number}`; 

    try{
        const prescriptionsDB = db.collection('prescriptions'); 
        let data = prescriptionsDB.doc(phone_number).get().then((doc) =>{
            if(!doc.exists){
                res.status(500).send({ error: 'Phone number not found' })
            }else{
                res.send(doc.data())
            }
        })
    }catch(err){
        res.status(500).send({ error: err })
    }
})

module.exports = router