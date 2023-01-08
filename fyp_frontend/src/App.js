import './App.css';
import Home from './pages/Home/Home';
import { BrowserRouter, Route, useHistory } from "react-router-dom";
import Header from './components/headers/header';
import CheckResults from './pages/checkresultpage.js/checkresults';
import { Switch } from 'react-router-dom';
import ChangeProfile from './pages/changeProfile/changeProfile';
import AttemptQuiz from './pages/AttemptQuizes/attemptQuiz';
import AnalyzeResult from './pages/AnalyzeResults/analyzeResult';
import RecheckRequest from './pages/Recheck/recheck';
import SubmitFeedback from './pages/submitFeedback/submitfeedback';
import TeacherHome from './pages/Teacher/teacherHome/teacherhome';
import TeacherChangeProfile from './pages/Teacher/editProfile/editProfile';
import TeacherHeader from './pages/Teacher/TeacherHeader/headers';
import MaintainQuiz from './pages/Teacher/MaintainQuizes/maintainquiz';
import LaunchQuiz from './pages/Teacher/launchquiz/launchquizes';
import TeacherSubmitFeedback from './pages/Teacher/teachersubmitfeedback/techersubfeed';
import TeacherAnalyzeResult from './pages/Teacher/teacherAnalyzeresults/teacheranalyzeresult';
import UploadMarks from './pages/Teacher/uploadmarks/uploadmarks';
import UploadIt from './pages/Teacher/uploadmarks/uploadit';
import Signup from './pages/registrationpage/singup';
import Login from './pages/Login/signin';
import TeacherSignup from './pages/Teacher/teachersignup/teachersignup';
import TeacherLogin from './pages/Teacher/teacherLogin/teacherlogin';
import { useSelector } from 'react-redux';
import { selectUser } from './redux/userSlice';
function App() {
  const user=useSelector(selectUser)
  const student=window.localStorage.getItem('isLoggedIn')
  const teacher=window.localStorage.getItem('teacherLogged')
  document.body.style = 'background: #F6F6C9;';
  return (<>
    {(!window.location.pathname.includes('teacher')) ? <BrowserRouter>
    
     <Header></Header>
     <Switch>
     <Route path="/" exact component={student!==null ? Home : Login} />
    <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />
        
        <Route path="/home" component={Home} />
       
        <Route path='/checkresults' component={CheckResults} />
        <Route path='/editprofile' component={ChangeProfile} />
        <Route path='/attemptQuiz' component={AttemptQuiz} />
        <Route path='/analyzeResult' component={AnalyzeResult} />
        <Route path='/recheckRequest' component={RecheckRequest} />
        <Route path='/submitfeedback' component={SubmitFeedback} />
      </Switch>
    </BrowserRouter> : <BrowserRouter>
    <TeacherHeader></TeacherHeader>
     <Switch>
        <Route exact path="/teacher" component={teacher!==null ? TeacherHome : TeacherLogin} />
        <Route exact path="/teacherHome" component={TeacherHome} />
        <Route path='/checkresults' component={CheckResults} />
        <Route path='/teachereditprofile' component={TeacherChangeProfile} />
        <Route path='/teachersubmitfeedback' component={TeacherSubmitFeedback} />
        <Route path='/teachermaintainquizes' component={MaintainQuiz} />
        <Route path='/teacherlaunchquiz' component={LaunchQuiz} />
        <Route path='/teacheranalyzeResult' component={TeacherAnalyzeResult} />
        <Route path='/teacheruploadResult' component={UploadMarks} />
        <Route path='/teacheruploadmarks' component={UploadIt} />
        <Route path='/teacherlogin' component={TeacherLogin} />
        <Route path='/teachersignup' component={TeacherSignup} />
      </Switch>
    </BrowserRouter>}
    </>
  );
}

export default App;
