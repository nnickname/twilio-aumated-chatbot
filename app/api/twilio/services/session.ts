import { ChatSteps } from "../steps.model";
import { UserModel } from "../../models/user.model";
import { sendTwilioMessage } from "./twilio";
import { CommandsAvailable } from "../../commands/commans.model";

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
                if(message.Body ===  CommandsAvailable[cmd].action_controller[child]){
                    if(action){
                        CommandsAvailable[cmd].action(message.From, message, req);
                        return true;
                    }
                    

                }
            }
        }
        let chatstring = ChatSteps[lastsession.step].body + '\n';
        for(var child in ChatSteps[lastsession.step].steps){ // Not change for map
            chatstring = chatstring + '\n ' + ChatSteps[lastsession.step].steps[child].body;
            if(message.Body === ChatSteps[lastsession.step].steps[child].action_controller){
                if(action){
                    ChatSteps[lastsession.step].steps[child].action(message.From, message, req);
                    return true;
                }
                
            }
        }
        sendTwilioMessage(message.From, chatstring);
        return true;
    }
    return false;
}