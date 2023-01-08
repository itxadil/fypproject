import React from "react"
import ProfilePic from "../../../images/profileImg.jpeg"
import ReactRoundedImage from "react-rounded-image";
import Form, { Input, Fieldset } from 'react-bootstrap-form';
import { useState } from "react";
import "./editp.css"
function TeacherChangeProfile(){
    const name='Adil'
    const rollNo='i192150'
    const [Name,setName]=useState('')
    const [rollnum,setRollnum]=useState('')
    const [address,setAddress]=useState('')
    const [grade,setGrade]=useState('')
    const [gender,setGender]=useState('')
    const [contact,setContact]=useState('')
    const [gcontact,setGcontact]=useState('')
    console.log("Gender",gender)
    return(
        <>
            <h3 style={{width:'260px',margin:'auto',display:'block',marginTop:'20px'}} >Make changes to your profile</h3>
            <div className="first_div">
                <div className="second_div">
                <ReactRoundedImage
                    image={ProfilePic}
                    roundedColor="#321124"
                    imageWidth="150"
                    imageHeight="150"
                    roundedSize="13"
                    borderRadius="70"
                    />
                    <div style={{display:'flex',flexDirection:'column',marginLeft:'50px'}}>
                    <h2>{name}</h2>
                    <h3>{rollNo}</h3>
                    </div>
                </div>
            </div>
            <div className="form_divP">
            <Form>
            <div style={{marginTop:'20px',marginLeft:'26%'}}>
            <div style={{display:'flex',flexDirection:'row',}}>
            <div>
                <label for="name">Enter name</label><br></br>
                <input style={{height:'30px',width:'300px', marginTop:'10px'}} type="text" placeholder="Joe" id='name' value={Name} onChange={(e)=>setName(e.target.value)}/>
            </div>
            <div style={{marginLeft:'30px'}}>
                <label for="roll">Enter your ID</label><br></br>
                <input style={{height:'30px',width:'300px',marginTop:'10px'}} type="text" placeholder="i192150" id='roll' value={rollnum} onChange={(e)=>setRollnum(e.target.value)}/>
            </div>
            </div>
            <div style={{display:'flex',flexDirection:'row', marginTop:'20px'}}>
            <div>
                <label for="address">Enter address</label><br></br>
                <input style={{height:'30px',width:'300px',marginTop:'10px'}} type="text" placeholder="Islamabad,Pakistan" id='address' value={address} onChange={(e)=>setAddress(e.target.value)}/>
            </div>
            <div style={{marginLeft:'30px'}}>
                <label for="subject">Enter Subject</label><br></br>
                <input style={{height:'30px',width:'300px',marginTop:'10px'}} type="text" placeholder="Matric" id='subject' value={grade} onChange={(e)=>setGrade(e.target.value)}/>
            </div>
            </div>
             <div style={{marginTop:'20px'}}>
                <input type="radio" id="child" name="age" value="Male" onChange={(e)=>{
                    setGender('Male')
                }}/>
                <label for="child">Male</label><br/>
                <input type="radio" id="adult" name="age" value="Female" onChange={(e)=>{
                    setGender('Female')
                }}/>
                <label for="adult">Female</label><br/>
             </div>
             <div style={{display:'flex',flexDirection:'row', marginTop:'20px'}}>
            <div>
                <label for="phone_number">Enter contact number</label><br></br>
                <input style={{height:'30px',width:'300px',marginTop:'10px'}} type="text" placeholder="+923163456346" id='phone_number' value={contact} onChange={(e)=>setContact(e.target.value)}/>
            </div>
            <div style={{marginLeft:'30px'}}>
                <label for="email">Enter Email</label><br></br>
                <input style={{height:'30px',width:'300px',marginTop:'10px'}} type="text" placeholder="john@gmail.com" id='email' value={gcontact} onChange={(e)=>setGcontact(e.target.value)}/>
            </div>
            </div>
            <button type="submit" style={{borderRadius:'20px',float:'right', marginRight:'43%',marginTop:'20px', fontSize:'20px', backgroundColor:'lightblue',marginTop:'20px'}}>Save changes</button>
            </div>
            </Form>
            </div>
        </>
    )
}

export default TeacherChangeProfile