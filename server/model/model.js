const mongoose = require('mongoose');

var schema = new mongoose.Schema({
    name:{
        type:String,
        required: true
    },
    email:{
        type: String,
        required:false,
        unique: true
    },
    contact:{
        type:String,
        require:false,
        unique:true
    },
    dob:{
        type:Date,
        required:false
    },
    dod:{
        type:Date,
        required:false
    },
    address:{
        type:String,
        required: false,
    },
    
    gender:String,
});

const Userdb = mongoose.model('userdb',schema);

module.exports = Userdb;