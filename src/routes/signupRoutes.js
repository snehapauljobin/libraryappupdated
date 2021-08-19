const Userdata=require('../model/Userdata');
const express=require("express");
var session = require('express-session');
// var flash= require('connect-flash');


const signupRouter=express.Router();
signupRouter.use(session({secret:'keyboard cat',resave:true, saveUninitialized:true,cookie:{message:60000}}));
function router(nav){
    signupRouter.get('/',function(req,res){
        res.render("signupval",{
          nav,
          
    });

});
    signupRouter.post('/add',function(req,res,next){
    

    var item={
        name:req.body.name,
        phonenumber:req.body.phonenumber,
        email:req.body.email,
        password:req.body.password
    }

   let  email=req.body.email;
   let  password=req.body.password;


    Userdata.findOne({email:email,password:password},function(err,user){
        if(user){
            res.send('Already exist');
        }
            
       else {
        var people=Userdata(item);
        people.save()
        res.redirect('/');
   }
            
       });

    
        
       
    
    

});
        return signupRouter;
    
}
    
    module.exports=router;