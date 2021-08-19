const express=require("express");
const multer=require("multer");
const path=require("path");
const fs=require('fs');
var session = require('express-session');
var flash= require('connect-flash');
const app=new express();
app.use(function(req, res, next) {
    if (!req.user)
    res.header('Cache-Control', 'private, no-cache, no-store, must-revalidate');
    next();
    });
app.use(session({secret:'keyboard cat',resave:true, saveUninitialized:true}));
const port=process.env.PORT||4371;

const nav=
        [
            {link:'./', name:'Home'},
            {link:'/books',name:'Books'},
            {link:'/authors',name:'Authors'},
            {link:'/adminbook',name:'Add Book'},
            {link:'/adminauthor',name:'Add Author'},
            {link:'/signin',name:'Sign In'},
            {link:'/signupval',name:'Sign Up'},
            {link:'/logout',name:'Log Out'},
            // {link:'/author',name:'Author'}
        ]



app.use(express.urlencoded({extended:true}));
app.use(express.static('./public'));
app.use(express.static('/uploads'));
app.use(flash());

app.set('view engine','ejs');
app.set('views', './src/views');




app.get('/',function(req,res){
    res.render("index",{
        email:req.body.email,
        password:req.body.password,
       role:req.session.role,
        nav
        
    });
});

const signinRouter=require('./src/routes/signinRoutes.js')(nav);
app.use('/signin',signinRouter);



app.get('/logout', function (req, res) {
    req.session.destroy();
    // req.session.cookie.expires = new Date().getTime();
    res.redirect('/signin');
});



const adminbooksRouter=require('./src/routes/adminbookRoutes.js')(nav);
app.use('/adminbook',adminbooksRouter);

const adminauthorRouter=require('./src/routes/adminauthorRoutes.js')(nav);
app.use('/adminauthor',adminauthorRouter);


const signupRouter=require('./src/routes/signupRoutes.js')(nav);
app.use('/signupval',signupRouter);

const booksRouter=require('./src/routes/bookRoutes.js')(nav);
app.use('/books',booksRouter);

const authorRouter=require('./src/routes/authorRoutes.js')(nav);
app.use('/authors',authorRouter);


// const updateauthorRouter=require('./src/routes/updateauthorRoutes.js')(nav);
// app.use('/author',updateauthorRouter);



   
  
            

app.listen(port,()=>{
    console.log("Server ready at"+ port)});

