// Accessing mongoose
const mongoose=require('mongoose');
//Database connection
mongoose.connect('mongodb+srv://userone:userone@ictakprojectfiles.z0atk.mongodb.net/LIBRARYAPP?retryWrites=true&w=majority');
//Schema creation
const Schema=mongoose.Schema;
const BookSchema = new Schema({
    title:String,
    author:String,
    genre:String,
    language:String,
    info:String,
    image:String
});
//Model creation
var Bookdata=mongoose.model('Bookdata',BookSchema);
module.exports=Bookdata;