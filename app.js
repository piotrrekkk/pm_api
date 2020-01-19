const express = require('express');
const app = express()
const port = 8081
const _ = require('underscore');

app.get('/', (req, res) => {
 res.sendStatus(404); 
});

app.get('/kobylany', (req, res) => {
	console.log(req.query);
	console.log('PM 2.5', _.findKey(req.query, 'PM25').value);
	console.log('PM 10', _.findKey(req.query, 'PM10').value);
	res.sendStatus(200);
});
app.listen(port, () => console.log(`Example app listening on port ${port}!`))
