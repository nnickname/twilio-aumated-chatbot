import { getLastSession, getSession, pushSession, starSessionFlux } from "./services/session";
import { UserModel } from "../models/user.model";
import { NextRequest, NextResponse } from "next/server";
export const GET =  (req, res) => {
    return NextResponse.json('OK');
}

export const POST = async (req:NextRequest, res) => {
    const message = await req.formData();
    const chats = await getSession();
    let lastsession: any = getLastSession(message['From'], chats.chats);
    if(lastsession !== null){
        //TO DO: Send message from flux step
        starSessionFlux(lastsession, message, req);
        
        return NextResponse.json('OK');

        //lastsession.step++;
        //updateSession(lastsession, chats);
    } else {
        const sessionObject: UserModel = {
            waId: message['From'],
            step: 0
        };
        chats.chats = pushSession(sessionObject, chats.chats);
        await chats.save();
        starSessionFlux(sessionObject, message, req);
        return NextResponse.json('OK');
    }
    
    
}