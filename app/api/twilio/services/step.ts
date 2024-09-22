import { UserModel } from "../../models/user.model";
import { getLastSession, getSession, pushSession, starSessionFlux, updateSession } from "./session";

export const NextStep =async (number, message, req)=>{
    const chats = await getSession();
    let lastsession: any = getLastSession(number, chats.chats);
    if(lastsession !== null){
        lastsession.step++;
        req.session.chats = updateSession(lastsession, chats.chats);
        starSessionFlux(lastsession, message, req);
    } else {
        const sessionObject: UserModel = {
            waId: message.From,
            step: 0
        };
        sessionObject.step++;
        chats.chats = pushSession(sessionObject, chats.chats);
        await chats.save();
        starSessionFlux(sessionObject, message, req);
    }
};