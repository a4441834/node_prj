const mongoose = require('mongoose');

// mongoose.connect('mongodb://mongouser:mongopassword@172.17.0.9:27017/sampledb', { useNewUrlParser: true }, (err)=>{
mongoose.connect('mongodb://$MONGODB_USER:$MONGODB_PASSWORD@172.30.174.37:27017/sampledb', { useNewUrlParser: true }, (err)=>{
    if(!err)
        console.log('MongoDB connection succeeded');
    else
        console.log('Error in DB connection' +JSON.stringify(err, underfined, 2));

});

module.exports = mongoose;
