var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var TaskSchema = new Schema({
    name: {
        type: String,
        required: 'Please enter name of the task'
    },
    status: {
        type: [{
            type: String,
            enum: ['pending', 'ongoing', 'completed']
        }],
        default: ['pending']
    },
    created_at: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Tasks', TaskSchema);