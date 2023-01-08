import React, { useState } from "react";
import "./uploadmarks.css"
import {useHistory} from "react-router-dom"
import Select from "react-select"
function UploadMarks(){
    const quizResults=[
        {
            id:'quiz1',
            topic:'parts of speech',
            courseCode:'ENG1102',
        },
        {
            id:'quiz2',
            topic:'parts of speech',
            courseCode:'ENG1102',
        },
        {
            id:'quiz3',
            topic:'parts of speech',
            courseCode:'ENG1102',
        },
        {
            id:'quiz4',
            topic:'parts of speech',
            courseCode:'ENG1102',
        },
        {
            id:'quiz5',
            topic:'parts of speech',
            courseCode:'ENG1102',
        }
    ]
    let history=useHistory()
    const [value,setValue]=useState('')
    const onclick=(e)=>{
        setValue(e.target.id)
        history.push({pathname:'/teacheruploadmarks',state:{detail : e.target.id} })
    }
    console.log("VALUE",value)
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
    const sections=[
        {
            value:1,
            label:'Section A'
        },
        {
            value:2,
            label:'Section B'
        },
        {
            value:3,
            label:'Section C'
        },
    ]
    const [value1,setValue1]=useState('class')
    const [value2,setValue2]=useState({
        value:0,
        label:'Section'
    })
    const onchange2=(e)=>{
        setValue2(e)
    }
    return(
     <>
        <div style={{display:'flex',flexDirection:'row'}}>
        <div style={{width:'300px', marginLeft:'70px', display:'flex',flexDirection:'row'}}>
         <div style={{ display:'flex',flexDirection:'column',paddingLeft:'20px', marginTop:'50px'}}> 
         {courses.map((item)=>(
                <div style={{display:'flex',flexDirection:'row',marginLeft:'20px'}}>
                <button onClick={(e)=>setValue1(e.target.id)} style={{marginTop:'20px', backgroundColor:'#4FA095', cursor:'pointer' ,height:'50px', width:'130px', borderRadius:'20px'}} id={item.courseCode}>{item.courseCode}</button>
                </div>
            ))}
            </div>
             <div style={{marginTop:'75px',width:'200px',marginLeft:'20px'}}>
            <Select 
                options={sections}
                value={value2}
                onChange={onchange2}
            />
            </div>
         </div>
        
            <div className="main_div2">
            <h2 style={{width:'420px',display:'block',margin:'auto',marginTop:'40px'}}>Select a quiz to upload marks</h2>
      <table className="table_div2">
      
      <tr>
        <td style={{fontWeight:'bold',fontSize:'20px'}}>ID</td>
        <td id="t1" style={{fontWeight:'bold',fontSize:'20px'}}>Topic</td>
        <td style={{fontWeight:'bold',fontSize:'20px'}}>Course Code</td>
        </tr>
        {quizResults.map((item)=>(
            <tr>
            <td onClick={onclick} style={{textDecoration:'underline', color:'blue',cursor:'pointer'}} id={item.id}>{item?.id} </td>
            <td>{item?.topic}</td>
            <td>{item?.courseCode}</td>
            </tr>
      ))}
      </table>
      </div>
      </div>
     </>
    );
}
export default UploadMarks