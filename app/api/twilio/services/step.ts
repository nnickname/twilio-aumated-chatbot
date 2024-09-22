import { UserModel } from "../../models/user.model";
import { getLastSession, pushSession, starSessionFlux, updateSession } from "./session";

export const NextStep =(number, message, req)=>{
    // TO DO: Create hook
    const chats = req.session.chats;
    let lastsession: any = getLastSession(number, chats);
    if(lastsession !== null){
        lastsession.step++;
        req.session.chats = updateSession(lastsession, chats);
        starSessionFlux(lastsession, message, req);
    } else {
        const sessionObject: UserModel = {
            waId: message.From,
            step: 0
        };
        sessionObject.step++;
        req.session.chats = pushSession(sessionObject, chats);
        starSessionFlux(sessionObject, message, req);
    }
};