import React from "react";
import '@/styles/contact.css'; 

const Contact: React.FC = () => {
  return (
    <section className="contact-section">
      <div className="container">
        <h1 className="heading">
          Contact{" "}
          <span className="highlight">Me</span>
        </h1>
        <form className="contact-form">
          <div className="form-grid">
            {/* Left Side */}
            <div className="left-side">
              {/* Full Name */}
              <div className="input-group">
                <label htmlFor="fullName">Full Name</label>
                <input
                  type="text"
                  id="fullName"
                  placeholder="Full Name"
                />
              </div>

              {/* Email */}
              <div className="input-group">
                <label htmlFor="email">Email</label>
                <input
                  type="text"
                  id="email"
                  placeholder="Email"
                />
              </div>

              {/* Phone Number */}
              <div className="input-group">
                <label htmlFor="phone">Phone Number</label>
                <input
                  type="text"
                  id="phone"
                  placeholder="Phone Number"
                />
              </div>

              {/* Subject */}
              <div className="input-group">
                <label htmlFor="subject">Subject</label>
                <input
                  type="text"
                  id="subject"
                  placeholder="Subject"
                />
              </div>
            </div>

            {/* Right Side */}
            <div className="right-side" >
              {/* Message */}
              <div className="input-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  placeholder="Message" 
                />
              </div>
              <button type="submit" className="submit-button">      
                        <a href="mailto:farheen11099@gmail.com">
              Send Message</a></button>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
