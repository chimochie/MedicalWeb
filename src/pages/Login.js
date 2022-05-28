import React from 'react'
import email from "../assets/pass.png";
import pass from "../assets/email.jpg";
import logo from "../assets/Logo.png"
function Login(){
  return (
    <div className="main">
    <div className="sub-main"  >
      
        <div className='test'>
          <img src={logo} style={{width:"30%"}}/>
          <h1 style={{color:"#ffffff"}}>Login</h1>
          <div>
          <img src={pass} alt="pass" className="email"/>
            
            <input type="text" placeholder="Username" className="name"/>
          </div>
          <div className="second-input">
          <img src={email} alt="email" className="email"/>
            <input type="password" placeholder="Password" className="name"/>
          </div>
         <div className="login-button">
         <button>Login</button>
         </div>
          
           <p className="link">
             <a href="#">Forgot password?</a><a href="#"style={{color:"#b71c1c"}}> Register</a>
           </p>
          

        </div>
      </div>
      

    </div>
   
  )
}
export default Login;