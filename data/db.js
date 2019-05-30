const mongoose = require('mongoose');

 mongoose.connect('mongodb://mongouser:mongopassword@mongodb-34-centos7.msa-poc-dev.svc.cluster.local:27017/sampledb', { useNewUrlParser: true }, (err)=>{
// mongoose.connect('mongodb://user5Ng:k7EpSCPB@172.17.0.12:27017/sampledb', (err)=>{
    if(!err)
        console.log('MongoDB connection succeeded');
    else
        console.log('Error in DB connection' +JSON.stringify(err, underfined, 2));

});

module.exports = mongoose;
