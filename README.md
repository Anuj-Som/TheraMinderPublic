# TheraMinderPublic
Public version of TheraMinder HackDuke 2021 Project

Last edited 10-24-2021

#### Authors: 

Matthew Wang, Sophie Williams, and Anuj Som

## Inspiration
In order for physical therapy to be effective, it is essential that patients consistently perform the therapist's prescribed exercises outside of the physical therapy session. Typically, therapists will give patients a sheet of paper with an exercise routine for the week. Without a daily reminder however, keeping up with daily exercises can be difficult leading to a slower recovery time. Our team was inspired to create a solution that will help physical therapy patients stay on track to recovery.

## What it does
To help patients consistently do their exercises, the physical therapist can submit a patient's name, phone number, and exercise routine into a web form. Patients will then receive text reminders to complete their daily exercise and a link to a personalized guide that will walk them through each exercise in their prescribed routine.

## How we built it
The team created a ReactApp that stores patient routine information in FireBase. We also integrated our app with Twilio to allow patients to receive messages via text. 

## Challenges we ran into

## Accomplishments that we're proud of

## What we learned

The team learned how to implement Twilio, set up Firebase with a React App. 

## What's next for TheraMinder

Currently, the notifications from TheraMinder are only sent when the web form is first submitted. A timer to send out reminders daily will need to implemented. Additionally, a feature will be added in which patients can indicate whether they have completed their routine. Additional reminders will be sent if patients do not complete their exercises if they do not complete their exercises within a few hours after receiving a reminder. 
