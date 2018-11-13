var Client = require('node-rest-client').Client;
 
var client = new Client();
var args = {
	 data: { myParam: "hello",myParam2:"1212"
	     }
	     
 };
 
client.post("http://localhost:3000/api/addValueToDict?myParam=Sujeeth&myParam2=100", function (data, response) {
	    // parsed response body as js object
	     console.log(data);
	//         // raw response
	             //console.log(response);
	             });
