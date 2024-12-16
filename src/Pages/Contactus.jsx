import React, { useState } from 'react';
import '../Styles/Contactus.css';

export const Contactus = () => {
const [error,seterror]=useState('')
const [formdata,setformdata]=useState({name:"",email:"",message:""})


const handleinput=(e)=>{
setformdata({...formdata,[e.target.name]:e.target.value})
}
  const submitbutton=(e)=>{
  e.preventDefault();
  if(formdata.name===""||formdata.email==="" ||formdata.message===""){
    seterror("Please fill out all fields")
  }else{
    seterror("")
    alert("Your data has been submited")
    setformdata({name:"",email:"",message:""})
  }
  
  }
  return (
    <div class="contact-wrapper">
    <div className="contact-container">
     
      <div className="contact-form">
        <h2>Send Us a Message</h2>
        {error && <p className="error-message">{error}</p>}
        <form action="#" method="POST">
          <div className="form-group">
            <label htmlFor="name">Full Name</label>
            <input type="text" id="name" name="name" placeholder="Your full name" value={formdata.name}  onChange={handleinput}  required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input type="email" id="email" name="email" placeholder="Your email" value={formdata.email} onChange={handleinput}  required />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" rows="5" placeholder="Your message" value={formdata.message}  onChange={handleinput} required></textarea>
          </div>
          <button type="submit" className="submit-btn" onClick={submitbutton}>Submit</button>
        </form>
      </div>
    </div>
    </div>
  );
};
