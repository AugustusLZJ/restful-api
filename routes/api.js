const express = require('express');
const router = express.Router();
const NinjaModel = require('../models/ninja.js')

router.get('/ninjas', function(req, res, next) {
    res.send({type: 'GET'});
});

router.post('/ninjas', function(req, res, next) {
    // console.log("next: "+next);
    NinjaModel.create(req.body).then(function(ninja) {
        res.send(ninja);
    }).catch(next);
});

router.put('/ninjas/:id', function(req, res, next) {
    res.send({type: 'PUT'});
});

router.delete('/ninjas/:id', function(req, res) {
    res.send({type: 'DELETE'});
});

module.exports = router;