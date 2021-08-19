const express=require("express");
var session = require('express-session')
const signinRouter=express.Router();
const Userdata=require('../model/Userdata');
signinRouter.use(session({secret:'keyboard cat',resave:true, saveUninitialized:true,cookie:{secure:false}}));


function router(nav){
    signinRouter.get('/',function(req,res){
        res.render("signin");
        nav
            
    });
    signinRouter.post('/add',function(req,res,next){
        
         let email=req.body.email;
           let  password=req.body.password;
            
        
    if(email=='admin@library.com'&& password=='12345'){
        req.session.role='admin';
        
         res.redirect('/');
    }else{
        Userdata.findOne({email:email,password:password},function(err,user){

            if(err){   
                res.redirect('/signupval');
               // res.send("Email and Password don't match");
                
            }
           else if(user){
            req.session.role='user';
            res.redirect('/');
            }

            else{
                res.send("Email and Password don't match");
              
            }
        })
}      
    });
         
        return signinRouter;
}
    
    module.exports=router;