const

request = require('request'),

requestOption = {
    method: 'Post',
    url:'https://api.telegram.org/bot453657146:AAFDwb72p-4HCNLkkeUaeKjaByZej5ILFns/sendMessage',
    body: {
        chat_id: 51214940,
        text: 'Hi Amirmah:D',    
    },
    json: true,
},

requestCallback = (error, response, body) => {
    if (error) {
        console.log('Error', error);
        return;
    }
    if (!(body && body.ok)) {
        console.log('Error: not ok', body);   
        return;   
    }
    
    console.log('OK');
},

makeRequest = () => {
    request(requestOption, requestCallback); 
}
;

makeRequest();