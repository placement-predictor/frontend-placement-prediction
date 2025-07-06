import React from "react";
import "../css/SignUp.css";
import welcome from "../assets/Welcome-PNG-HD.png";
import sidelogo from "../assets/8552e26e9d252e815ffb3b43dc0541c2c1aa38e9.jpg";
import googlelogo from "../assets/google.png";
import facebooklogo from "../assets/facebook.png";
import personlogo from "../assets/personlogo.png";
import locklogo from "../assets/locklogo.png";
import emaillogo from "../assets/emaillogo.png";
import mainlogo from "../assets/94773414d9ad297912557ec5bb06d5aa7df78e6d.jpg";
import "../css/login.css";
function Login(){
return(
<div class="signup-page">
   <img src={sidelogo} alt="Logo" className="sidelogo" />
   <div className="main-reactangle">
    <div className="main-logo"><img src={mainlogo} alt="Logo" className="mainlogo" /></div>
<div className="inside-rec">
      


<form className="form-container" style={{ marginTop: "60px" }}>

 
  <div class="input-group">
    <span class="icon"><img src={emaillogo} alt="Logo" className="googlelogo" /></span>
    <input type="email" placeholder="Email" />
  </div>

  <div class="input-group">
    <span class="icon"><img src={locklogo} alt="Logo" className="googlelogo" /></span>
    <input type="password" placeholder="Password" />
  </div>
  <div className="remember-forget">
    <div><input type="checkbox" name="r" id=""/> <span>Remember me</span></div>
    
    <div><p>forgot password</p></div>
    </div>
</form>

<div className="signup-button"><p className="signup-name">LOGIN</p></div>
<div className="already-account"><span className="loginacc">Don't have an Account ?</span><span className="loginurl">Create Account</span></div>
    </div>
   
   </div>
    <div className="ellipse3"></div>
   <div className="ellipse2"></div>
   <div className="ellipse1"></div>
   <div className="aboutlink">AboutUs</div>
   <div className="started">lets get started!</div>
  
</div>


);
}
export default Login;