const express=require("express");
const Authordata = require("../model/Authordata");
const authorRouter=express.Router();
const multer=require("multer");
const path=require("path");
const fs=require('fs');
const upload = multer({dest: 'uploads/'});
 

 function router(nav){
  
    
    authorRouter.get('/',function(req,res){
        Authordata.find()
        .then(function(authors){
            res.render("authors",{
                nav,
                title:'Library',
                authors,
                role:req.session.role,
        
            });
        });


        })
     
        
        // Accessing indivdual page


    authorRouter.get('/:id',function(req,res){
        const id=req.params.id;
        Authordata.findOne({_id:id})
        .then(function(author){
            res.render("author",{
                nav,
                title:'Library',
                author,
                role:req.session.role
               
                
            });
        });


        })
            // Deleting author

        authorRouter.get('/:id/deleteauthor',function(req,res){
            const id=req.params.id;
            Authordata.deleteOne({_id:id},(err,result)=>{
                if(err){
                    console.log('status:false');
                }
                else{
                    // res.send('status:true');
                    // console.log('status:true');
                    res.redirect('/authors');  
                }
            });
           
        });
            

         
  // Redirecting to update author  page      
            
  authorRouter.get('/:id/updateauthor',function(req,res){
    const id=req.params.id;
    previousdata= {};
    Authordata.findById({_id:id})
    .then(function(author){
        res.render('adminauthorupdate',{
            nav,
            author,
            previousdata:author,
            role:req.session.role
        });
    
    });

});

// Multer for images



var storage=multer.diskStorage({
destination:function(req,file,cb){
cb(null,'./public/uploads/')
},
filename:function(req,file,cb){
cb(null,file.fieldname +'-'+Date.now()+path.extname(file.originalname));
}

});

var upload=multer(
{
storage:storage})

// Updating details on update book page


authorRouter.post('/:id/updateauthor/updateauthordetails',upload.single('image'),function(req,res){
    var id = req.body.id;
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

  let updateauthor={$set:item};
    Authordata.updateOne({_id: id }, updateauthor)
    .then(function(){
      res.redirect('/authors');  
    })


});






        
    return authorRouter;
}

module.exports=router;
