import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import styled from 'styled-components';

const Alert = styled.div.withConfig({
  shouldForwardProp: (prop) => prop !== 'show'
})`
  display: ${(props) => (props.show ? 'block' : 'none')};
  border: 0;
  border-radius: 8px;
  background: var(--green);
  font-size: 13px;
  line-height: 18px;
  padding: 10px;
  position: fixed;
  top: 10%;
  right: 20px;
  width: 250px;
  animation: .5s slide-in linear;
  @keyframes slide-in {
    from { right: -100%; opacity: 0; }
    to { right: 0; opacity: 1; }
  }
`;

export const ContactForm = () => {
  const form = useRef();
  const [successMsg, setSuccessMsg] = useState('');
  const [showAlert, setShowAlert] = useState(false);

  const submitForm = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_ons00yl',
      'template_d7mb0ye',
      form.current,
      'ADgMHBgjGsdPKvNLB'
    )
    .then(
      () => {
        setSuccessMsg('Thank you for your valuable time! You have submitted the form successfully!');
        setShowAlert(true);
        setTimeout(() => setShowAlert(false), 6000);
      },
      (error) => {
        console.error('EmailJS Error:', error); // <-- log full error object
        alert(`Failed to submit your information! Error: ${error.text || error}`);
      }
    );
  };

  return (
    <>
      <form ref={form} onSubmit={submitForm}>
        <Alert show={showAlert}>{successMsg}</Alert>
        <div className="mb-3">
          <label htmlFor="fullname" className="block form-label">Name</label>
          <input type="text" name="user_name" id="fullname" className="w-full form-input text-gray-800 p-4" placeholder="Your name" required />
        </div>  
        <div className="mb-3">
          <label htmlFor="email" className="block form-label">Email</label>
          <input type="email" name="user_email" id="email" className="w-full form-input text-gray-800 p-4" placeholder="Your email" required />
        </div>
        <div className="mb-4">
          <label htmlFor="message" className="block form-label">Message</label>
          <textarea name="message" id="message" className="w-full form-input text-gray-800 p-4" placeholder="Your message" rows="3" required></textarea>
        </div>
        <div>
          <input className="w-full btn btn-primary" type="submit" value="Send" />
        </div>      
      </form>
    </>
  );
};

export default ContactForm;