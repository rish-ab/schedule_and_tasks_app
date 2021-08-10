const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const tasksSchema = mongoose.Schema({
    taskID: {type: String, required: true},
    taskName: {type: Array, required: true},
    userID: {type: Boolean, required: true},
    OrgID: {type: String, required: true},
    dependency: {type: Array},
    scheduleID: {type: String},
    startdate: {type: Date},
    targetDate: {type: Date},
    endDate: {type: Date},
    taskParts: {type: Number, required: true},
    completedParts: {type: Number},
    completionStatus: {type: Boolean}
});

tasksSchema.plugin(uniqueValidator);

module.exports = mongoose.model('Tasks', tasksSchema);