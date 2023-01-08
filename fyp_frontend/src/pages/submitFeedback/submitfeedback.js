import React ,{useState} from "react";
import Select from 'react-select'
import axios from "axios";
import { useEffect } from "react";
function SubmitFeedback(){
    const [option,setoption]=useState('option1')
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
    const courses=[
      {
          label:'ENGLISH composition',
          value:'ENG1102',
      },
      {
          label:'Intro to Info. and Comm. Technologie',
          value:'CL117',
      },
      {
          label:'Programming Fundamentals',
          value:'CS118',
      },
      {
          label:'Applied Physics',
          value:'EE117',
      },
      {
          label:'Calculus and Analytical Geometry',
          value:'MT119',
      },
      {
          label:'Islamic and Religious Studies',
          value:'SS111',
      },
      {
          label:'Digital Logic Design',
          value:'EE227',
      },
  ]
  const [value,setValue]=useState({
    label:'Select a Course',
    value:0
  })
  const handlechangforstu=(e)=>{
    setValue(e)
  }

  const options3 = []
    studentCourses.map((item)=>{
      options3.push({
        label:item.courseName,
        value:item.courseCode
      })
    })
    const options = [
        { value: 'i192150', label: 'Quiz1' },
        { value: 'i190595', label: 'Quiz2' },
        { value: 'i191973', label: 'Quiz3' }
      ]
      const options1 = [
        { value: 'eng101', label: 'English' },
        { value: 'CS102', label: 'Programming' },
        { value: 'MM101', label: 'Management' }
      ]
      const options2 = [
        { value: 'teacher101', label: 'Asim Umar' },
        { value: 'teacher102', label: 'Hassan Ansaari' },
        { value: 'teacher103', label: 'Adil Ali' }
      ]
      const [sendReq,setSendReq]=useState('')
      const [selectedValue,setSelectedValue]=useState({
        label:'Select a Quiz',
        value:0
      })
      const handleChange=(e)=>{
        setSelectedValue(e)
      }

      const [selectedValue1,setSelectedValue1]=useState({
        label:'Select a Course',
        value:0
      })
      const handleChange1=(e)=>{
        setSelectedValue(e)
      }

      const [selectedValue2,setSelectedValue2]=useState({
        label:'Select a Teacher',
        value:0
      })
      const handleChange2=(e)=>{
        setSelectedValue(e)
      }
    console.log("FFFF",option)
    return(
        <>
            <div style={{marginTop:'20px'}}>
              <h1 style={{margin:'auto',display:'block',width:'450px'}}>Submit feedback for quiz</h1> 
             <div>
             <div style={{width:'800px',margin:'auto',display:'block'}}>
             <div style={{marginTop:'30px'}}>
            <Select className="mt-4 col-md-6 col-offset-4"
              onChange={handlechangforstu}
              value={value}
              options={options3}
            />
            </div>
           <div style={{marginTop:'30px'}}>
          <Select className="mt-4 col-md-6 col-offset-4"
                onChange={handleChange}
                value={selectedValue}
                options={options}
             />
            </div>
            <input value={sendReq} onChange={(e)=>setSendReq(e.target.value)} className='inp' style={{height:'200px', width:'500px', marginTop:'30px',border:'1px solid blue', borderRadius:'10px'}} type="text" placeholder="Type your feedback"/>
            </div>
            <button type="submit" style={{marginTop:'30px',height:'30px',backgroundColor:'lightblue',marginLeft:'370px',borderRadius:'15px',width:'150px'}}>Submit feedback</button>
             </div>
            </div>
        </>
    );
}
export default SubmitFeedback