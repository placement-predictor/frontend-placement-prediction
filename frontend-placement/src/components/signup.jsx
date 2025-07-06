import React from "react";
import "../css/SignUp.css";
import welcome from "../assets/Welcome-PNG-HD.png";
import sidelogo from "../assets/8552e26e9d252e815ffb3b43dc0541c2c1aa38e9.jpg";
import googlelogo from "../assets/google.png";
import facebooklogo from "../assets/facebook.png";
import personlogo from "../assets/personlogo.png";
import locklogo from "../assets/locklogo.png";
import emaillogo from "../assets/emaillogo.png";
import mainlogo from "../assets/logonew.png";
import { Link } from 'react-router-dom';
function SignUp(){
return(
<div class="signup-page">
   <img src={sidelogo} alt="Logo" className="sidelogo" />
   <div className="main-reactangle">
    <div className="main-logo"><img src={mainlogo} alt="Logo" className="mainlogo" /></div>
<div className="inside-rec">
      <div className="create">
      <h1 className="create-account">Create Account</h1></div>
       <div className="signupfrom">
      <div className="google">
 <img src={googlelogo} alt="Logo" className="googlelogo" />
 <p className="sign-up-with-google">Signup with Google</p>
      </div>
      <div className="facebook">
        <img src={facebooklogo} alt="Logo" className="googlelogo" />
 <p className="sign-up-with-google">Signup with Facebook</p>
      </div>
    </div>


<form class="form-container">
  <div class="input-group">
    <span class="icon"> <img src={personlogo} alt="Logo" className="googlelogo" /></span>
    <input type="text" placeholder="Name" />
  </div>

  <div class="input-group">
    <span class="icon"><img src={emaillogo} alt="Logo" className="googlelogo" /></span>
    <input type="email" placeholder="Email" />
  </div>

  <div class="input-group">
    <span class="icon"><img src={locklogo} alt="Logo" className="googlelogo" /></span>
    <input type="password" placeholder="Password" />
  </div>
</form>

<div className="signup-button"><p className="signup-name">SIGN UP</p></div>
<div className="already-account">
  <span className="loginacc">Already have an Account?</span>
  <Link to="/login" className="loginurl"> Login</Link>
</div>
    </div>
   
   </div>
    <div className="ellipse3"></div>
   <div className="ellipse2"></div>
   <div className="ellipse1"></div>
   <div className="aboutlink">AboutUs</div>
   <div className="welcome">Welcome!</div>
  
</div>


);
}
export default SignUp;