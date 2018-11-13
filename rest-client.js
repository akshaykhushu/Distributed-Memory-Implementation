var Client = require('node-rest-client').Client;
 
var client = new Client();
console.time('Network Latency');
// direct way
 client.get("http://localhost:3000/api/getValueFromKey?key=element234234", function (data, response) {
 //parsed response body as js object
         console.log(data);
		
                 //console.log(response);
                });

console.timeEnd('Network Latency');
