//packages

const express=require('express')
const studentRouter=require('./routes/studentroutes/studentroutes')
const teacherRouter=require('./routes/teacherroutes/teacherrouter')
const courseRouter=require('./coursesRoutes/courseRoutes')
const qBRouter=require('./routes/QBroutes/QBroutes')
const bodyparser=require('body-parser')
const app=express()
const port=process.env.PORT || '3500' 
const cors=require('cors')
const { json } = require('body-parser')
const quizRouter=require('./quizRoutes/quizroute')

//middlewares



app.use(cors())
app.use(bodyparser.urlencoded({extended:true}))
app.use(express.json())

// apis

app.use(studentRouter)
app.use(teacherRouter)
app.use(courseRouter)
app.use(quizRouter)
app.use(qBRouter)
//server

app.listen(port,(req,res)=>{
    console.log(`Server running at ${port}`)
})