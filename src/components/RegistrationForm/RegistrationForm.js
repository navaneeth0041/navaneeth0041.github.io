import React, { useState, useEffect } from 'react';
import './RegistrationForm.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    rollNumber: '',
    email: '',
    gender: '', 
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [limitReached, setLimitReached] = useState(false);
  const registrationLimit = 299;

  const sheetBestEndpoint = 'https://api.sheetbest.com/sheets/d77801e8-e78d-423d-85df-04e05caac0a8';

  const [submittedEmails, setSubmittedEmails] = useState([]);
  const [submittedRollNums, setSubmittedRollNums] = useState([]);

  useEffect(() => {
    const checkLimit = async () => {
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
        if (existingData.length >= registrationLimit) {
          setLimitReached(true);
          toast.error('Registration limit reached. No more seats available.', { toastId: 'limit-toast' });
        }
      } catch (error) {
        console.error('Error fetching registration limit:', error);
        toast.error('An error occurred while checking the registration limit.', { toastId: 'error-toast' });
      }
    };

    checkLimit();
  }, [registrationLimit]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    const { fullName, rollNumber, email, gender } = formData;
    if (!fullName || !rollNumber || !email || !gender) { 
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
        gender: '',
      });
      return;
    }
    if (submittedRollNums.includes(rollLower)) { 
      toast.error('This roll number has already been submitted in this session.');
      setFormData({
        fullName: '',
        rollNumber: '',
        email: '',
        gender: '',
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
      if (existingData.length >= registrationLimit) {
        toast.error('Registration limit reached. No more seats available.', { toastId: 'limit-toast' });
        setFormData({
          fullName: '',
          rollNumber: '',
          email: '',
          gender: '',
        });
        setIsSubmitting(false);
        setLimitReached(true);
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
          gender: '',
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
          gender: '',
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
          'Gender': formData.gender,
          'Timestamp': new Date().toISOString(),
        }),
      });

      if (postResponse.ok) {
        toast.success('Registration successful!');
        setFormData({
          fullName: '',
          rollNumber: '',
          email: '',
          gender: '',
        });
        setSubmittedEmails([...submittedEmails, emailLower]);
        setSubmittedRollNums([...submittedRollNums, rollLower]); 
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
    <div id="registration" className="form-container section">
      <ToastContainer />
      <h2 className="form-title">Register Now!</h2>
      <p className="form-description">
        Sign up for free by filling out the form below, and hurry—seats are limited!
        Don’t forget to bring your friends along too!
      </p>
      <p className="note">
  <span className="info-icon">i</span> Exclusively for freshers.
</p>

      <form className="registration-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="fullName"
          placeholder="Full Name"
          className="form-input"
          value={formData.fullName}
          onChange={handleChange}
          required
          disabled={limitReached}
        />
        
        <div className="form-row">
          <input
            type="text"
            name="rollNumber"
            placeholder="Roll Number"
            className="form-input half-width"
            value={formData.rollNumber}
            onChange={handleChange}
            required
            disabled={limitReached}
          />
          
          <div className="gender-field half-width">
            <select
              name="gender"
              id="gender"
              className="gender-select"
              value={formData.gender}
              onChange={handleChange}
              required
              disabled={limitReached}
            >
              <option value="" disabled>Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
          </div>
        </div>

        <input
          type="email"
          name="email"
          placeholder="Personal Email Address"
          className="form-input"
          value={formData.email}
          onChange={handleChange}
          required
          disabled={limitReached}
        />
        <button type="submit" className="submit-button" disabled={isSubmitting || limitReached}>
          {isSubmitting ? 'Submitting...' : 'Register'}
        </button>

        {limitReached && (
          <p className="limit-reached">Registration limit has been reached. No more seats available.</p>
        )}
      </form>
    </div>
  );
};

export default RegistrationForm;
