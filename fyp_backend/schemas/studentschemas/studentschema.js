const mongoose=require('mongoose')
mongoose.connect('mongodb://localhost:27017/FYPDATABASE');

const studentSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    rollnumber:{
        type:String,
        required:true
    },
    address:{
        type:String,
        required:true
    },
    grade:{
        type:Number,
        required:true
    },
    gender:{
        type:String,
        required:true
    },
    contact:{
        type:Number,
        required:true
    },
    guadriancontact:{
        type:Number,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
})
const studentscollections=mongoose.model('student',studentSchema)
module.exports=studentscollections