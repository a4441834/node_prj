const mongoose = require('mongoose');

 // mongoose.connect('mongodb://mongouser:mongopassword@172.30.32.246:27017/sampledb', { useNewUrlParser: true }, (err)=>{
 mongoose.connect('mongodb://user5Ng:k7EpSCPB@172.17.0.12:27017/sampledb', (err)=>{
    if(!err)
        console.log('MongoDB connection succeeded');
    else
        console.log('Error in DB connection' +JSON.stringify(err, underfined, 2));

});

module.exports = mongoose;
