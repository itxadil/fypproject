import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import "../../css/animate.min.css"
import "../../css/main.css"
// import "../../js/html5shiv"
// import "../../js/jquery"
// import "../../js/jquery.prettyPhoto"
// import "../../js/main"
import "./h.css"
import "./home.css"
import "../../css/owl.transitions.css"
import "../../css/prettyPhoto.css"
import "../../css/responsive.css"
// import "../../css/owl.carousel.css"
import { Carousel } from 'react-responsive-carousel';
import photo1 from '../../images/img1.jpeg'
import photo2 from '../../images/img2.jpeg'
import photo3 from '../../images/img3.jpeg'
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import Slideshow from "../../components/ImageSlider/imgSlider";
import Buttons from "../../components/buttons/button";
import { useHistory } from "react-router-dom";
import { useState } from "react";
import HoverMenuButton from "../../components/dropDown/dropdown"
import axios from "axios";
import { useEffect } from "react";
import logo from "../../images/logo.png"
import mainfeature from "../../images/main-feature.png"
import cta2 from "../../images/cta2/cta2-img.png"
import pone from "../../images/portfolio/01.jpg"
import ptwo from "../../images/portfolio/02.jpg"
import pthree from "../../images/portfolio/03.jpg"
import pfour from "../../images/portfolio/04.jpg"
import pfive from "../../images/portfolio/05.jpg"
import psix from "../../images/portfolio/05.jpg"
import pseven from "../../images/portfolio/07.jpg"
import peight from "../../images/portfolio/08.jpg"
import pfull from "../../images/portfolio/full.jpg"
import adil from "../../images/profileImg.jpeg"
import asim from "../../images/asim.jpeg"
import hassan from "../../images/hassan.jpeg"
import khubaib from "../../images/khubaib.jpeg"
import tthree from "../../images/team/03.jpg"
import tfour from "../../images/team/04.jpg"
import test from "../../images/testimonial/01.jpg"
import testbg from "../../images/testimonial/bg.jpg"
import b1 from "../../images/blog/01.jpg"
import b2 from "../../images/blog/02.jpg"
import b3 from "../../images/blog/03.jpg"
import s1 from "../../images/slider/bg1.jpg"
import s2 from "../../images/slider/bg2.jpg"
import chatbot from "../../images/chatbot.png"


function Home(){
    let history=useHistory()
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
    const [activeButton, setActiveButton] = useState(-1)
    const recentannoucements=[
        {
            id:'1234',
            desc:'announcement1',
            link:'/attemptquiz'
        },
        {
            id:'1234',
            desc:'announcement2',
            link:'/attemptquiz'
        },
        {
            id:'1234',
            desc:'announcement3',
            link:'/attemptquiz'
        },
        {
            id:'1234',
            desc:'announcement4',
            link:'/attemptquiz'
        },
        {
            id:'1234',
            desc:'announcement5',
            link:'/attemptquiz'
        }
    ]
     const courses=[
        {
            name:'ENGLISH composition',
            courseCode:'ENG1102',
            link:'/'
        },
        {
            name:'Intro to Info. and Comm. Technologie',
            courseCode:'CL117',
        },
        {
            name:'Programming Fundamentals',
            courseCode:'CS118',
        },
        {
            name:'Applied Physics',
            courseCode:'EE117',
        },
        {
            name:'Calculus and Analytical Geometry',
            courseCode:'MT119',
        },
        {
            name:'Islamic and Religious Studies',
            courseCode:'SS111',
        },
        {
            name:'Digital Logic Design',
            courseCode:'EE227',
        },        
    ]
    const styleData={backgroundColor:'lightblue', height:'40px',width:'200px', border:'1px solid white', borderRadius:'10px', cursor:'pointer'}
    return( <>
    {/* <div>
    <link href="//netdna.bootstrapcdn.com/font-awesome/3.2.1/css/font-awesome.css" rel="stylesheet" />
    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/fontawesome.min.css" ref="stylesheet" />
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@3.3.7/dist/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous"></link>
    </div> */}
    <div style={{ width:'50%' , marginLeft:'400px', marginTop:'20px'}}>
      {studentCourses.map((item,index)=>(
         <button onClick={ (e) => {
            setActiveButton(index)
            setId(e.target.id)
            } } id={item.courseCode} style={{height:'50px', border:'1px solid green', borderRadius:'20px', marginRight:'10px',marginTop:'10px', backgroundColor: activeButton===index && 'blue', width:'100px',color: activeButton===index && 'white', cursor:'pointer' ,marginLeft:'10px'}}>{item.courseCode}</button>
      ))}
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
    </>);
}

export default Home