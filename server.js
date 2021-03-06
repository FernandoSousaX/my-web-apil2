var config = require('./config.js');
 var express = require('express'),
	 app = express(),
	 mongoose = require('mongoose'),
	 bodyParser = require('body-parser');

 app.use(bodyParser.urlencoded({ extended: true }));
 app.use(bodyParser.json());

 var jwt = require('jsonwebtoken');

 app.post('/login', (req, res) => {
	 const user = { username, password } = req.body;
	 if (username === config.adminUsername && password === config.adminPassword) {
		 jwt.sign({ user }, config.tokenSecretKey, { expiresIn: config.tokenExireTime }, (err, token) => {
			 res.json({
				 message: 'Authenticated! Use this token in the Authorization header', Example: 'Authorization : Bearer cn389ncoiwuencr...',
				 token: token
			 });
		 });
	 } else {
		 res.status(401).send('Wrong username and/or password');
	 }
});

 app.all('/api/*', ensureToken, (req, res, next) => {
	 jwt.verify(req.token, config.tokenSecretKey, function (err, data) {
		 if (err) {
			 res.sendStatus(403);
		 } else {
			 console.log('User: ' + data.user.username);
			next();
		 }
	 });
 });

 function ensureToken(req, res, next) {
	 const bearerHeader = req.headers['authorization'];
	 if (typeof bearerHeader !== 'undefined') {
		 const bearer = bearerHeader.split(' ');
		 const bearerToken = bearer[1];
		 req.token = bearerToken;
		 next();
	 } else {
		 res.sendStatus(403);
	 }
 }

 var tasksModel = require('./api/models/tasksModel');
 var tasksRoute = require('./api/routes/tasksRoute');
 tasksRoute(app);
 var tasks2Model = require('./api/models/tasks2Model');
 var tasks2Route = require('./api/routes/tasks2Route');
 tasks2Route(app);

 mongoose.Promise = global.Promise;
 const connection = mongoose.connect('mongodb+srv://fernando:654321aA@cluster0-sejql.gcp.mongodb.net/TesteDB?retryWrites=true', { useNewUrlParser: true });

 var server = app.listen(config.port, () => {
	 console.log('Listening on ' + server.address().port);
 });

 app.use(function (req, res) {
	 res.status(404).send({ url: req.originalUrl + ' not found' })
 });