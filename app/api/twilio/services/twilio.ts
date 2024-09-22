const accountSid = process.env.ACCOUNT_SID;
const authToken = process.env.ACCOUNT_TOKEN;
import twilioclient from 'twilio';
export const twilioclient_module = twilioclient(accountSid, authToken);
export const sendTwilioMessage = (to:string, body: string) => {
    console.log(to);

    twilioclient_module.messages
    .create({
        body: body,
        from: 'whatsapp:+14155238886',
        to: to
    })
}