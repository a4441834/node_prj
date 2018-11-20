const mongoose = require('mongoose');

var Employee = mongoose.model('Employee', {
    firstname: {type:String},
    lastname: {type: String},
    address: {type: String},
    phone: {type: Number},
    email: {type: String}
});

module.exports = { Employee } ;

