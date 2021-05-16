import * as functions from "firebase-functions";
// import firebase from 'firebase';
import axios from 'axios';
import * as config from '../../config';

// const firebaseConfig = {
//     apiKey: config.apiKey,
//     appId: config.appId,
//     projectId: config.projectId,
//     databaseURL: config.sessionDatabase,
//     // preferenceDatabase: config.preferenceDatabase
// }

export const modifyAccessToken = functions.https.onRequest(async (request, response) => {

    functions.logger.info("Request: ", request.body);

    let data: any = request?.body;

    if (data) {

        if (data.hasOwnProperty("access_token")) {

            try {

                // ----------------
                // old method: not working

                // initialize the firebase app
                // let app = await firebase.initializeApp(firebaseConfig, "bookmyshot");

                // // get database instance
                // let database = await firebase.database(app);

                // // get db reference
                // let dbReference = await database.ref("access_token");

                // // set token
                // dbReference.set(data["access_token"]).then(response => {
                //     console.log("set resp: ", response);
                // }).catch(error => {
                //     console.log("error: ", error);
                // });
                // ---------------

                // alternate option: REST API
                axios.put(config.sessionDatabase + "/session.json", {
                    "access_token": data["access_token"]
                }).then(resp => {
                    response.send("Success. Token Updated.");
                }).catch(error => {
                    console.log("axios error: ", error);
                    response.send("Unable to update token");
                })

            } catch (error) {
                response.send("Unable to update token");
            }

        } else {

            response.send("Invalid Request. Missing key token");

        }

    } else {

        response.send("Invalid Request. Missing key token");

    }

});