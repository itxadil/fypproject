import React, { useState } from "react";
import "./signup.css"
import {useHistory} from "react-router-dom"
import { NavLink } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios"
function Signup(){
    const [allstudents,setAllStudents]=useState([])
    useEffect(()=>{
        const getallstudents=async()=>{
            const response= await axios.get('http://localhost:3500/students')
            setAllStudents(response.data)
        }
        getallstudents()
    },[])
    console.log("ALLSTUDENTS",allstudents)
    const history=useHistory()
    // console.log("path",window.location.pathname)
    // if(window.location.pathname='/signup'){
    //     document.body.style = 'background: lightblue;';
    // }else{
    //     document.body.style = 'background: white;'
    // }
    const [name,setName]=useState('')
    const [rollnumber,setRoll]=useState('')
    const [contact,setContact]=useState('')
    const [address,setAddress]=useState('')
    const [Gconact,setGcontact]=useState('')
    const [password,setPassword]=useState('')
    const [grade,setGrade]=useState('')
    const [email,setEmail]=useState('')
    const [gender,setGender]=useState('')
    const [checkbox,setcheck]=useState(false)

    const errors={
        name:'',
        rollnumber:'',
        contact:'',
        address:'',
        Gconact:'',
        password:'',
        grade:'',
        email:'',
        gender:'',
        checkbox:''

    }

    const onchange=()=>{
        setcheck(!checkbox)
    }
    console.log("VALUES",name,rollnumber,checkbox,)
    const userData={
        name:name,
        rollnumber:rollnumber,
        address:address,
        grade:grade,
        gender:gender,
        contact:contact,
        guadriancontact:Gconact,
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
        }if(rollnumber===''){
            errors.rollnumber="Roll number can't be empty"
        }if(address===''){
            errors.address="Address can't be empty"
        }if(grade===''){
           errors.grade="Grade can't be empty"
        }if(gender===''){
             errors.gender="Gender can't be empty"
        }if(contact===''){
            errors.contact="Contact number can't be empty"
        }if(Gconact===''){
           errors.guadriancontact="Guardian's contact number can't be empty"
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
            allstudents.map((item)=>{
            rollnumberlist.push(item.rollnumber)
            emaillist.push(item.email)
           })
           if(rollnumberlist.includes(rollnumber)){
            console.log("ROll EXITS")
            errors.rollnumber="Roll number already exits"
           }
           if(emaillist.includes(email)){
            console.log("Email EXITS")
            errors.email="Email address already exits"
           }
        else{
            fetch("http://localhost:3500/students",options).then((response)=>console.log("Response",response))
            history.push("/")
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
				<div className="col"><input type="text" className="form-control" name="first_name" placeholder="First Name"  value={name} onChange={(e)=>setName(e.target.value)}/></div>
                {name==='' && <p1 style={{color:'red'}}>{errors.name}</p1>}
				<div className="col"><input type="text" className="form-control" name="rollnumber" placeholder="rollnumber"  value={rollnumber} onChange={(e)=>setRoll(e.target.value)}/></div>
                {rollnumber==='' && <p1>{errors.rollnumber}</p1>}
            </div>        	
        </div>
        <div className="form-group">
        <div className="row">
        	<input type="email" className="form-control" name="email" placeholder="Email" id="one"  value={email} onChange={(e)=>setEmail(e.target.value)}/>
            {email==='' && <p1>{errors.email}</p1>}
            <input style={{marginLeft:'10px'}} type="text" className="form-control" id="two" name="contact" placeholder="contact number"   value={contact} onChange={(e)=>setContact(e.target.value)}/>
            {contact==='' && <p1>{errors.contact}</p1>}
            </div>
        </div>
		<div className="form-group">
            <input type="password" className="form-control" name="password" placeholder="Password" id="three"  value={password} onChange={(e)=>setPassword(e.target.value)}/>
            {password==='' && <p1>{errors.password}</p1>}
            <input  type="text" className="form-control" id="four" name="address" placeholder="Address"  value={address} onChange={(e)=>setAddress(e.target.value)}/>
            {address==='' && <p1>{errors.address}</p1>}
        </div>
		<div className="form-group">
            <input type="text" className="form-control" name="grade" placeholder="Grade" id="five" value={grade} onChange={(e)=>setGrade(e.target.value)}/>
            {grade==='' && <p1>{errors.grade}</p1>}
            <input type="text" className="form-control" name="guardian" id="six" placeholder="Guardian's contact number"  value={Gconact} onChange={(e)=>setGcontact(e.target.value)} />
            {Gconact==='' && <p1>{errors.guadriancontact}</p1>}
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
	<NavLink style={{color:'blue'}} to="/">Already have an account?</NavLink>
</div>
    </>
    );
}
export default Signup