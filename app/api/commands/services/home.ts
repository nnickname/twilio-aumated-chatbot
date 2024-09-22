import { getLastSession, starSessionFlux, updateSession } from "../../twilio/services/session";

export const HomeAction =  (number, message, req)=>{
    const chats = req.session.chats;
    let lastsession: any = getLastSession(number, chats);
    if(lastsession !== null){
        lastsession.step = 0;
        req.session.chats = updateSession(lastsession, chats);
        starSessionFlux(lastsession, message, req, false);
        
    }
}