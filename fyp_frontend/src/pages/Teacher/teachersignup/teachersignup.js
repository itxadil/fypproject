import "./teachersignup.css"
import React, { useState } from "react";
import {useHistory} from "react-router-dom"
import { NavLink } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios"
function TeacherSignup(){
    const [allteachers,setallteachers]=useState([])
    useEffect(()=>{
        const getallteachers=async()=>{
            const response= await axios.get('http://localhost:3500/teacher')
            setallteachers(response.data)
        }
        getallteachers()
    },[])
    console.log("allteachers",allteachers)
    const history=useHistory()
    // console.log("path",window.location.pathname)
    // if(window.location.pathname='/signup'){
    //     document.body.style = 'background: lightblue;';
    // }else{
    //     document.body.style = 'background: white;'
    // }
    const [name,setName]=useState('')
    const [user_id,setUser_id]=useState('')
    const [contact,setContact]=useState('')
    const [address,setAddress]=useState('')
    const [school_id,setSchool_id]=useState('')
    const [password,setPassword]=useState('')
    const [cnic,setCnic]=useState('')
    const [email,setEmail]=useState('')
    const [gender,setGender]=useState('')
    const [checkbox,setcheck]=useState(false)
    const errors={
        name:'',
        user_id:'',
        contact:'',
        address:'',
        school_id:'',
        password:'',
        cnic:'',
        email:'',
        gender:'',
        checkbox:''

    }

    const onchange=()=>{
        setcheck(!checkbox)
    }
    const userData={
        name:name,
        user_id:user_id,
        address:address,
        cnic:cnic,
        gender:gender,
        contact:contact,
        school_id:school_id,
        email:email,
        password:password
      }
    const options={
        method:'POST',
        headers:{'Content-Type':'application/json'},
        body:JSON.stringify(userData)
      }
      const validateData=()=>{
        if(name===''){
            errors.name="Name can't be empty"
        }if(user_id===''){
            errors.user_id="ID can't be empty"
        }if(address===''){
            errors.address="Address can't be empty"
        }if(cnic===''){
           errors.cnic="Cnic can't be empty"
        }if(gender===''){
             errors.gender="Gender can't be empty"
        }if(contact===''){
            errors.contact="Contact number can't be empty"
        }if(school_id===''){
           errors.school_id="School id can't be empty"
        }if(email===''){
            errors.email="Email can't be empty"
        }if(password===''){
              errors.password="Password can't be empty"
        }if(checkbox===false){
             errors.checkbox="Check box must be checked"
        }
      }
       const registerUser=async()=>{
            const rollnumberlist=[]
            const emaillist=[]
            allteachers.map((item)=>{
            rollnumberlist.push(item.user_id)
            emaillist.push(item.email)
           })
           if(rollnumberlist.includes(user_id)){
            console.log("ROll EXITS")
            errors.rollnumber="User id already exits"
           }
           if(emaillist.includes(email)){
            console.log("Email EXITS")
            errors.email="Email address already exits"
           }
        else{
            fetch("http://localhost:3500/teacher",options).then((response)=>console.log("Response",response))
            history.push("/teacherlogin")
          }   
  }
    return(
    <>
       <div className="signup-form">
        <form method="post" onSubmit={validateData}>
		<h2>Register</h2>
		<p className="hint-text">Create your account. It's free and only takes a minute.</p>
        <div className="form-group">
			<div className="row">
				<div className="col"><input type="text" className="form-control" name="first_name" placeholder="Name"  value={name} onChange={(e)=>setName(e.target.value)}/></div>
                {name==='' && <p1 style={{color:'red'}}>{errors.name}</p1>}
				<div className="col"><input type="text" className="form-control" name="rollnumber" placeholder="User Id"  value={user_id} onChange={(e)=>setUser_id(e.target.value)}/></div>
                {user_id==='' && <p1>{errors.user_id}</p1>}
            </div>        	
        </div>
        <div className="form-group">
        <div className="row" style={{width:'390px', marginLeft:'10px'}}>
        	<input style={{marginLeft:'-10px'}} type="email" className="form-control" name="email" placeholder="Email"   value={email} onChange={(e)=>setEmail(e.target.value)}/>
            {email==='' && <p1>{errors.email}</p1>}
            <input style={{marginLeft:'-10px'}} type="text" className="form-control" name="contact" placeholder="contact number"   value={contact} onChange={(e)=>setContact(e.target.value)}/>
            {contact==='' && <p1>{errors.contact}</p1>}
            </div>
        </div>
		<div className="form-group">
            <input type="password" className="form-control" name="password" placeholder="Password"   value={password} onChange={(e)=>setPassword(e.target.value)}/>
            {password==='' && <p1>{errors.password}</p1>}
            <input  type="text" className="form-control" name="address" placeholder="Address"  value={address} onChange={(e)=>setAddress(e.target.value)}/>
            {address==='' && <p1>{errors.address}</p1>}
        </div>
		<div className="form-group">
            <input type="text" className="form-control" name="grade" placeholder="Cnic"  value={cnic} onChange={(e)=>setCnic(e.target.value)}/>
            {cnic==='' && <p1>{errors.cnic}</p1>}
            <input type="text" className="form-control" name="guardian" placeholder="School Id"  value={school_id} onChange={(e)=>setSchool_id(e.target.value)} />
            {school_id==='' && <p1>{errors.school_id}</p1>}
        </div>        
        <div className="form-group">
        <input style={{height:'15px',width:'20px'}} type="radio" id="child" name="age" value="Male" onChange={(e)=>setGender(e.target.value)}/>
                <label style={{marginLeft:'10px'}} for="child">Male</label><br/>
                <input style={{height:'15px',width:'20px'}} type="radio" id="adult" name="age" value="Female"  onChange={(e)=>setGender(e.target.value)} />
                <label style={{marginLeft:'10px'}} for="adult">Female</label><br/>
                
        </div>
        {gender==='' && <p1>{errors.gender}</p1>}
        <div className="form-group">
			<label className="form-check-label"><input type="checkbox"  value={checkbox} onChange={onchange}/> I accept the <a href="#">Terms of Use</a> &amp; <a href="#">Privacy Policy</a></label>
		</div>
        {checkbox===false && <p1>{errors.checkbox}</p1>}
		<div className="form-group">
            <button onClick={registerUser} type="submit" className="btn btn-success btn-lg btn-block">Register Now</button>
        </div>
       
    </form>
	<NavLink style={{color:'blue'}} to="/teacherlogin">Already have an account?</NavLink>
</div>
    </>
    );
}
export default TeacherSignup