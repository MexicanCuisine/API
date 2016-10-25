'use strict';

module.exports = function (app) {
	app.get('/', function (req, res) {
		res.status(400).send('Error, incorrect request.');
	});

	app.use(function (req, res) {
		res.status(404).send("Error, Request Not Found");
	});
};