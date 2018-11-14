//Main File

const express = require('express');
const app = express();
const router = express.Router();
const port = 3000;

//url: http://localhost:3000/


// all routes prefixed with /api
app.use('/api', router);

// using router.get() to prefix our path
// url: http://localhost:3000/api/
router.get('/', (request, response) => {
  response.json({message: 'Hello, welcome to my server'});
});

const url = require('url');

app.get('/', (request, response) => response.send('Hello World'));
app.use('/api', router);
var list=[]
let hash = require('string-hash');

router.get('/getValueFromKey', (request, response) => {
	var urlParts = url.parse(request.url, true);
  	var parameters = urlParts.query;
  	var myParam = parameters.key;

	console.time('Server Latency')
  	var myResponse = list[hash(myParam)]
	response.json({Key: myParam, Value : myResponse});
	console.timeEnd('Server Latency')
});

router.get('/populateMap',(request,response)=>{
	for (x=0; x < 500000; x++) {
  		list[hash(`element${x}`)]=x;
	}
	//console.log(list[999999]);
	response.json("map populated!");
});

router.post('/addValueToDict', (request,response) => {
	var urlParts = url.parse(request.url, true);
	var parameters = urlParts.query;
	var myParam = parameters.key;
	var myParam2  = parameters.value;

	list[hash(myParam)] = myParam2;
	console.log(list);
});

// set the server to listen on port 3000
app.listen(port, () => console.log(`Listening on port ${port}`));
