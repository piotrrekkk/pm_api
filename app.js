#!/usr/bin/env nodejs

const express = require('express');
const app = express()
const port = 8081
const _ = require('underscore');

const insert = require('./insert');
const showdata = require('./showdata');

app.get('/', (req, res) => {
	res.sendStatus(404);
});

app.get('/insert', (req, res) => {
	if (req.query.uuid !== '6yW2MnDaqbGw2Ct4') {
		return;
	}
	if (req.query.valuename === 'PM25') {
		insert.insertToDb(req.query.location, {
			location: req.query.location,
			time: new Date().toString(),
			type: 'PM 2.5',
			value: req.query.value
		})
		res.sendStatus(200);
		return;
	}
	if (req.query.valuename === 'PM10') {
		insert.insertToDb(req.query.location, {
			location: req.query.location,
			time: new Date().toString(),
			type: 'PM 10',
			value: req.query.value
		})
		res.sendStatus(200);
		return;
	}
})
app.get('/data', (req, res) => {
	showdata.showData(req.query.location).then(data => {
		res.json(data);
	})
})

app.use('/static', express.static('public'));

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
