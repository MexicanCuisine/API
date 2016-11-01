'use strict';

var _exampleModel = require('../models/mongoModels/exampleModel.js');

var exampleModel = _interopRequireWildcard(_exampleModel);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

module.exports = function (app) {
    app.post('/example', function (req, res) {
        res.setHeader('Content-Type', 'text/plain');
        exampleModel.examplePost();
    });

    app.get('/example/title/:title', function (req, res) {
        res.setHeader('Content-Type', 'application/json');
        var value = req.params.title,
            param = 'title';
        exampleModel.exampleGetByParam(param, value, function (err, docs) {
            if (err) {
                res.status(500).send();
            } else {
                res.status(200).send(docs);
            }
        });
    });

    app.get('/example', function (req, res) {
        res.setHeader('Content-Type', 'application/json');
        exampleModel.exampleGet(function (err, docs) {
            if (err) {
                res.status(500).send();
            } else {
                res.status(200).send(docs);
            }
        });
    });

    app.delete('/example/id/:id', function (req, res) {
        res.setHeader('Content-Type', 'text/plain');
        var id = req.params.id;
        exampleModel.exampleDelete(req, res, id);
    });
};