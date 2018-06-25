'use strict';


const mongoose = require('mongoose'),
    User = mongoose.model('Users');

exports.allUserList = function (req, res) {
    User.find({}, function (err, user) {
        if (err)
            res.send(err);
        res.json(user);
    });
};


exports.createUser = function (req, res) {
    const newUser = new User(req.body);
    newUser.save(function (err, user) {
        if (err)
            res.send(err);
        res.json(user);
    });
};


exports.viewUser = function (req, res) {
    User.findById(req.params.userId, function (err, user) {
        if (err)
            res.send(err);
        res.json(user);
    });
};


exports.updateUser = function (req, res) {
    User.findOneAndUpdate({_id: req.params.userId}, req.body, {new: true}, function (err, user) {
        if (err)
            res.send(err);
        res.json(user);
    });
};


exports.delete_a_task = function (req, res) {


    User.remove({
        _id: req.params.userId
    }, function (err, task) {
        if (err)
            res.send(err);
        res.json({message: 'User successfully deleted'});
    });
};