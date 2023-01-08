import { NavLink, useHistory } from "react-router-dom"
import React from "react";
import "./header.css"
import { useState } from "react";
function TeacherHeader(){
  const [open, setOpen] = React.useState(false);
  const [openquiz, setOpenQuiz] = React.useState(false);
  const history=useHistory()
  const [flag, setFlag] = useState(true);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose=()=>{
    setOpen(false)
  }

  const handleOpen1 = () => {
    setOpen(true);
  };
  const handleClose1=()=>{
    setOpen(false)
  }
  const onclick=()=>{
    window.localStorage.removeItem('teacherLogged')
    history.push('/teacherlogin')
    window.location.reload()
  }
  const teacher=window.localStorage.getItem('teacherId')
  const linkStyle = {

    textDecoration: "none",
    color: 'black',
    fontSize:'20px',
    marginTop:'10px'
  };
   return(
    <>
         <div className="navBar">
                    <ul>
                    <NavLink style={linkStyle} exact to='/teacherHome'><li>Home</li></NavLink>   
                    <NavLink style={linkStyle}   to='/teachereditprofile'><li>Edit profile</li></NavLink>  
                    <NavLink style={linkStyle}  to='/teachermaintainquizes'><li>Maintain Quizes</li></NavLink>  
                    {teacher!=='' && <button id="btnfunc" style={{backgroundColor:'transparent',color:'black',fontSize:'20px',textDecoration:'none',border:'none',marginRight:'20px',marginTop:'10px',cursor:'pointer'}} onClick={onclick}>Logout</button> }
                    <div className="dropdown">
                      <button id="btnfunc" style={{backgroundColor:'transparent',color:'black',fontSize:'20px',textDecoration:'none',border:'none',marginRight:'20px',marginTop:'10px',cursor:'pointer'}} onMouseEnter={handleOpen} onMouseLeave={handleClose}>Activity</button>
                      {open ? (
                        <div className="dropit" onMouseEnter={handleOpen1} onMouseLeave={handleClose1}>
                        <ul className="menu">
                        <NavLink className="btnf" style={{color:'black',fontSize:'20px',textDecoration:'none'}} to='/teacheranalyzeResult'><li className="btn1">Analyze Results</li></NavLink>   
                        <NavLink className="btnf" style={{color:'black',fontSize:'20px',textDecoration:'none'}} to='/teacheruploadResult'><li className="btn1">Upload Quiz Marks</li></NavLink>    
                        <NavLink className="btnf" style={{color:'black',fontSize:'20px',textDecoration:'none'}} to='/teachersubmitfeedback'><li className="btn1">Submit feedback</li></NavLink>      
                        </ul>
                        </div>
                      ) : null}
                    </div>
                    
                    </ul>
              </div>              
    </>
   );
}

export default TeacherHeader