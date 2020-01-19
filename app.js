const express = require('express');
const app = express()
const port = 8081
const _ = require('underscore');

const insert = require('./insert');

const COLLECTION_NAME = 'kobylany'
app.get('/', (req, res) => {
 res.sendStatus(404); 
});

app.get('/kobylany', (req, res) => {
	console.log(req.query);
	if(req.query.valuename === 'PM25') {
		console.log('PM 2.5', req.query.value);
		insert(COLLECTION_NAME, {
			'PM2.5' : req.query.value
		})
	}
	if(req.query.valuename === 'PM10') {
		console.log('PM 10', req.query.value);
		insert(COLLECTION_NAME, {
			'PM10' : req.query.value
		})
	}
	res.sendStatus(200);
});
app.listen(port, () => console.log(`Example app listening on port ${port}!`))
