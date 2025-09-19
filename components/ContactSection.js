"use client";

import { useState } from "react";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Contact form submission:", formData);
    alert("Thank you for your message! We'll get back to you soon.");
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: ""
    });
  };

  const contactInfo = [
    {
      icon: "fas fa-map-marker-alt",
      title: "Our Address",
      details: "570 8th Ave, New York, NY 10018, United States"
    },
    {
      icon: "fas fa-phone",
      title: "Phone Number",
      details: "+1 (718) 904-4450"
    },
    {
      icon: "fas fa-envelope",
      title: "Email Address",
      details: "info@foodking.com"
    },
    {
      icon: "fas fa-clock",
      title: "Opening Hours",
      details: "Mon - Fri: 9:30am - 6:30pm"
    }
  ];

  return (
    <section className="contact-section fix section-padding section-bg">
      <div className="container">
        <div className="section-title text-center">
          <span className="wow fadeInUp">get in touch</span>
          <h2 className="wow fadeInUp" data-wow-delay=".3s">
            Contact <span>Us</span>
          </h2>
          <p className="wow fadeInUp" data-wow-delay=".5s">
            Have questions or want to place an order? We'd love to hear from you!
          </p>
        </div>
        
        <div className="row">
          <div className="col-xl-8 col-lg-7">
            <div className="contact-form-wrapper wow fadeInUp" data-wow-delay=".3s">
              <div className="contact-form">
                <h4>Send us a Message</h4>
                <form onSubmit={handleSubmit}>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group">
                        <input
                          type="text"
                          name="name"
                          placeholder="Your Name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <input
                          type="email"
                          name="email"
                          placeholder="Your Email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <input
                          type="tel"
                          name="phone"
                          placeholder="Your Phone"
                          value={formData.phone}
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <input
                          type="text"
                          name="subject"
                          placeholder="Subject"
                          value={formData.subject}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="form-group">
                        <textarea
                          name="message"
                          placeholder="Your Message"
                          rows="5"
                          value={formData.message}
                          onChange={handleChange}
                          required
                        ></textarea>
                      </div>
                    </div>
                    <div className="col-12">
                      <button type="submit" className="theme-btn">
                        <span className="button-content-wrapper d-flex align-items-center">
                          <span className="button-icon">
                            <i className="fas fa-paper-plane" />
                          </span>
                          <span className="button-text">Send Message</span>
                        </span>
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
          
          <div className="col-xl-4 col-lg-5">
            <div className="contact-info-wrapper wow fadeInUp" data-wow-delay=".5s">
              <div className="contact-info">
                <h4>Contact Information</h4>
                <p>
                  We're here to help and answer any question you might have. 
                  We look forward to hearing from you!
                </p>
                
                {contactInfo.map((info, index) => (
                  <div key={index} className="contact-info-item">
                    <div className="info-icon">
                      <i className={info.icon}></i>
                    </div>
                    <div className="info-content">
                      <h6>{info.title}</h6>
                      <p>{info.details}</p>
                    </div>
                  </div>
                ))}
                
                <div className="social-links">
                  <h6>Follow Us</h6>
                  <div className="social-icons">
                    <a href="#" className="social-link">
                      <i className="fab fa-facebook-f"></i>
                    </a>
                    <a href="#" className="social-link">
                      <i className="fab fa-twitter"></i>
                    </a>
                    <a href="#" className="social-link">
                      <i className="fab fa-instagram"></i>
                    </a>
                    <a href="#" className="social-link">
                      <i className="fab fa-youtube"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
