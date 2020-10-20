var mongoose = require('mongoose');

Task = mongoose.model('Tasks');

exports.listAllTasks = function(req, res) {
    Task.find({}, function(err, tasks) {
        if(err) {
            res.json({status: false, data: 'Invalid Request!'});
        }

        res.json({status: true, data: tasks});
    });
};

exports.createATask = function(req, res) {
    var newTask = new Task(req.body);

    newTask.save(function(err, task) {
        if(err) {
            res.json({status: false, data: 'Unable to create!'});
        }

        res.json({status: true, data: task});
    });
};

exports.readASingleTask = function(req, res) {
    Task.findById(req.params.taskId, function(err, task) {
        if(err) {
            res.json({status: false, data: 'Invalid ID!'});
        }

        res.json({status: true, data: task});
    })
};

exports.updateATask = function(req, res) {
    Task.findOneAndUpdate({_id: req.params.taskId}, req.body, {new: true}, function(err, task) {
        if(err) {
            res.json({status: false, data: 'Unable to update!'});
        }

        res.json({status: true, data: task});
    })
};

exports.deleteATask = function(req, res) {
    Task.remove({_id: req.params.taskId}, function(err, task) {
        if(err) {
            res.json({status: false, data: 'Unable to delete!'});
        }

        res.json({status: true, data: 'Task removed successfully!'});
    })
};