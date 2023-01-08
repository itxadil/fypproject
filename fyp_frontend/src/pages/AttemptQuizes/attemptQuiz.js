import React from "react";
import './attemptquiz.css'
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
function AttemptQuiz(){
    const [studentCourses,setStudentCourses]=useState([])
    const [Cid,setId]=useState('')
    useEffect(()=>{
      const getCourses=async()=>{
        let ind=0
         const response=await axios.get('http://localhost:3500/studentCourses')
         response.data.map((item,index)=>{
            if(item.rollnumber===window.localStorage.getItem('student')){
                 ind=index
                 console.log(item)
            }
         })
         setStudentCourses(response.data[ind].courseslist)
      }
      getCourses()
    },[])
    const [activeButton, setActiveButton] = useState(-1)
    const quizResults=[
        {
            id:'quiz1',
            topic:'parts of speech',
            courseCode:'ENG1102',
            totalQuestions:'10',
            TotalTime:'30 minutes'
        },
        {
            id:'quiz1',
            topic:'parts of speech',
            courseCode:'ENG1102',
            totalQuestions:'10',
            TotalTime:'30 minutes'
        },
        {
            id:'quiz1',
            topic:'parts of speech',
            courseCode:'ENG1102',
            totalQuestions:'10',
            TotalTime:'30 minutes'
        },
        {
            id:'quiz1',
            topic:'parts of speech',
            courseCode:'ENG1102',
            totalQuestions:'10',
            TotalTime:'30 minutes'
        },
        {
            id:'quiz1',
            topic:'parts of speech',
            courseCode:'ENG1102',
            totalQuestions:'10',
            TotalTime:'30 minutes'
        }
    ]
    const courses=[
        {
            name:'ENGLISH composition',
            courseCode:'ENG1102',
        },
        {
            name:'Intro to Info. and Comm. Technologie',
            courseCode:'CL117',
        },
        {
            name:'Programming Fundamentals',
            courseCode:'CS118',
        },
        {
            name:'Applied Physics',
            courseCode:'EE117',
        },
        {
            name:'Calculus and Analytical Geometry',
            courseCode:'MT119',
        },
        {
            name:'Islamic and Religious Studies',
            courseCode:'SS111',
        },
        {
            name:'Digital Logic Design',
            courseCode:'EE227',
        },
    ]
    const [value,setValue]=useState('class')
    const handlechangforclass=()=>{
      setValue('class')
    }
    const handlechangforstu=(e)=>{
      setValue(e.target.id)
    }
    return(
     <>
      <div className="main_div">
      <div style={{width:'300px', marginLeft:'-70px'}}>
         <div style={{ display:'flex',flexDirection:'column',paddingLeft:'20px', marginTop:'100px'}}> 
         {studentCourses.map((item,index)=>(
         <button onClick={ (e) => {
            setActiveButton(index)
            setId(e.target.id)
            } } id={item.courseCode} style={{marginTop:'20px', backgroundColor: activeButton===index ? 'blue' : '#4FA095', cursor:'pointer' ,height:'50px', width:'130px', borderRadius:'20px',color: activeButton===index && 'white', cursor:'pointer'}}>{item.courseCode}</button>
            ))}
            </div>
         </div>
         <div style={{marginLeft:'50px'}}>
         <h1 style={{color:'black',width:'300px',display:'block',margin:'auto',fontSize:'20px', marginTop:'20px',fontWeight:'bold', fontSize:'30px'}}>UnAttempted Quizes</h1>
      <table className="table_div">
      
      <tr>
        <td style={{fontWeight:'bold',fontSize:'20px'}}>ID</td>
        <td id="t1" style={{fontWeight:'bold',fontSize:'20px'}}>Topic</td>
        <td style={{fontWeight:'bold',fontSize:'20px'}}>Course Code</td>
        <td style={{fontWeight:'bold',fontSize:'20px'}}>Total Questions</td>
        <td style={{fontWeight:'bold',fontSize:'20px'}}>Total Time</td>
        </tr>
        {quizResults.map((item)=>(
            <tr>
            <td id="quizID" style={{textDecoration:'underline', color:'blue',cursor:'pointer'}}>{item?.id}</td>
            <td>{item?.topic}</td>
            <td>{item?.courseCode}</td>
            <td>{item?.totalQuestions}</td>
            <td>{item?.TotalTime}</td>
            </tr>
      ))}
      </table>
      </div>
      </div>
     </>
    );
}

export default AttemptQuiz