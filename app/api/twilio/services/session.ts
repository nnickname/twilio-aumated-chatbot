import { ChatSteps } from "../steps.model";
import { UserModel } from "../../models/user.model";
import { sendTwilioMessage } from "./twilio";
import { CommandsAvailable } from "../../commands/commans.model";
import { getIronSession, SessionOptions } from "iron-session";
import { cookies } from "next/headers";
export async function getSession() {
    const session = await getIronSession<SessionData>(cookies(), sessionOptions);
    return session;
  }
export interface SessionData {
  chats: UserModel[]
}



export const sessionOptions: SessionOptions = {
  // You need to create a secret key at least 32 characters long.
  password: 'qZpYtWkMnRjVhLcXbFsDdQeHwJzTnVmRkJ',
  cookieName: "user-session",
  cookieOptions: {
    httpOnly: true,
    // Secure only works in `https` environments. So if the environment is `https`, it'll return true.
    secure: process.env.NODE_ENV === "production",
  },
};
export const updateSession = (session: UserModel, users: UserModel[]) => {
    let usersCast: UserModel[] = [...users];
    const index = users?.findIndex((e) => e.waId === session.waId);
    if(index !== -1){
        usersCast[index] = session;
        return usersCast;
    }
    return null;
}

export const getLastSession = (waId: string, users: UserModel[]) => {
    return users?.find((e) => e.waId === waId) ?? null;
}
export const pushSession = (session: UserModel, users: UserModel[]) => {
    if(users === undefined) {
        users = [];
    }
    return [...users, session];
}
export const starSessionFlux = (lastsession: UserModel, message: any, req: any, action: boolean = true) => {
    if(lastsession?.step <= ChatSteps.length){
        
        for(var cmd in CommandsAvailable){ // Not change for map
            for(var child in CommandsAvailable[cmd].action_controller){
                if(message.get('Body') ===  CommandsAvailable[cmd].action_controller[child]){
                    if(action){
                        CommandsAvailable[cmd].action(message.get('WaId'), message, req);
                        return true;
                    }
                    

                }
            }
        }
        let chatstring = ChatSteps[lastsession.step].body + '\n';
        for(var child in ChatSteps[lastsession.step].steps){ // Not change for map
            chatstring = chatstring + '\n ' + ChatSteps[lastsession.step].steps[child].body;
            if(message.get('Body') === ChatSteps[lastsession.step].steps[child].action_controller){
                if(action){
                    ChatSteps[lastsession.step].steps[child].action(message.get('WaId'), message, req);
                    return true;
                }
                
            }
        }
        sendTwilioMessage(message.get('WaId'), chatstring);
        return true;
    }
    return false;
}