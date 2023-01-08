const mongoose=require('mongoose')

const courseSchema=new mongoose.Schema({
    courseName:{
        type:String
    },
    courseCode:{
        type:String
    },
    grade:{
        type:Number
    }
})


const coursesCollections=mongoose.model('course',courseSchema)
module.exports=coursesCollections
