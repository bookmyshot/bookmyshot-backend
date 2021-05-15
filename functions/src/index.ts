import * as functions from "firebase-functions";

// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
export const getSlots = functions.https.onRequest((request, response) => {

    functions.logger.info("Request: ", request);

    if(request.query['state'] && request.query['district'])
    {

    }
    
    response.send("Hello from Firebase!");
});
