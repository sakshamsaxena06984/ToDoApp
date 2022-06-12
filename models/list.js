// *********************here ,creating mongoose variable for MONGOOSE************
const mongoose=require('mongoose');
// **********************Headers, creating the sechema for the database*****************
const createSchema = new mongoose.Schema({
    description:{
        type:String,
        required:true
    },
    date:{
        type:String,
        required:true
    },
    cotegoery:{
        type:String,
        required:true
    }
});
const List = mongoose.model('list',createSchema);
module.exports = List;