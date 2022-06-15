
const AWS = require_('aws-sdk');
const Responses = require('')

const SES = new AWS.SES();

exports.handler = async event => {
    console.log('event', event)

    const message = "Hey Shoops"
    
  Dont forget to send those numbers";

    const params = {
        Destination:{
            toAddresses: ['serverlessfullstac@gmail.com']
        },
        Message:{
            Body:{
                Text: {Data: Message},
            },
        Subject: {Data:'reminder email'},    
        },
        Source: '#my email address',
    };
    try {
         await SES.sendemail(params).promise();
         return Response._200({message: 'email sent'})
    } catch (error){
        console.log('error');
        return Responses._400({message: 'faled to send'})
    }
};