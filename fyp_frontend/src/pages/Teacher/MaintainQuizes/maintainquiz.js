import React, { useState } from "react";
import Select from "react-select"
import "./maintainquiz.css"
function MaintainQuiz(){
    const quizResults=[
        {
            id:'quiz1',
            topic:'parts of speech',
            courseCode:'ENG1102',
        },
        {
            id:'quiz1',
            topic:'parts of speech',
            courseCode:'ENG1102',
        },
        {
            id:'quiz1',
            topic:'parts of speech',
            courseCode:'ENG1102',
        },
        {
            id:'quiz1',
            topic:'parts of speech',
            courseCode:'ENG1102',
        },
        {
            id:'quiz1',
            topic:'parts of speech',
            courseCode:'ENG1102',
        }
    ]
    const options1=[
        {value:1, label:'Section A'},
        {value:2, label:'Section B'},
        {value:3, label:'Section C'},
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
    const [value1,setValue1]=useState({
        value:0,
        label:'Section'
    })
    // const [value,setValue]=useState({
    //     value:0,label:'select an option'
    // })
    const onchange1=(e)=>{
        setValue(e)
    }
    return(
        <>
         <div style={{display:'flex',flexDirection:'row'}}>
         <div style={{width:'300px', marginLeft:'70px' ,display:'flex',flexDirection:'row'}}>
         <div style={{ display:'flex',flexDirection:'column',paddingLeft:'20px', marginTop:'100px'}}> 
         {courses.map((item)=>(
                <div style={{display:'flex',flexDirection:'row',marginLeft:'20px'}}>
                <button onClick={(e)=>setValue(e.target.id)} style={{marginTop:'20px', backgroundColor:'#4FA095', cursor:'pointer' ,height:'50px', width:'130px', borderRadius:'20px'}} id={item.courseCode}>{item.courseCode}</button>
                </div>
            ))}
            </div>
            <div style={{marginTop:'125px',marginLeft:'20px'}}>
            <Select
                options={options1}
                value={value1}
                onChange={onchange1}
            />
            </div>
         </div>

            <div className="main_div3">
            <h2 style={{width:'680px',display:'block',margin:'auto',marginTop:'40px'}}>Select an option to read, delete or update a quiz</h2>
      <table className="table_div3">
      
      <tr>
        <td style={{fontWeight:'bold',fontSize:'20px'}}>Id</td>
        <td id="t1" style={{fontWeight:'bold',fontSize:'20px'}}>Topic</td>
        <td style={{fontWeight:'bold',fontSize:'20px'}}>Course Code</td>
        <td style={{fontWeight:'bold',fontSize:'20px'}}>Update</td>
        <td style={{fontWeight:'bold',fontSize:'20px'}}>Delete</td>
        <td style={{fontWeight:'bold',fontSize:'20px'}}>Update</td>
        </tr>
        {quizResults.map((item)=>(
            <tr>
            <td style={{textDecoration:'underline', color:'blue',cursor:'pointer'}}>{item?.id}</td>
            <td>{item?.topic}</td>
            <td>{item?.courseCode}</td>
            <td><button style={{backgroundColor:'lightblue'}}>Update</button></td>
            <td><button style={{backgroundColor:'lightblue'}}>Delete</button></td>
            <td><button style={{backgroundColor:'lightblue'}}>Read</button></td>
            </tr>
      ))}
      </table>
      </div>
      </div>
        </>
    )
}
export default MaintainQuiz