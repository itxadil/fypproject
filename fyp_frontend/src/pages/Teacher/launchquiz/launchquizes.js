import React from "react";
import './launchquiz.css'
function LaunchQuiz(){
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
    const options=[
        {value:1, label:'Update a quiz'},
        {value:2, label:'Delete a quiz'},
        {value:3, label:'Read/retrieve a quiz'},
    ]
    return(
      <>
        <h2 style={{width:'51%',display:'block',margin:'auto',marginTop:'40px'}}>Launch Quiz right now or schedule it for specific time</h2>
            <div className="main_div1">
      <table className="table_div">
      
      <tr>
        <td>id</td>
        <td id="t1">Topic</td>
        <td>Course Code</td>
        <td>Launch now</td>
        <td>Schedule Quiz</td>
        </tr>
        {quizResults.map((item)=>(
            <tr>
            <td style={{textDecoration:'underline', color:'blue',cursor:'pointer'}}>{item?.id}</td>
            <td>{item?.topic}</td>
            <td>{item?.courseCode}</td>
            <td><button style={{backgroundColor:'lightblue'}}>Launch Now</button></td>
            <td><button style={{backgroundColor:'lightblue'}}>Schedule Quiz</button></td>
            </tr>
      ))}
      </table>
      </div>
      </>
    );
}
export default LaunchQuiz