import React from 'react';
import './RegistrationForm.css'; 
const RegistrationForm = () => {
  return (
    <div className="form-container">
      <h2 className="form-title">Register Now!</h2>
      <p className="form-description">
        Sign up for free by filling out the form below, and hurry—seats are limited! 
        Don’t forget to bring your friends along too!
      </p>
      <p className="note">*Note: Only for Amritapuri campus students.</p>
      <form className="registration-form">
        <input type="text" placeholder="Full Name" className="form-input" required />
        <input type="text" placeholder="Roll Number" className="form-input" required />
        <input type="email" placeholder="Email Address" className="form-input" required />
        
      </form>
      <button type="submit" className="submit-button">Register Now</button>
      
    </div>
  );
};

export default RegistrationForm;
