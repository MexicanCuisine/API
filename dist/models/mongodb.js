'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.mongoConnect = undefined;

var _oscarConfig = require('../oscar.config.js');

var _oscarConfig2 = _interopRequireDefault(_oscarConfig);

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mongoConnect = function mongoConnect(mongoose) {
	mongoose.connect(_oscarConfig2.default.mongodb.hostname);
	var mongodb = mongoose.connection;

	mongodb.on('error', console.error.bind(console, 'Mongodb Connection Error '));
	mongodb.once('open', function () {
		console.log('Mongodb Connected Successfully');
	});
};

exports.mongoConnect = mongoConnect;