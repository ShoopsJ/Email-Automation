
exports.handler = async event => {
    console.log('event', event)

    const message = 'Hey Shoops
    
  Dont forget to send those numbers';

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
};