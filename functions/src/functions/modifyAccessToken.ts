import * as functions from "firebase-functions";

export const modifyAccessToken = functions.https.onRequest((request, response) => {

    response.end("Hello from modify access token");

});
