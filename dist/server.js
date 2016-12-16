'use strict';

// Module Imports

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

var _mongodb = require('./models/mongodb.js');

var mongodb = _interopRequireWildcard(_mongodb);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();

// Datbase Connect
_mongoose2.default.Promise = global.Promise;
mongodb.mongoConnect(_mongoose2.default);

// Controller Imports
require('./controllers/exampleController.js')(app);
require('./controllers/default.js')(app);

app.listen(3001, function () {
	console.log('Listening on Port 3001');
});