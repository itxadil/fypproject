const express=require('express')
const quizCollections = require('../quizSchemas/quizSchema')
const quizRouter=express.Router()

quizRouter.get('/quizes',async(req,res)=>{
    const response=await quizCollections.find()
    res.send(response)
})
quizRouter.get('/quizes/:id',async(req,res)=>{
    const response=await quizCollections.findById({_id:req.params.id})
    res.send(response)
})
quizRouter.post('/quizes',async(req,res)=>{
     const response=new quizCollections(req.body)
     response.save()
     res.send(response)
})
quizRouter.patch('/quizes',async(req,res)=>{
    const response=await quizCollections.findByIdAndUpdate({_id:req.params.id},req.body,{new:true})
    res.send(response)  
})

quizRouter.delete('/quizes',async(req,res)=>{
    const response=await quizCollections.findByIdAndDelete({_id:req.params.id},{new:true})
    res.send('Deleted!')  
})

module.exports=quizRouter