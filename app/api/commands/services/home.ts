import { getLastSession, getSession, starSessionFlux, updateSession } from "../../twilio/services/session";

export const HomeAction =  async (number, message, req)=>{
    const chats = await getSession();
    let lastsession: any = getLastSession(number, chats.chats);
    if(lastsession !== null){
        lastsession.step = 0;
        req.session.chats = updateSession(lastsession, chats.chats);
        starSessionFlux(lastsession, message, req, false);
        
    }
}