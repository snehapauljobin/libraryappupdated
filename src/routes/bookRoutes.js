const express=require("express");
const booksRouter=express.Router();
const Bookdata=require('../model/Bookdata');
const multer=require("multer");
const path=require("path");
const fs=require('fs');
const upload = multer({dest: 'uploads/'});
 function router(nav){
  
    


    booksRouter.get('/',function(req,res){
Bookdata.find()
.then(function(books){
    res.render("books",{
        nav,
        title:'Library',
        books,
        role:req.session.role,
        email:req.body.email,
        password:req.body.password,
        
    });
});

})


// Accessing individual page
       
    booksRouter.get('/:id',function(req,res){
        const id=req.params.id;
        Bookdata.findOne({_id:id})
        .then(function(book){
            res.render("book",{
                nav,
                title:'Library',
                book,
                role:req.session.role
               
            });
        });
        })
        
// deleting book


        booksRouter.get('/:id/deletebook',function(req,res){
            const id=req.params.id;
            Bookdata.deleteOne({_id:id})
            .then(function(){
                res.redirect('/books');  
            });

        });
              

            
  // Redirecting to update book   page      
            
            booksRouter.get('/:id/updatebook',function(req,res){
                const id=req.params.id;
                previousdata= {};
                Bookdata.findById({_id:id})
                .then(function(book){
                    res.render('adminbookupdate',{
                        nav,
                        book,
                        previousdata:book,
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


            booksRouter.post('/:id/updatebook/updatebookdetails',upload.single('image'),function(req,res){
                var id = req.body.id;
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

              let updatebook={$set:item};
                Bookdata.updateOne({_id: id }, updatebook)
                .then(function(){
                  res.redirect('/books');  
                })


            });

            return booksRouter;
        
        }
        module.exports=router;

















         

           

