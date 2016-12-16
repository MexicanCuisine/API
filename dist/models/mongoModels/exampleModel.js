'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.exampleGetByParam = exports.exampleDelete = exports.examplePut = exports.examplePost = exports.exampleGet = undefined;

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var exampleSchema = new _mongoose2.default.Schema({
    title: String,
    date: { type: Date, default: Date.now }
});

var exampleModel = _mongoose2.default.model('Example', exampleSchema);

function examplePost() {
    // Needs Authentication

    var data = new exampleModel({ title: 'hello' });

    data.save(function (err) {
        if (err) {
            res.status(500).send('Error Saving');
        } else {
            res.status(200).send('Data Saved');
        }
    });
}

function exampleGet(callback) {
    exampleModel.find({}).exec(function (err, docs) {
        if (err) {
            callback(err, null);
        } else {
            callback(null, docs);
        }
    });
}

function exampleGetByParam(param, value, callback) {
    console.log(param + ' ' + value);
    exampleModel.find(_defineProperty({}, param, value)).exec(function (err, docs) {
        if (err) {
            callback(err, null);
        } else {
            callback(null, docs);
        }
    });
}

function examplePut(req, res, id) {
    // Needs Authentication
    // Not tested.
    var tmpTitle = 'Example Change';
    exampleModel.findOneAndUpdate({ '_id': id }, { title: tmpTitle }).exec(function (err) {
        if (err) {
            res.status(500).send('Error Updating');
        } else {
            res.status(200).send('Data Updated');
        }
    });
}

function exampleDelete(req, res, id) {
    // Needs Authentication
    // Not tested.

    exampleModel.remove({ '_id': id }).exec(function (err) {
        if (err) {
            res.status(500).send('Error Deleting');
        } else {
            res.status(200).send('Data Deleted');
        }
    });
}

exports.exampleGet = exampleGet;
exports.examplePost = examplePost;
exports.examplePut = examplePut;
exports.exampleDelete = exampleDelete;
exports.exampleGetByParam = exampleGetByParam;