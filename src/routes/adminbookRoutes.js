const express=require("express");
const multer=require("multer");
const path=require("path");
const fs=require('fs');
const upload = multer({dest: 'uploads/'});

const adminbookRouter=express.Router();
const Bookdata=require('../model/Bookdata');
 function router(nav){ 
adminbookRouter.get('/',function(req,res){
    res.render("adminbook",{
        nav,
        title:'Library',
        role:req.session.role,
        
       
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
            adminbookRouter.post('/add',upload.single('image'),function(req,res,next){
                var imageFile=req.file.filename;
                console.log(imageFile);
               
               var item={
    
                title:req.body.title,
                author:req.body.author,
                genre:req.body.genre,
                language:req.body.language,
                info:req.body.info,
                image:imageFile
               }
                var book=Bookdata(item);
                book.save();
                res.redirect('/books');   
                
        
            })

return adminbookRouter;
}

module.exports=router;




