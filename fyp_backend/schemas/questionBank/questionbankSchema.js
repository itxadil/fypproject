const mongoose=require('mongoose')
const QBSchema=new mongoose.Schema({
    courseCode:String,
    questions:Array,
})
const QBCollections=mongoose.model('questionBank',QBSchema)
module.exports=QBCollections