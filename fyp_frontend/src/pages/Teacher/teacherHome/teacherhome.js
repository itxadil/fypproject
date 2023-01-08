import React, { useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import Docxtemplater from "docxtemplater";
import PizZip from "pizzip";
import JSZip from "jszip";
import { Carousel } from 'react-responsive-carousel';
import photo1 from '../../../images/img1.jpeg'
import photo2 from '../../../images/img2.jpeg'
import photo3 from '../../../images/img3.jpeg'
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import TeacherHeader from "../TeacherHeader/headers";
import './teacherh.css'
import Slideshow from "../../../components/ImageSlider/imgSlider";
import TeacherSlideshow from "../../../components/teacherImgSlider/imgs";
import Buttons from "../../../components/buttons/button";
import Select from 'react-select'
import axios from 'axios';
import { useHistory } from "react-router-dom";
import { useEffect } from "react";
import { current } from "@reduxjs/toolkit";
import mainfeature from "../../../images/main-feature.png"
import cta2 from "../../../images/cta2/cta2-img.png"
import adil from "../../../images/profileImg.jpeg"
import asim from "../../../images/asim.jpeg"
import hassan from "../../../images/hassan.jpeg"

import chatbot from "../../../images/chatbot.png"
function splitOnQAndAns(str) {
        return str.split(/(Q\.NO:|ANS\.NO:)/);
      }
function splitOnQAndAnsM(str) {
         return str.split(/(Q\.NO:|A:|B:|C:|D:|ANS\.NO:)/);
       }
function TeacherHome(){
   const [teacherCourses,setteachercourses]=useState([])
   const [activeButton, setActiveButton] = useState(-1)
   const [Cid,setId]=useState('')
   const [option,setOption]=useState('')
   let teacherId=window.localStorage.getItem('teacherId')
   const [questions, setQuestions] = useState([]);
   const [quiz,setQuiz]=useState([])
   const [oncFlag,setOnCFlag]=useState(false)
   useEffect(()=>{
      const getteachercourses=async()=>{
          const response=await axios.get(`http://localhost:3500/teacherCourses`)
          console.log("teacher",response.data)
          let teacherindex=0
          response.data.map((item,index)=>{
            if(item.user_id===teacherId){
               teacherindex=index
               console.log(index)
            }
          })
          setteachercourses(response.data[teacherindex].coursesList)
      }
      getteachercourses()
   },[])

   const MCQSclick=()=>{
      document.getElementById('selectedImg').click()
      setOption('M')
   }
   const descriptiveClick=()=>{
      document.getElementById('selectedImg').click()
      setOption('D')
   }
   const onc=()=>{
      // document.getElementById('selectedImg').click()
      setOnCFlag(!oncFlag)
      
   }
   const [selectedFile, setSelectedFile] = useState();
	const [isFilePicked, setIsFilePicked] = useState(false);
  const [data,setData]=useState('')
   const handleFileRead = (e) => {
       return e.target.result;
    }
	// const changeHandler = (event) => {

	// 	setSelectedFile(event.target.files[0]);
   //    let reader = new FileReader();
   //    let file=event.target.files[0]
   //    reader.readAsBinaryString(file)
      
   //      reader.onload = function () {
   //       console.log("FFFF")
   //          setData(reader.result)
   //          const content = event.target.result;
   //          var zip = new JSZip(content);
   //          var doc=new Docxtemplater().loadZip(zip)
   //          var text= doc.getFullText();
   //          console.log("TEXT",text);
   //      }
	// 	setIsFilePicked(true);
	// };
   const showFile = async (e) => {
        var data;
        var questions = []
        var answers = []
        var arr = []
        var arr2 = []

        
      console.log('showfile', e)
      e.preventDefault();
      const reader = new FileReader();
      reader.onload = async (e) => {
        const content = e.target.result;
        var doc = new Docxtemplater(new PizZip(content), {delimiters: {start: '12op1j2po1j2poj1po', end: 'op21j4po21jp4oj1op24j'}});
        var text = doc.getFullText();

        setData(text)
            arr = splitOnQAndAns(text)
            var j =0
            for(let i = 0; i < arr.length; i++){
                  arr[i] = arr[i].replaceAll('Q.NO:', '');
                  arr[i] = arr[i].replaceAll('ANS.NO:', '');
            }

            for(let i = 0; i < arr.length; i++){
                  if(i>1){
                           questions[j] = arr[i]
                           i=i+2
                           answers[j] = arr[i]
                           j++
                           i++
                  }
            }

            for(let i = 0; i < questions.length; i++){
                  console.log(questions[i]);
                  console.log(answers[i]);
            }
            console.log(questions.length)
            console.log(answers.length)
            for(let i = 0; i < questions.length; i++){
                  arr2.push({"numb": questions[i][1], "Question:":questions[i], "Answer:":answers[i]})
                  //arr2.push({"Ans:":answers[i]})
                  setQuiz(arr2)
                  console.log(arr2[i]);
            }
            const dataToServer={
              courseCode: Cid,
              questions:arr2
            }
            const response=await axios.post('http://localhost:3500/teacherQB',dataToServer)
            console.log(response)
      };
      reader.readAsBinaryString(e.target.files[0]);
    };

    const showFileMCQ = async (e) => {
      var questions = []
      var answers = []
      var optionA = []
      var optionB = []
      var optionC = []
      var optionD = []
      var arr = []
      var arr2 = []

      
    console.log('showfile', e)
    e.preventDefault();
    const reader = new FileReader();
    reader.onload = async (e) => {
      const content = e.target.result;
      var doc = new Docxtemplater(new PizZip(content), {delimiters: {start: '12op1j2po1j2poj1po', end: 'op21j4po21jp4oj1op24j'}});
      var text = doc.getFullText();

      setData(text)
      arr = splitOnQAndAnsM(text)
      var j =0

      console.log(arr)
      for(let i = 0; i < arr.length; i++){
              arr[i] = arr[i].replaceAll('Q.NO:', '');
              arr[i] = arr[i].replaceAll('A:', '');
              arr[i] = arr[i].replaceAll('B:', '');
              arr[i] = arr[i].replaceAll('C:', '');
              arr[i] = arr[i].replaceAll('D:', '');
              arr[i] = arr[i].replaceAll('ANS.NO:', '');
      }

      for(let i = 0; i < arr.length; i++){
          console.log(arr[i])
      }
      for(let i = 0; i < arr.length; i++){
              if(i>1){
                      questions[j] = arr[i]
                      i=i+2
                      optionA[j] = arr[i]
                      i=i+2
                      optionB[j] = arr[i]
                      i=i+2
                      optionC[j] = arr[i]
                      i=i+2
                      optionD[j] = arr[i]
                      i = i+2
                      answers[j] = arr[i]
                      j++
                      i++
              }
      }


      for(let i = 0; i < questions.length; i++){
              console.log(questions[i]);
              console.log(optionA[i]);
              console.log(optionB[i]);
              console.log(optionC[i]);
              console.log(optionD[j]);
              console.log(answers[i]);
      }
      console.log(questions.length)
      console.log(answers.length)
      for(let i = 0; i < questions.length; i++){
              arr2.push({"numb": questions[i][1],"Question:":questions[i], "A:":optionA[i], "B:":optionB[i],"C:":optionC[i] , "D:":optionD[i],"Answer:":answers[i]})
              //arr2.push({"Ans:":answers[i]})
              console.log(arr2[i]);
      }
      console.log("ARR2",arr2)
          const dataToServer={
            courseCode: Cid,
            questions:arr2
          }
          const response=await axios.post('http://localhost:3500/teacherQB',dataToServer)
          console.log(response)
    };
    reader.readAsBinaryString(e.target.files[0]);
  };


    const [open,setOpen]=useState(false)
    let history = useHistory();
    const styleData={backgroundColor:'lightblue', height:'40px',width:'200px', border:'1px solid white', borderRadius:'10px', cursor:'pointer'}
   console.log("DATA",data)
   
    const onclick=()=>{
       history.push('/teacherlaunchquiz')
    }
    
    console.log("LLALA",data)
    console.log("lastArray",quiz)
    return <>
    <h2 style={{width:'35%', margin:'auto',display:'block' , marginTop:'20px'}}>Select a course to upload questions</h2>
    <div style={{margin:'auto', width:'25%' ,display:'block', marginTop:'10px'}}>
      {teacherCourses.map((item,index)=>(
         <button onClick={ (e) => {
            setActiveButton(index)
            setId(e.target.id)
            } } id={item.courseCode} style={{height:'50px', border:'1px solid green', borderRadius:'20px', marginRight:'10px',marginTop:'10px', backgroundColor: activeButton===index && 'blue', width:'100px',color: activeButton===index && 'white', cursor:'pointer'}}>{item.courseCode}</button>
      ))}
    </div>
       <div id="div_home" style={{width:'40%' , display:'block', margin:'auto', justifyContent:'space-between', cursor:'pointer', marginTop:'20px'}}>
        <div style={{display:'flex', flexDirection:'row'}}>
        <div>
        <Buttons id="btttn" styles={styleData} onclick={onc} text="Upload questions" />
        {
         oncFlag && <div>
         <Buttons id="btttn" styles={styleData} onclick={MCQSclick} text="Upload MCQ based quiz" />
         <Buttons id="btttn" styles={styleData} onclick={descriptiveClick} text="Upload descriptive quiz" />
         </div>  
        }
        </div>
      <input type="file" id="selectedImg" style={{display: 'none'}} onChange={option==='D' ? showFile : showFileMCQ} />
        <Buttons styles={styleData} text="Generate Quiz"/>
        <div style={{display:'flex', flexDirection:'column'}}>
        <Buttons styles={styleData} text="Launch Quiz" onclick={onclick}/>
        </div>
        </div>
       </div>
       <section id="cta" className="wow fadeIn" style={{marginTop:'20px'}}>
        <div className="container">
            <div className="row">
                <div className="col-sm-9">
                    <h2>Do you have any queries <span style={{fontWeight:'bold'}}>?</span></h2>
                    <p>If you have any queries or you are facing any problems while using this platform, you can get get help by contacting the system.<br></br>Click the icon shown on the right
                    </p>
                </div>
                <div className="col-sm-3 text-right" style={{marginLeft:'-20px'}}>
                    <img style={{cursor:'pointer'}} src={chatbot} width="100px" height="100px" />
                    <h2 style={{marginLeft:'-10px'}}>QCHAT</h2>
                </div>
            </div>
        </div>
    </section>

    <section id="features">
        <div className="container">
            <div className="section-header">
                <h2 className="section-title text-center wow fadeInDown">Awesome Features</h2>
                <p className="text-center wow fadeInDown">Below are the features offered by our system that can help <br/> you in your conceptual studies and boost up your knowledge and skills in your feild</p>
            </div>
            <div className="row">
                <div className="col-sm-6 wow fadeInLeft">
                    <img className="img-responsive" src={mainfeature} alt="" />
                </div>
                <div className="col-sm-6">
                    <div className="media service-box wow fadeInRight">
                        <div className="pull-left">
                            <i className="fa fa-line-chart"></i>
                        </div>
                        <div className="media-body">
                            <h4 className="media-heading">Personalized Evalaution</h4>
                            <p>Different quizes for every user</p>
                        </div>
                    </div>

                    <div className="media service-box wow fadeInRight">
                        <div className="pull-left">
                            <i className="fa fa-cubes"></i>
                        </div>
                        <div className="media-body">
                            <h4 className="media-heading">Zero Plagirism</h4>
                            <p>Our system ensures plagirism free quizes</p>
                        </div>
                    </div>

                    <div className="media service-box wow fadeInRight">
                        <div className="pull-left">
                            <i className="fa fa-pie-chart"></i>
                        </div>
                        <div className="media-body">
                            <h4 className="media-heading">Focus on Conceptual Studies</h4>
                            <p>Quizes are given using Item Response Theory that focus more on the areas where the user's performance is lacked</p>
                        </div>
                    </div>

                    <div className="media service-box wow fadeInRight">
                        <div className="pull-left">
                            <i className="fa fa-pie-chart"></i>
                        </div>
                        <div className="media-body">
                            <h4 className="media-heading">Automated Evaluations</h4>
                            <p>Quizes are checked by the system and you can send the reckeck request for the results of the quiz you have doubts about.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section id="cta2">
        <div className="container">
            <div className="text-center">
                <h2 className="wow fadeInUp" data-wow-duration="300ms" data-wow-delay="0ms">QTALEEM</h2>
                <p className="wow fadeInUp" data-wow-duration="300ms" data-wow-delay="100ms">QTaleem is a project of govenment of Pakistan <br />providing an online learning platform to the students of government institutes.</p>
                <p className="wow fadeInUp" data-wow-duration="300ms" data-wow-delay="200ms"><a className="btn btn-primary btn-lg" href="#">Follow for more</a></p>
                <img className="img-responsive wow fadeIn" src={cta2} alt="" data-wow-duration="300ms" data-wow-delay="300ms" />
            </div>
        </div>
    </section>

   

    
    <section id="work-process">
        <div className="container">
            <div className="section-header">
                <h2 className="section-title text-center wow fadeInDown">Process</h2>
                <p className="text-center wow fadeInDown">Below are some steps you have to follow to use our system <br/> USE IT, BOOST YOUR SKILLS.</p>
            </div>

            <div className="row text-center">
                <div className="col-md-2 col-md-4 col-xs-6">
                    <div className="wow fadeInUp" data-wow-duration="400ms" data-wow-delay="0ms">
                        <div className="icon-circle">
                            <span>1</span>
                            <i className="fa fa-coffee fa-2x"></i>
                        </div>
                        <h3>Registration</h3>
                    </div>
                </div>
                <div className="col-md-2 col-md-4 col-xs-6">
                    <div className="wow fadeInUp" data-wow-duration="400ms" data-wow-delay="100ms">
                        <div className="icon-circle">
                            <span>2</span>
                            <i className="fa fa-bullhorn fa-2x"></i>
                        </div>
                        <h3>Login</h3>
                    </div>
                </div>
                <div className="col-md-2 col-md-4 col-xs-6">
                    <div className="wow fadeInUp" data-wow-duration="400ms" data-wow-delay="200ms">
                        <div className="icon-circle">
                            <span>3</span>
                            <i className="fa fa-image fa-2x"></i>
                        </div>
                        <h3>Select Course</h3>
                    </div>
                </div>
                <div className="col-md-2 col-md-4 col-xs-6">
                    <div className="wow fadeInUp" data-wow-duration="400ms" data-wow-delay="300ms">
                        <div className="icon-circle">
                            <span>4</span>
                            <i className="fa fa-heart fa-2x"></i>
                        </div>
                        <h3>View Quizes</h3>
                    </div>
                </div>
                <div className="col-md-2 col-md-4 col-xs-6">
                    <div className="wow fadeInUp" data-wow-duration="400ms" data-wow-delay="400ms">
                        <div className="icon-circle">
                            <span>5</span>
                            <i className="fa fa-shopping-cart fa-2x"></i>
                        </div>
                        <h3>Attempt Quizes</h3>
                    </div>
                </div>
                <div className="col-md-2 col-md-4 col-xs-6">
                    <div className="wow fadeInUp" data-wow-duration="400ms" data-wow-delay="500ms">
                        <div className="icon-circle">
                            <span>6</span>
                            <i className="fa fa-space-shuttle fa-2x"></i>
                        </div>
                        <h3>Get Evaluations</h3>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section id="meet-team" >
        <div className="container">
            <div className="section-header">
                <h2 className="section-title text-center wow fadeInDown">Meet The Team</h2>
                <p className="text-center wow fadeInDown">This is our team for Final year project. <br/> The team consists of MERN Stack developer, UI/UX designer and AI/ML developer</p>
            </div>

            <div className="row" style={{marginLeft:'200px'}}>
                <div className="col-sm-6 col-md-3">
                    <div className="team-member wow fadeInUp" data-wow-duration="400ms" data-wow-delay="100ms"  style={{width:'300px'}}>
                        <div className="team-img" >
                            <img width="300px" height="350px" className="img-responsive" src={adil} alt="" />
                        </div>
                        <div className="team-info" >
                            <h3>Adil Jamali</h3>
                            <span>MERN Stack</span>
                        </div>
                        <p>Final year student at FAST NUCES Islamabad campus</p>
                        <ul className="social-icons">
                            <li><a href="#"><i className="fa fa-facebook"></i></a></li>
                            <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                            <li><a href="#"><i className="fa fa-google-plus"></i></a></li>
                            <li><a href="#"><i className="fa fa-linkedin"></i></a></li>
                        </ul>
                    </div>
                </div>
                <div className="col-sm-6 col-md-3" style={{marginLeft:'50px'}}>
                    <div className="team-member wow fadeInUp" data-wow-duration="400ms" data-wow-delay="200ms" style={{width:'300px'}}>
                        <div className="team-img">
                            <img  width="300px" height="350px" className="img-responsive" src={asim} alt="" />
                        </div>
                        <div className="team-info">
                            <h3>Asim Umar</h3>
                            <span>UI/UX Developer</span>
                        </div>
                        <p>Final year student at FAST NUCES Islamabad campus</p>
                        <ul className="social-icons">
                            <li><a href="#"><i className="fa fa-facebook"></i></a></li>
                            <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                            <li><a href="#"><i className="fa fa-google-plus"></i></a></li>
                            <li><a href="#"><i className="fa fa-linkedin"></i></a></li>
                        </ul>
                    </div>
                </div>
                <div className="col-sm-6 col-md-3" style={{marginLeft:'50px'}}>
                    <div className="team-member wow fadeInUp" data-wow-duration="400ms" data-wow-delay="300ms"  style={{width:'300px'}}>
                        <div className="team-img">
                            <img width="300px" height="350px" className="img-responsive" src={hassan} alt="" />
                        </div>
                        <div className="team-info">
                            <h3>Hassan Ali</h3>
                            <span>AI/ML</span>
                        </div>
                        <p>Final year student at FAST NUCES Islamabad campus</p>
                        <ul className="social-icons">
                            <li><a href="#"><i className="fa fa-facebook"></i></a></li>
                            <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                            <li><a href="#"><i className="fa fa-google-plus"></i></a></li>
                            <li><a href="#"><i className="fa fa-linkedin"></i></a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </section>

   
    <footer id="footer">
        <div className="container">
            <div className="row">
                <div className="col-sm-6">
                    &copy; 2022 QTALEEM
                </div>
                <div className="col-sm-6">
                    <ul className="social-icons">
                        <li><a href="#"><i className="fa fa-facebook"></i></a></li>
                        <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                        <li><a href="#"><i className="fa fa-google-plus"></i></a></li>
                        <li><a href="#"><i className="fa fa-pinterest"></i></a></li>
                        <li><a href="#"><i className="fa fa-dribbble"></i></a></li>
                        <li><a href="#"><i className="fa fa-behance"></i></a></li>
                        <li><a href="#"><i className="fa fa-flickr"></i></a></li>
                        <li><a href="#"><i className="fa fa-youtube"></i></a></li>
                        <li><a href="#"><i className="fa fa-linkedin"></i></a></li>
                        <li><a href="#"><i className="fa fa-github"></i></a></li>
                    </ul>
                </div>
            </div>
        </div>
    </footer>
    </>
}

export default TeacherHome