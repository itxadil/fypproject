const studentscollections=require('../../schemas/studentschemas/studentschema')
const coursesCollections=require('../../coursesSchema/courseSchema')
const express=require('express')
const studentRouter=express.Router()

studentRouter.post('/students',async(req,res)=>{
    const body=req.body
    const mem=new studentscollections(body)
    mem.save()
    res.send(mem)
    console.log(mem)
})
studentRouter.get('/students',async(req,res)=>{
    const response=await studentscollections.find()
    res.send(response)
})

studentRouter.get('/studentCourses',async(req,res)=>{
    const response=await studentscollections.find()
    const respose=await studentscollections.aggregate([
        {
            $lookup:{
                from:"courses",
                localField:"grade",
                foreignField:"grade",
                as: 'courseslist'
            }
        }
    ])
    res.send(respose)
})



module.exports=studentRouter