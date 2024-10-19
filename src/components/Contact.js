import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import contactImg from '../assets/img/contact-img.svg';
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios'; 
export const Contact = () => {
  const formInitialDetails = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  };

  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [buttonText, setButtonText] = useState('Send');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onFormUpdate = (category, value) => {
    setFormDetails({
      ...formDetails,
      [category]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true); 
    setButtonText('Sending...');

    const phoneRegex = /^\d{10}$/;
    if (!phoneRegex.test(formDetails.phone)) {
      toast.error('Invalid phone number. It must be a 10-digit number.', {
        position: "top-center"
      });
      setIsSubmitting(false);
      setButtonText('Send');
      return;
    }

    try {
      const response = await axios.post('https://pxkbackend1d.onrender.com/contact', formDetails, {
        headers: {
          'Content-Type': 'application/json;charset=utf-8'
        }
      });
  
      // Axios automatically parses the JSON response, no need to manually parse it
     
  
      if (response.status === 200) {
        toast.success('Message sent successfully', {
          position: "top-center",
          style: { maxWidth: "300px" }
        });
      } else {
        toast.error('Something went wrong, please try again later.', {
          position: "top-center"
        });
      }
    } catch (error) {
      console.error('Error:', error);
      toast.error('Something went wrong, please try again later. in catch', {
        position: "top-center"
      });
    } finally {
      setButtonText('Send');
      setIsSubmitting(false); // Enable the button
      setFormDetails(formInitialDetails); // Reset the form
    }
  };

  return (
    <section className='contact' id='connect'>
      <Container>
        <Row className='align-items-center'>
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) => (
                <img
                  className={isVisible ? 'animate__animated animate__zoomIn' : ''}
                  src={contactImg}
                  alt='Contact Us'
                />
              )}
            </TrackVisibility>
          </Col>
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div className={isVisible ? 'animate__animated animate__fadeIn' : ''}>
                  <h2>Get In Touch</h2>
                  <form onSubmit={handleSubmit}>
                    <Row>
                      <Col size={12} sm={6} className='px-1'>
                        <input
                          type='text'
                          value={formDetails.firstName}
                          placeholder='First Name'
                          onChange={(e) => onFormUpdate('firstName', e.target.value)}
                          required
                        />
                      </Col>
                      <Col size={12} sm={6} className='px-1'>
                        <input
                          type='text'
                          value={formDetails.lastName}
                          placeholder='Last Name'
                          onChange={(e) => onFormUpdate('lastName', e.target.value)}
                          required
                        />
                      </Col>
                      <Col size={12} sm={6} className='px-1'>
                        <input
                          type='email'
                          value={formDetails.email}
                          placeholder='Email Address'
                          onChange={(e) => onFormUpdate('email', e.target.value)}
                          required
                        />
                      </Col>
                      <Col size={12} sm={6} className='px-1'>
                        <input
                          type='tel'
                          value={formDetails.phone}
                          placeholder='Phone No.'
                          maxLength="10"
                          onChange={(e) => onFormUpdate('phone', e.target.value)}
                          required
                        />
                      </Col>
                      <Col size={12} className='px-1'>
                        <textarea
                          rows='6'
                          value={formDetails.message}
                          placeholder='Message'
                          onChange={(e) => onFormUpdate('message', e.target.value)}
                          required
                        ></textarea>
                        <button type='submit' disabled={isSubmitting}>
                          <span>{buttonText}</span>
                        </button>
                      </Col>
                    </Row>
                  </form>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
        <ToastContainer />
      </Container>
    </section>
  );
};
