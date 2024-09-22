const accountSid = 'ACf92bbf528238b4be99477da8a1a2d121';
const authToken = '65b4d0c81087f53826e23b5cd11cc610';
import twilioclient from 'twilio';
export const twilioclient_module = twilioclient(accountSid, authToken);
export const sendTwilioMessage = (to:string, body: string) => {
    console.log({
        body: body,
        from: 'whatsapp:+14155238886',
        to: 'whatsapp:' + to
    });

    twilioclient_module.messages
    .create({
        body: body,
        from: 'whatsapp:+14155238886',
        to: 'whatsapp:' + to
    })
}