const mongoose = require('mongoose');

mongoose.connect('mongodb://mongodb-user:mongodb-password@172.17.0.7:27017/sampledb', { useNewUrlParser: true }, (err)=>{
    if(!err)
        console.log('MongoDB connection succeeded');
    else
        console.log('Error in DB connection' +JSON.stringify(err, underfined, 2));

});

module.exports = mongoose;
