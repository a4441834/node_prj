const mongoose = require('mongoose');

var Employee = mongoose.model('Employee', {
    firstname: {type:String},
    lastname: {type: String},
    address: [
               { 
                addresstype: { type: String},
                street: {type: String},
                city: {type: String},
                state: {type: String},
                zip: {type: Number}
               },
			   {
                addresstype: { type: String},
                street: {type: String},
                city: {type: String},
                state: {type: String},
                zip: {type: Number}
			   }
            ],
    contact: [{ 
		phone: [{   
                cell: {type: Number},
                home: {type: Number},
                office: {type: Number} 
                }],
            
                 email: [{
                 personal: {type: String} ,
                 office: {type: String} 
                }]
            }],
               
    customertype: {type: String},
    customerstatus: {type: String}

});

module.exports = { Employee } ;

