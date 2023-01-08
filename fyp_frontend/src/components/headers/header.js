import { NavLink } from "react-router-dom"
import React from "react";
import "./headers.css"
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { logout, selectUser } from "../../redux/userSlice";
import {useHistory} from "react-router-dom"
function Header(){
  const history=useHistory()
  const user1=useSelector(selectUser)
  const [open, setOpen] = useState(false);
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
  const dispatch=useDispatch()
  const onclick=()=>{
    window.localStorage.removeItem("isLoggedIn")
    dispatch(logout())
    history.push('/login')
    window.location.reload()
  }
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
                    <NavLink  className="navll" style={linkStyle} exact to='/'><li>Home</li></NavLink>   
                    <NavLink className="navll" style={linkStyle} exact to='/attemptquiz'><li>Attempt quiz</li></NavLink> 
                    <NavLink className="navll" style={linkStyle} to='/editprofile'><li>Edit profile</li></NavLink> 
                    {window.localStorage.getItem('isLoggedIn')!==null && <button id="btnfunc" style={{backgroundColor:'transparent',color:'black',fontSize:'20px',textDecoration:'none',border:'none',marginRight:'20px',marginTop:'10px',cursor:'pointer'}} onClick={onclick}>Logout</button>}
                    <div  className="dropdown">
                      <button id="btnfunc" style={{backgroundColor:'transparent',color:'black',fontSize:'20px',textDecoration:'none',border:'none',marginRight:'20px',marginTop:'10px',cursor:'pointer'}} onMouseEnter={handleOpen} onMouseLeave={handleClose}>Activity</button>
                      {open ? (
                        <div onMouseEnter={handleOpen1} onMouseLeave={handleClose1} className="dropit">
                       
                        <ul className="menu">   
                        <div style={{paddingTop:'20px', justifyContent:'space-between'}} className="linkDiv">
                        <NavLink className="btnf" style={{color:'black',fontSize:'20px',textDecoration:'none'}} to='/analyzeResult'><li className="btn1">Analyze results</li></NavLink>   
                        <NavLink className="btnf" style={{color:'black',fontSize:'20px',textDecoration:'none'}} to='/recheckRequest'><li className="btn1">Rechecking request</li></NavLink>   
                        <NavLink className="btnf" style={{color:'black',fontSize:'20px',textDecoration:'none'}} to='/checkresults'><li className="btn1">Check results</li></NavLink> 
                        <NavLink className="btnf" style={{color:'black',fontSize:'20px',textDecoration:'none'}} to='/submitfeedback'><li className="btn1">Submit feedback</li></NavLink>     
                        </div>
                        </ul>
                        
                        </div>
                      ) : null}
                    </div>
                  
                    </ul>
              </div>
              
    </>
   );
}

export default Header