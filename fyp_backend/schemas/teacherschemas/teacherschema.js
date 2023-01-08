const { default: mongoose } = require("mongoose");

const teacherschema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    user_id:{
        type:String,
        required:true
    },
    school_id:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    contact:{
        type:Number,
        required:true
    },
    gender:{
        type:String,
        required:true
    },
    address:{
        type:String,
        required:true
    },
    cnic:{
        type:Number,
        required:true
    },
    password:{
            type:String,
            required:true
    },
})
const teachercollections=mongoose.model('teacher',teacherschema)
module.exports= teachercollections