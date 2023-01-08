const express=require('express')
const qBRouter=express.Router()
const QBCollections=require('../../schemas/questionBank/questionbankSchema')

qBRouter.post('/teacherQB',async(req,res)=>{
    const body=req.body
    const response=new QBCollections(body)
    response.save()
    console.log(response)
    res.send(response)
})

qBRouter.get('/teacherQB',async(req,res)=>{
    const response=await QBCollections.find()
    res.send(response)
})
qBRouter.get('/teacherQB/:courseCode',async(req,res)=>{
    const response=await QBCollections.findOne({courseCode:req.params.courseCode})
})
qBRouter.patch('/teacherQB',async(req,res)=>{
    const response=await QBCollections.findByIdAndUpdate({_id:req.params.id},req.body,{new:true})
    res.send(response)  
})
qBRouter.delete('/teacherQB',async(req,res)=>{
    const response=await QBCollections.findByIdAndDelete({_id:req.params.id})
    res.send(response)
})

module.exports=qBRouter
