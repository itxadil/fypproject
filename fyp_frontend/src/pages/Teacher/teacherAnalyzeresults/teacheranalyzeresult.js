import { Doughnut } from 'react-chartjs-2';
import React, { useState } from "react"
import Select from "react-select"
import {Bar} from 'react-chartjs-2';
import XYPlot from 'reactochart/XYPlot';
import XAxis from 'reactochart/XAxis';
import YAxis from 'reactochart/YAxis';
import LineChart from 'reactochart/LineChart';
import 'reactochart/styles.css';
import './teacheranalyze.css'
function TeacherAnalyzeResult(){
    const quizResults=[
        {
            value:'i192150',
            label:'Adil',
        },
        {
            value:'i190595',
            label:'Asim',
        },
        {
            value:'i191973',
            label:'Hassan',
        },
        {
            value:'i192175',
            label:'Asfand',
        },
        {
            value:'i190410',
            label:'Uzair',
        },
        {
            value:'i190549',
            label:'Mujtaba',
        },
        {
            value:'i191956',
            label:'Emaan',
        },
        {
            value:'i191957',
            label:'Faria',
        },
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
    const data = [
        {x: 'Quiz1', y: 20},
        {x: 'Quiz2', y: 30},
        {x: 'Quiz3', y: 35},
        {x: 'Quiz4', y: 30},
      ];
      const [value,setValue]=useState('class')

      const [value1,setValue1]=useState({
        value:0,
        label:'Student'
      })
      const [value2,setValue2]=useState({
        value:0,
        label:'Section'
      })
      const onchange1=(e)=>{
        setValue1(e)
      }
      const onchange2=(e)=>{
        setValue2(e)
      }
    console.log("Value",value)
    return(
      <>
     <div style={{display:'flex',flexDirection:'row'}}>
     <div style={{width:'500px', marginLeft:'70px' ,display:'flex', flexDirection:'row'}}>
         <div style={{ display:'flex',flexDirection:'column',paddingLeft:'20px', marginTop:'30px'}}> 
         {courses.map((item)=>(
                <div style={{display:'flex',flexDirection:'row',marginLeft:'20px'}}>
                <button onClick={(e)=>setValue(e.target.id)} style={{marginTop:'20px', backgroundColor:'#4FA095', cursor:'pointer' ,height:'50px', width:'130px', borderRadius:'20px'}} id={item.courseCode}>{item.courseCode}</button>
                </div>
            ))}
            </div>
            <div style={{marginTop:'55px',marginLeft:'20px', width:'200px',height:'100%'}}>
            <Select
                options={sections}
                value={value2}
                onChange={onchange2}
            />
            </div>
            <div style={{marginTop:'55px',marginLeft:'20px', width:'200px',height:'100%'}}>
            <Select
                options={quizResults}
                value={value1}
                onChange={onchange1}
            />
            </div>
            
         </div>
         <div>
         <h1 style={{marginLeft:'37%',color:'black',width:'320px',display:'block',margin:'auto',fontSize:'20px', marginTop:'40px'}}>Graph for Quiz Results of {value}</h1>
         <div style={{marginLeft:'100px', marginTop:'50px'}}>
            <XYPlot width={800} height={500} >
            <XAxis showGrid={false} title="Quizes" />
            <YAxis title="Obtained Marks"/>
            <LineChart
            data={data}
            x={d => d.x}
            y={d => d.y}
            />
        </XYPlot>
      </div>
      </div>
      </div>
      </>
    );
}

export default TeacherAnalyzeResult