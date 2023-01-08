const express=require('express')
const teachercollections=require('../../schemas/teacherschemas/teacherschema')
const coursesCollections=require('../../coursesSchema/courseSchema')
const teacherRouter=express.Router()
teacherRouter.post('/teacher',async(req,res)=>{
    const body=req.body
    const response=new teachercollections(body)
    console.log("response",response)
    response.save()
    res.send(response)
})

teacherRouter.get('/teacher',async(req,res)=>{
    const response=await teachercollections.find()
    console.log("response",response)
    res.send(response)
})

teacherRouter.get('/teacherCourses',async(req,res)=>{
    const resCourse=await coursesCollections.find()
    const respose=await teachercollections.aggregate([
        {$lookup:{
            from:"courses",
            localField: 'courses',
            foreignField: 'courseCode',
            as: 'coursesList'
        }}
    ])
    console.log(respose)
    res.send(respose)
})

module.exports=teacherRouter