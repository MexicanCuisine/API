'use strict';

// Module Imports
import express from 'express';
import mongoose from 'mongoose';
import * as mongodb from './models/mongodb.js';

let app = express();

// Datbase Connect
mongoose.Proise = global.Promise;
mongodb.mongoConnect(mongoose);

// Controller Imports
require('./controllers/exampleController.js')(app);
require('./controllers/default.js')(app);

app.listen(3000, function() {
	console.log('Listening on Port 3000');
});
