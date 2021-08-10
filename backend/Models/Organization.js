const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const organizationSchema = mongoose.Schema({
    orgName: {type: String, required: true},
    employees: {type: Array, required: true},
    privateS: {type: Boolean, required: true},
    OrgID: {type: String, required: true},
    adminID: {type: Array, required: true}
});

organizationSchema.plugin(uniqueValidator);

module.exports = mongoose.model('Organization', organizationSchema);