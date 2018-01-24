const express = require('express');
const router = express.Router();
const NinjaModel = require('../models/ninja.js')

router.get('/ninjas', function(req, res, next) {
    //NinjaModel.find({}).then(function(ninjas) {
    //    res.send(ninja);
    //});
    NinjaModel.aggregate().near({
        near: {
            type: "Point",
            coordinates: [parseFloat(req.query.lng), parseFloat(req.query.lat)]
        },
        distanceField: "dist.calculated",
        maxDistance: 100000, 
        spherical: true
    }).then(function(ninjas) {
        res.send(ninjas);
    }).catch(next);
});

router.post('/ninjas', function(req, res, next) {
    // console.log("next: "+next);
    NinjaModel.create(req.body).then(function(ninja) {
        res.send(ninja);
    }).catch(next);
});

router.put('/ninjas/:id', function(req, res, next) {
    NinjaModel.findByIdAndUpdate({_id: req.params.id}, req.body, {new: true}).then(function(ninja) {
        res.send(ninja);
    });
});

router.delete('/ninjas/:id', function(req, res, next) {
    // console.log(req.params.id);
    NinjaModel.findByIdAndRemove({_id: req.params.id}).then(function(ninja) {
        res.send(ninja);
    }).catch(next);
});

module.exports = router;