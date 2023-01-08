import React ,{useState} from "react";
import Select from 'react-select'
import './teachersubfeed.css'
function TeacherSubmitFeedback(){
    const [option,setoption]=useState('option1')
    const options = [
        { value: 'i192150', label: 'Adil' },
        { value: 'i190595', label: 'Asim' },
        { value: 'i191973', label: 'Hassan' }
      ]
      const options1 = [
        { value: 'eng101', label: 'English' },
        { value: 'CS102', label: 'Programming' },
        { value: 'MM101', label: 'Management' }
      ]
      const options2 = [
        { value: 'sectionA', label: 'Section A' },
        { value: 'sectionB', label: 'Section B' },
        { value: 'sectionC', label: 'Section C' }
      ]
      const [sendReq,setSendReq]=useState('')
      const [selectedValue,setSelectedValue]=useState({
        label:'Select student',
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
        setSelectedValue1(e)
      }
      const [selectedValue2,setSelectedValue2]=useState({
        label:'Select section',
        value:0
      })
      const handleChange2=(e)=>{
        setSelectedValue2(e)
      }

    console.log("FFFF",option)
    return(
        <>
        <h2 style={{marginTop:'40px', width:'30%', margin:'auto', display:'block'}}>Submit feedback for a course </h2>
            <div style={{marginTop:'20px'}}>
             <div style={{width:'800px',margin:'auto',display:'block'}}>
           <div style={{marginTop:'30px'}}>
           <Select className="mt-4 col-md-6 col-offset-4"
                onChange={handleChange1}
                value={selectedValue1}
                options={options1}
            /> 
            </div>
            <div style={{marginTop:'30px'}}>
           <Select className="mt-4 col-md-6 col-offset-4"
                onChange={handleChange2}
                value={selectedValue2}
                options={options2}
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
        </>
    );
}
export default TeacherSubmitFeedback