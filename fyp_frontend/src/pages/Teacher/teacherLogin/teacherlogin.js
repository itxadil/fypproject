import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import {GoogleButton} from 'react-google-button'
import { GoogleLogin, GoogleLogout } from "react-google-login";
import '../../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { useHistory } from "react-router-dom";
import axios from "axios"
function TeacherLogin(){
    const history=useHistory()
    const [userInfo,setUserInfo]=useState({
        name: "",
        emailId: ""
    })
    const [response,setResponse]=useState([])

    useEffect(()=>{
      const getData=async()=>{
        const res=await axios.get('http://localhost:3500/teacher')
        setResponse(res.data)
      }
      getData()
    },[])

    console.log("DATA",response)
    const [isLoggedIn,setisLoggedIn]=useState(false)
    const [iderror,setIDError]=useState('')
    const [iderror1,setIDError1]=useState('')
    const [passerror1,setPassError1]=useState('')
    const [index,setIndex]=useState(0)
    const [rollflag,setRollFlag]=useState(false)
    const [passflag,setPassFlag]=useState(false)
    const [passerror,setPassError]=useState('')
    const [user_id,setUser_id]=useState('')
    const [password,setPass]=useState('')
    const CLIENT_ID =
  "522915056637-4f5if0j5lkh94t6foq82st26fk2m89ko.apps.googleusercontent.com";
  const responseGoogleSuccess = (response) => {
    console.log();
    let userInfo = {
      name: response.profileObj.name,
      emailId: response.profileObj.email,
    };
    setUserInfo(userInfo)
    setisLoggedIn(true)
  }

  // Error Handler
  const responseGoogleError = (response) => {
    console.log(response);
  };
 const logout = (response) => {
    console.log(response);
    let userInfo = {
      name: "",
      emailId: "",
    };
    setUserInfo(userInfo)
    setisLoggedIn(false)
  };
  const onsubmit=(e)=>{
    e.preventDefault()
    if(user_id===''){
      setIDError("Teacher ID can't be empty")
      }
    if(password===''){
      setPassError("Password can't be empty")
    }
    else if(user_id!=="" && password!==""){
        const newData=[]
        let newIndex;
        response.map((item)=>{
          console.log(item)
          newData.push(item.user_id)
          for(var i=0;i<newData.length;i++){
            if(user_id===newData[i]){
             newIndex=i
             console.log("KKDK",newIndex)
            }
          }
        })
        
        const dataObj=response[newIndex]

        console.log("Data obj",dataObj)
        if(!newData.includes(user_id)){
            setRollFlag(true)
        }
        else if(newData.includes(user_id)){
          if(password!==dataObj.password){
            setPassFlag(true)
          }
          else{
            window.localStorage.setItem('teacherLogged',true)
            window.localStorage.setItem('teacherId',user_id)
            history.push('/teacherHome')
          }
        }
    }  
  }

    return (
        <>
         <h1 style={{margin:'auto', display:'block', width:'200px', marginTop:'20px', fontWeight:'bold',fontFamily:'sans-serif',color:'navy',borderBottom: "2px solid #000",fontSize:'50px' , marginBottom:'-100px'}}>QTaleem</h1>
            <section className="vh-100">
      <div className="container py-5 h-100">
    <div className="row d-flex align-items-center justify-content-center h-100">
      <div className="col-md-8 col-lg-7 col-xl-6">
        <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
          className="img-fluid" alt="Phone image" />
      </div>
      <div className="col-md-7 col-lg-5 col-xl-5 offset-xl-1">
        <form onSubmit={onsubmit}>
          <div className="form-outline mb-4">
          {/* <label className="form-label" for="form1Example13">Rollnumber</label> */}
            <input placeholder="Teacher Id" type="text" id="form1Example13" className="form-control form-control-lg" value={user_id} onChange={(e)=>setUser_id(e.target.value)}/>
           
          </div>

          <div className="form-outline mb-4">
          {/* <label className="form-label" for="form1Example23">Password</label> */}
            <input  placeholder="Password"  type="text" id="form1Example23" className="form-control form-control-lg"  value={password} onChange={(e)=>setPass(e.target.value)}/>
           
          </div>

          <div className="d-flex justify-content-around align-items-center mb-4">
            <div className="form-check">
              <input className="form-check-input" type="checkbox" value="" id="form1Example3" checked />
              <label className="form-check-label" for="form1Example3"> Remember me </label>
            </div>
            <NavLink to="/teachersignup">I don't have an account</NavLink>
          </div>

          <button type="submit" className="btn btn-primary btn-lg btn-block">Sign in</button>

          <div className="divider d-flex align-items-center my-4">
            <p className="text-center fw-bold mx-3 mb-0 text-muted">OR</p>
          </div>

          <a className="btn btn-primary btn-lg btn-block" style={{backgroundColor: "#3b5998"}} href="#!"
            role="button">
            <i className="fab fa-facebook-f me-2"></i>Continue with Facebook
          </a>
          <a className="btn btn-primary btn-lg btn-block" style={{backgroundColor: "#55acee", marginLeft:'30px'}}  href="#!"
            role="button">
            <i className="fab fa-twitter me-2"></i>Continue with Twitter</a>

        </form>
      </div>
    </div>
  </div>
</section>
        </>
    );
}
export default TeacherLogin