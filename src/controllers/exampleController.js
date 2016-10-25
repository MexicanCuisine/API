import * as exampleModel from '../models/mongoModels/exampleModel.js';

module.exports = (app) => {
    app.post('/example', (req, res) => {
        res.setHeader('Content-Type', 'text/plain');
        exampleModel.examplePost();
    });

    app.get('/example/id/:id', (req, res) => {
        res.setHeader('Content-Type', 'application/json');
        let id = req.params.id;
        exampleModel.exampleGetId(req, res, id);
    });

    app.get('/example', (req, res) => {
        res.setHeader('Content-Type', 'application/json');
        exampleModel.exampleGet(req, res);
    });

    app.put('/example/id/:id', (req, res) => {
        res.setHeader('Content-Type', 'text/plain');
        let id = req.params.id;
        exampleModel.examplePut(req, res, id);
    });

    app.delete('/example/id/:id', (req, res) => {
        res.setHeader('Content-Type', 'text/plain');
        let id = req.params.id;
        exampleModel.exampleDelete(req, res, id);
    });
}