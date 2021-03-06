const express = require('express');
var router = express.Router();
var ObjectId = require('mongoose').Types.ObjectId;

var { Employee } = require('../models/employee');

router.get('/', (req, res)=> {
    Employee.find((err, doc)=> {
        if(!err) {res.send(doc);}
        else {console.log('Error in retreiving Employees:' + JSON.stringify(err, undefined, 2)); }
    });
    
});

router.get('/:id', (req, res) => {
    if(!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id : ${req.params.id}`);

        Employee.findById(req.params.id, (err, doc) => {
            if(!err) {res.send(doc);}
            else {console.log('Error in retreiving Employees:' + JSON.stringify(err, undefined, 2)); }  
        });
}); 


router.put('/:id', (req, res) => {
    if(!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id : ${req.params.id}`);
    
    var emp = {
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        address: req.body.address,
        phone: req.body.phone,
        email: req.body.email,
        officelocation: req.body.officelocation,
        customertype: req.body.customertype,
        customerstatus: req.body.customerstatus,
     }; 
     Employee.findByIdAndUpdate(req.params.id, { $set: emp }, {new: true}, (err, doc) => {
         if(!err) {res.send(doc); }
         else {console.log('Error in retreiving Employees:' + JSON.stringify(err, undefined, 2)); }  
     });
});


router.delete('/:id', (req, res) => {
    if(!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id : ${req.params.id}`);
    
     Employee.findByIdAndRemove(req.params.id, (err, doc) => {
         if(!err) {res.send(doc); }
         else {console.log('Error in retreiving Employees:' + JSON.stringify(err, undefined, 2)); }  
     });
});

router.post('/', (req, res)=> {
    var emp = new Employee({
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        address: req.body.address,
        phone: req.body.phone,
        email: req.body.email,
        officelocation: req.body.officelocation,
        customertype: req.body.customertype,
        customerstatus: req.body.customerstatus,
    });  
    emp.save((err, doc)=> {
        if(!err) {res.send(doc); }
        else {console.log('Error in save Employees:' + JSON.stringify(err, undefined, 2)); }
    });
});

module.exports = router;
