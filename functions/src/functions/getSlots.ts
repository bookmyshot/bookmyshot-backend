import * as functions from "firebase-functions";
import { SlotManager } from "../manager/slots_manager";

export const getSlots = functions.https.onRequest((request, response) => {

    functions.logger.info("Request: ", request);

    if (request.params['state'] && request.params['district']) {

        let slotManager: SlotManager = new SlotManager();

        let data = slotManager.getSlots(request.params['state'] , request.params['district'] )
        response.send(data);
    }
    else {
        response.end("Invalid parame");
    }

});
