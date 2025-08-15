import React, { useState } from "react";
import { MapPin, Phone, Mail, Send, CheckCircle } from "lucide-react";
import emailjs from "emailjs-com";
import "./Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState("");

  const contactInfo = {
    address: "South Africa, Gauteng, Pretoria",
    phone: "+27 68 257 2927",
    email: "thagwanawm88@gmail.com"
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.send(
      "service_nwju9s3",       // from EmailJS dashboard
      "template_xce0ojm",      // from EmailJS dashboard
      formData,
      "Zf62f-tbfvZhH3X2l"        // from EmailJS dashboard
    )
    .then(() => {
      setIsSubmitted(true);
      setError("");
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: ""
      });

      setTimeout(() => setIsSubmitted(false), 4000);
    })
    .catch((err) => {
      console.error("EmailJS Error:", err);
      setError("❌ Failed to send message. Please try again later.");
    });
  };

  return (
    <div className="contact-section">
      <div className="contact-content">
        <h1 className="section-title">CONTACT</h1>
        <div className="title-underline"></div>

        <p className="contact-intro">
          Looking for a motivated junior software developer? I’m eager to bring my skills, creativity
          and dedication to your team.
        </p>

        <div className="contact-layout">
          {/* Contact Info */}
          <div className="contact-info">
            <h2>Get In Touch</h2>

            <div className="contact-item">
              <div className="contact-icon"><MapPin size={20} /></div>
              <div className="contact-details"><h4>Address</h4><p>{contactInfo.address}</p></div>
            </div>

            <div className="contact-item">
              <div className="contact-icon"><Phone size={20} /></div>
              <div className="contact-details"><h4>Phone</h4><p>{contactInfo.phone}</p></div>
            </div>

            <div className="contact-item">
              <div className="contact-icon"><Mail size={20} /></div>
              <div className="contact-details"><h4>Email</h4><p>{contactInfo.email}</p></div>
            </div>

            <div className="availability">
              <h3>Availability</h3>
              <p>Currently seeking internship or junior software developer opportunities...</p>
              <div className="status-indicator">
                <div className="status-dot available"></div>
                <span>Available to work</span>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="contact-form-section">
            {!isSubmitted ? (
              <form className="contact-form" onSubmit={handleSubmit}>
                <h2>Send Message</h2>

                {error && <p className="error-message">{error}</p>}

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name">Your Name *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="email">Your Email *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="subject">Subject *</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="message">Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    rows="6"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                  ></textarea>
                </div>

                <button type="submit" className="submit-btn">
                  <Send size={16} /> Send Message
                </button>
              </form>
            ) : (
              <div className="success-message">
                <CheckCircle size={48} />
                <h2>Message Sent Successfully!</h2>
                <p>Thank you for reaching out. I'll get back to you within 24 hours.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
