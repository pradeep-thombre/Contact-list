const express = require("express");
const router = express.Router();
const Contact = require('../models/contact');
const mongoose=require('mongodb')

router.get('/', function(req, res){


    Contact.find({}, function(err, contacts){
        if(err){
            console.log("error in fetching contacts from db");
            return;
        }
        return res.render('home',{
            title: "Contact List",
            contact_list: contacts
        });

    })
  
})
router.use('/contact',require('./contact'));




module.exports=router;