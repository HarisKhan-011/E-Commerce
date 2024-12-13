import React from 'react';
import '../Styles/Contactus.css';

export const Contactus = () => {

  const submitbutton=(e)=>{
    if (e.name ===''){
alert("Fill the foam")
    }
    alert("Your data has benn sumbit")
  }
  return (
    <div class="contact-wrapper">
    <div className="contact-container">
     
      <div className="contact-form">
        <h2>Send Us a Message</h2>
        <form action="#" method="POST">
          <div className="form-group">
            <label htmlFor="name">Full Name</label>
            <input type="text" id="name" name="name" placeholder="Your full name" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input type="email" id="email" name="email" placeholder="Your email" required />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" rows="5" placeholder="Your message" required></textarea>
          </div>
          <button type="submit" className="submit-btn" onClick={submitbutton}>Submit</button>
        </form>
      </div>
    </div>
    </div>
  );
};
