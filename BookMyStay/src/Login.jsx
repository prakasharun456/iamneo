import React from 'react'
import { useState } from 'react'

export const Login = (props)=> {
    const[mail,setMail]=useState('')
    const[pass,setPass]=useState('')
    
    const handleSubmit=(e)=>{
        e.preventDefault();
        console.log(mail)
    }
  return (
    <div>
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
            <label name="mail" form='mail'>Email</label>
            <input type='email' id='mail' onChangevalue={(e)=>setMail(e.target.value)} value={mail} placeholder='Email Id' required/><br/>
            <label name="password" form='pwd'>Password</label>
            <input type='password' id='pwd' onChangevalue={(e)=>setPass(e.target.value)} value={pass} placeholder='password' required/>
            <button className='log-btn'>Login</button>
        </form>
            <p>Don't have an account.</p><button className='reg-btn'  onClick={() => props.onFormSwitch('register')}>Register</button>

    </div>
  ) 
}