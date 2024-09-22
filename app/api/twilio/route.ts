import { getLastSession, pushSession, starSessionFlux } from "./services/session";
import { UserModel } from "../models/user.model";
import { NextResponse } from "next/server";
export const GET =  (req, res) => {
    return NextResponse.json('OK');
}
export const POST = (req:any, res) => {
    const message = req.body;
    const chats = req.session.chats;
    let lastsession: any = getLastSession(message.From, chats);
    if(lastsession !== null){
        //TO DO: Send message from flux step
        starSessionFlux(lastsession, message, req);
        
        return NextResponse.json('OK');

        //lastsession.step++;
        //updateSession(lastsession, chats);
    } else {
        const sessionObject: UserModel = {
            waId: message.From,
            step: 0
        };
        req.session.chats = pushSession(sessionObject, chats);
        starSessionFlux(sessionObject, message, req);
        return NextResponse.json('OK');
    }
    
    
}