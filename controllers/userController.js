const User = require('../mongooseModels/user');

module.exports = {
    find: function(req, res) {
        User.find().then(function(data) {
        res.json(data);
        }).catch(function(err) {
        res.json(err);
        });
    },

    findById: function (req, res) {
        User
            .findById(req.params.id)
            .then(data => res.json(data))
            .catch(err => res.status(422).json(err));
    },

    insert: function(req, res) {
        console.log(req.body)
        User.create(req.body).then(function(data) {
        res.json(data);
        }).catch(function(err) {
        res.json(err);
        });
    },

    delete: function(req, res) {
        User.remove({
        _id: req.params.id
        }).then(function(data) {
        res.json(data);
        }).catch(function(err) {
        res.json(err);
        });
    },

    update: function(req, res) {
        User.findOneAndUpdate({
        _id: req.params.id
        }).then(function(data) {
        res.json(data);
        }).catch(function(err) {
        res.json(err);
        });
    }
};




