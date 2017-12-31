const express = require('express');
const router = express.Router();
const NinjaModel = require('../models/ninja.js')

router.get('/ninjas', function(req, res) {
    res.send({type: 'GET'});
});

router.post('/ninjas', function(req, res) {
    NinjaModel.create(req.body).then(function(ninja) {
        res.send(ninja);
    });
});

router.put('/ninjas/:id', function(req, res) {
    res.send({type: 'PUT'});
});

router.delete('/ninjas/:id', function(req, res) {
    res.send({type: 'DELETE'});
});

module.exports = router;