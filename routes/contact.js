const express = require("express");
const router = express.Router();
const Contact = require('../models/contact');

router.post('/create', function(req, res){
     
    Contact.create({
        name: req.body.name,
        phone: req.body.phone
    }, function(err, newContact){
        if(err){console.log('Error in creating a contact!')
            return;}
            console.log('******', newContact);
            return res.redirect('back');
    })
  

});



router.get('/delete', function(req, res){
    let id = req.params.id

    Contact.findOneAndDelete({id},function(error){
        console.log("error********",error);
    });
    return res.redirect('back');
});


module.exports=router;