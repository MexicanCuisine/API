'use strict';

var _exampleModel = require('../models/mongoModels/exampleModel.js');

var exampleModel = _interopRequireWildcard(_exampleModel);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

module.exports = function (app) {
    app.post('/example', function (req, res) {
        res.setHeader('Content-Type', 'text/plain');
        exampleModel.examplePost();
    });

    app.get('/example/id/:id', function (req, res) {
        res.setHeader('Content-Type', 'application/json');
        var id = req.params.id;
        exampleModel.exampleGetId(req, res, id);
    });

    app.get('/example', function (req, res) {
        res.setHeader('Content-Type', 'application/json');
        exampleModel.exampleGet(req, res);
    });

    app.put('/example/id/:id', function (req, res) {
        res.setHeader('Content-Type', 'text/plain');
        var id = req.params.id;
        exampleModel.examplePut(req, res, id);
    });

    app.delete('/example/id/:id', function (req, res) {
        res.setHeader('Content-Type', 'text/plain');
        var id = req.params.id;
        exampleModel.exampleDelete(req, res, id);
    });
};