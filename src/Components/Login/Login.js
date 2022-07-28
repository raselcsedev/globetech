import React, { useState } from 'react';
import './Login.css'
import { AiFillCaretLeft} from 'react-icons/ai';
import {AiFillEye} from 'react-icons/ai';
import {  Link } from "react-router-dom";




const Login = () => {
  const [pass,setPass]=useState(false);
  const changes=()=>{
            setPass(pass=>!pass)
  }
  console.log(pass);
    return (
        <div className='login'>
           <div className='login-grid'>
            <div className="side-ber">
              <h1>GlobeTech <br />Company Limited</h1>
              <p>Make yourself digitalized & more Efficient</p>
              <button>
                <Link to='/'>
                <AiFillCaretLeft size='3rem' color='white'></AiFillCaretLeft>
                </Link>
              
                </button>
            </div>
            <div className='login-form'>
               <form>
                <h2>Welcome</h2>
                <p>Sign in to your account </p>
                <input placeholder='Email' type="email" required/>
                <br/>
                <div className='password'>
                  {pass? <input placeholder='Password' type='text' required/>: <input placeholder='password'type='password' required/>}
                <span onClick={changes}>
                  <AiFillEye color="black" size='2rem'></AiFillEye>
                </span>
                </div>
                <br />
                <span  className='button' readonly>Login</span>
               </form>
            </div>
           </div>
            
        </div>
    );
};

export default Login;