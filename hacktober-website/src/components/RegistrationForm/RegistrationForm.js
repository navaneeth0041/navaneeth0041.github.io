import React, { useState } from 'react';
import './RegistrationForm.css'; 
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    rollNumber: '',
    email: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const sheetBestEndpoint = 'https://api.sheetbest.com/sheets/afbe7454-7092-4512-8fbc-e7767a248f55';

  const [submittedEmails, setSubmittedEmails] = useState([]);
  const [submittedrollNums,setSubmittedrollNums] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    const { fullName, rollNumber, email } = formData;
    if (!fullName || !rollNumber || !email) {
      toast.error('Please fill out all fields.');
      return false;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const rollNumberRegex = /^am\.[a-z]{2}\.[a-z0-9]{10}$/i;
    if (!emailRegex.test(email)) {
      toast.error('Please enter a valid email address.');
      return false;
    }
    if (!rollNumberRegex.test(rollNumber)) {
      toast.error('Please enter a valid roll number.');
      return false;
    }


    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    const emailLower = formData.email.toLowerCase();
    const rollLower = formData.rollNumber.toLowerCase();


    if (submittedEmails.includes(emailLower)) {
      toast.error('This email has already been submitted in this session.');
      setFormData({
        fullName: '',
        rollNumber: '',
        email: '',
      });
      return;
    }
    if (submittedEmails.includes(rollLower)) {
      toast.error('This roll number has already been submitted in this session.');
      setFormData({
        fullName: '',
        rollNumber: '',
        email: '',
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const getResponse = await fetch(sheetBestEndpoint, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!getResponse.ok) {
        throw new Error('Failed to fetch existing registrations.');
      }

      const existingData = await getResponse.json();

      const registrationLimit = 175; 
      if (existingData.length >= registrationLimit) {
        toast.error('Registration limit reached. No more seats available.');
        setFormData({
          fullName: '',
          rollNumber: '',
          email: '',
        });
        setIsSubmitting(false);
        return;
      }

      const emailExists = existingData.some(
        (entry) => entry['Email Address'] && entry['Email Address'].toLowerCase() === emailLower
      );

      const rollNoExists = existingData.some(
        (entry) => entry['Roll Number'] && entry['Roll Number'].toLowerCase() === rollLower
      );

      if (emailExists) {
        toast.error('This email is already registered.');
        setFormData({
          fullName: '',
          rollNumber: '',
          email: '',
        });
        setIsSubmitting(false);
        return;
      }
      if (rollNoExists) {
        toast.error('This roll number is already registered.');
        setFormData({
          fullName: '',
          rollNumber: '',
          email: '',
        });
        setIsSubmitting(false);
        return;
      }

      const postResponse = await fetch(sheetBestEndpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          'Full Name': formData.fullName,
          'Roll Number': formData.rollNumber,
          'Email Address': formData.email,
          'Timestamp': new Date().toISOString(),
        }),
      });

      if (postResponse.ok) {
        toast.success('Registration successful!');
        setFormData({
          fullName: '',
          rollNumber: '',
          email: '',
        });
        setSubmittedEmails([...submittedEmails, emailLower]);
        setSubmittedrollNums([...submittedrollNums,rollLower]);
      } else {
        const errorData = await postResponse.json();
        toast.error(`Error: ${errorData.error || 'Something went wrong.'}`);
      }
    } catch (error) {
      console.error('Submission error:', error);
      toast.error('An error occurred during submission.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div id="registration" className="form-container">
      <ToastContainer />
      <h2 className="form-title">Register Now!</h2>
      <p className="form-description">
        Sign up for free by filling out the form below, and hurry—seats are limited! 
        Don’t forget to bring your friends along too!
      </p>
      <p className="note">*Note: Only for Amritapuri campus students.</p>
      <form className="registration-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="fullName"
          placeholder="Full Name"
          className="form-input"
          value={formData.fullName}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="rollNumber"
          placeholder="Roll Number"
          className="form-input"
          value={formData.rollNumber}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email Address"
          className="form-input"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <button type="submit" className="submit-button" disabled={isSubmitting}>
          {isSubmitting ? 'Submitting...' : 'Register'}
        </button>
      </form>
    </div>
  );
};

export default RegistrationForm;
