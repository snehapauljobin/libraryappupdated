// Accessing mongoose
const mongoose=require('mongoose');
//Database connection
mongoose.connect('mongodb+srv://userone:userone@ictakprojectfiles.z0atk.mongodb.net/LIBRARYAPP?retryWrites=true&w=majority');
//Schema creation
const Schema=mongoose.Schema;
const AuthorSchema = new Schema({
    author:String,
    genre:String,
    books:String,
    language:String,
    info:String,
    image:String
});
//Model creation
var Authordata=mongoose.model('Authordata',AuthorSchema);
module.exports=Authordata;