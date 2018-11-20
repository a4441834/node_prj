const mongoose = require('mongoose');

mongoose.connect('mongodb://mongo-user:mongo-password@172.30.200.115:27017/sampledb', { useNewUrlParser: true }, (err)=>{
    if(!err)
        console.log('MongoDB connection succeeded');
    else
        console.log('Error in DB connection' +JSON.stringify(err, underfined, 2));

});

module.exports = mongoose;
