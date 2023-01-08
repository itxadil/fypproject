const express=require('express')
const courseRouter=express.Router()
const coursesCollections=require('../coursesSchema/courseSchema')


courseRouter.get('/courses',async(req,res)=>{
     const response=await coursesCollections.find()
     res.send(response)
})

courseRouter.get('/courses/:id',async(req,res)=>{
    const response=await coursesCollections.findById({_id:req.params.id})
    res.send(response)
})


courseRouter.post('/courses',async(req,res)=>{
    const response=new coursesCollections(req.body)
    response.save()
    res.send(response)
})

courseRouter.patch('/courses/:id',async(req,res)=>{
    const response=await coursesCollections.findByIdAndUpdate({_id:req.params.id},req.body,{new:true})
    response.save()
    res.send(response)
})

courseRouter.delete('/courses/:id',async(req,res)=>{
    await coursesCollections.findByIdAndDelete({_id:req.params.id},{new:true})
    res.send("Deleted!")
})

module.exports=courseRouter