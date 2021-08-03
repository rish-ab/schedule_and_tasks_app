const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const scheduleSchema = mongoose.Schema({
    scheduleName: {type: Array, required: true},
    userID: {type: Boolean, required: true},
    OrgID: {type: String, required: true},
    dependence: {type: Array},
    scheduleID: {type: String, required: true},
    startdate: {type: Date, required: true},
    reoccurrencePeriod: {type: Date, required: true},
    completionStatus: {type: Boolean}
});

scheduleSchema.plugin(uniqueValidator);

module.exports = mongoose.model('Tasks', scheduleSchema);