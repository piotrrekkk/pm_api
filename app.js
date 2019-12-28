const express = require('express')
const app = express()
const port = 8081

app.get('/', (req, res) => {
 res.sendStatus(200);
 console.log('success');
});

app.get('/kobylany', (req, res) => {
	console.log(req.query);
	res.sendStatus(200);
});
app.listen(port, () => console.log(`Example app listening on port ${port}!`))
