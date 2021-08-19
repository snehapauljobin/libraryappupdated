
const express=require("express");
const multer=require("multer");
const path=require("path");
const fs=require('fs');
const upload = multer({dest: 'uploads/'});

const adminauthorRouter=express.Router();
const Authordata=require('../model/Authordata');
 function router(nav){ 
adminauthorRouter.get('/',function(req,res){
    res.render("adminauthor",{
        nav,
        title:'Library',
        role:req.session.role
       
    });
});
var storage=multer.diskStorage({
    destination:function(req,file,cb){
        cb(null,'./public/uploads/')
    },
    filename:function(req,file,cb){
        cb(null,file.fieldname +'-'+Date.now()+path.extname(file.originalname));
    }
    
    })
    var upload=multer(
        {
    storage:storage
        })
    
       
       
            adminauthorRouter.post('/add',upload.single('image'),function(req,res,next){
                var imageFile=req.file.filename;
                console.log(imageFile);
               
               var item={
    
                author:req.body.author,
                genre:req.body.genre,
                books:req.body.books,
                language:req.body.language,
                info:req.body.info,
                image:imageFile
               }
                var author=Authordata(item);
                author.save();
                res.redirect('/authors');   
                
        
            })

return adminauthorRouter;
}

module.exports=router;




