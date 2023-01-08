const mongoose=require('mongoose')

const quizshema=new mongoose.Schema({
    id:{
        type:String
    },
    courseCode:{
        type:String
    },
    questions:{
        type:Array
    },
    dueDate:{
        type:String
    },
    totalMarks:{
        type:Number
    },
    totalQuestions:{
        type:Number
    },
    status:{
        type:String
    }
})

const quizCollections=mongoose.model('quiz',quizshema)

module.exports=quizCollections
