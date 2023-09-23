import React, { useState } from 'react'

export const Register=(props)=> {
    const[mail,setMail]=useState('')
    const[name,setName]=useState('')
    const[pass,setPass]=useState('')

    const handleSubmit= (e)=>{
        e.preventDefault();
        console.log(mail)
    }


  return (
    <div>
        <form onSubmit={handleSubmit}>
            <label name="mail" form='mail'>Email</label>
            <input type='email' id='mail' onChangevalue={(e)=>setMail(e.target.value)} value={mail} placeholder='Email Id' required/><br/>
            <label name="name" form='name'>Name</label>
            <input type='text' id='name'  onChangevalue={(e)=>setName(e.target.value)} value={name} required placeholder='Type your name'></input>
            <label name="password" form='pwd'>Password</label>
            <input type='password' id='pwd' onChangevalue={(e)=>setPass(e.target.value)} value={pass} placeholder='password' required/>
            <button className='reg-btn'>Register</button>
        </form>
            <p>Already have an account.</p><button className='log-btn'  onClick={() => props.onFormSwitch('login')}>Login</button>
    </div>
  )
}