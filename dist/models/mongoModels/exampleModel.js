'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.exampleGetId = exports.exampleDelete = exports.examplePut = exports.examplePost = exports.exampleGet = undefined;

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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

function exampleGet(req, res) {
    exampleModel.find({}).exec(function (err, docs) {
        if (err) {
            res.status(500).send('Error Fetching');
        } else {
            res.status(200).send(docs);
        }
    });
}

function exampleGetId(req, res, id) {
    console.log(id);
    exampleModel.findOne({ '_id': id }).exec(function (err, docs) {

        if (err) {
            res.status(500).send('Error Fetching');
        } else {
            res.status(200).send(docs);
        }
    });
}

function examplePut(req, res, id) {
    // Needs Authentication
    // Not tested.
    var tmpTitle = 'Example Change';
    exampleModel.findOneAndUpdate({ id: id }, { title: tmpTitle }).exec(function (err) {
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

    exampleModel.remove({ id: id }).exec(function (err) {
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
exports.exampleGetId = exampleGetId;