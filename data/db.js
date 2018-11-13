const mongoose = require('mongoose');

mongoose.connect('mongodb://user1GO:yAJgXkPRqhCmlGFA@172.30.151.216:27017/sampledb', { useNewUrlParser: true }, (err)=>{
    if(!err)
        console.log('MongoDB connection succeeded');
    else
        console.log('Error in DB connection' +JSON.stringify(err, underfined, 2));

});

module.exports = mongoose;
