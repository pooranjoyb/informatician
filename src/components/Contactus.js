import React from 'react';
import { FaDiscord, FaTwitter, FaGithub } from 'react-icons/fa';
import contactImage from '../assets/contact-us.png';
import './Contactus.css';

const Contact = () => {
  return (
    <div className="contact">
      <div className="container">
        <div className="contact-content">
          <div className="contact-text">
            <h2 className="contact-title">Contact Us</h2>
            <p className="contact-description">
              We'd love to hear from you! Reach out to us for any inquiries,
              feedback, or collaboration opportunities.
            </p>
            <form className="contact-form">
              <div
                style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}
              >
                <label style={{ display: 'flex' }}>Full Name</label>
                <input
                  type="text"
                  placeholder="Name"
                  className="form-input"
                  required
                />
              </div>
              <div
                style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}
              >
                <label style={{ display: 'flex' }}>Email</label>
                <input
                  type="email"
                  placeholder="Email"
                  className="form-input"
                  required
                />
              </div>
              <div
                style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}
              >
                <label style={{ display: 'flex' }}>Message</label>
                <textarea
                  placeholder="Message"
                  className="form-input message-input"
                  required
                />
              </div>
              <button type="submit" className="submit-btn">
                Submit
              </button>
            </form>
          </div>
          <div className="contact-image">
            <img src={contactImage} alt="Contact" className="contact-image" />
          </div>
        </div>
        <div className="contact-social-icons">
          <h1 style={{marginTop: 20, marginBottom: 20, fontSize: 30}}>Connect with us:</h1>
          <div className="social-icons">
            <a href="#!" className="social-icon-twitter">
              <FaTwitter />
            </a>
            <a href="#!" className="social-icon-github">
              <FaGithub />
            </a>

            <a href="#!" className="social-icon-discord">
              <FaDiscord />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
