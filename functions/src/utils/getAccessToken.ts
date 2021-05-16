import firebase from 'firebase';
import * as config from '../../config';

const firebaseConfig = {
    apiKey: config.apiKey,
    appId: config.appId,
    projectId: config.projectId,
    sessionDatabase: config.sessionDatabase,
    preferenceDatabase: config.preferenceDatabase
}

// initialize the firebase app
firebase.initializeApp(firebaseConfig);

// get database instance
let database = firebase.database();

// get db reference
let dbReference = database.ref();

// get data
dbReference.get().then(response => {
    console.log("response: ",response);
}).catch(error => {
    console.log("error: ", error);
});

// dbReference.child("access_token").set("token");