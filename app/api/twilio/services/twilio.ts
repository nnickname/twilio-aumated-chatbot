const accountSid = process.env.NEXT_PUBLIC_ACCOUNT_SID;
const authToken = process.env.NEXT_PUBLIC_ACCOUNT_TOKEN;;
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