"use client";

import { useState } from "react";

const NewsletterSection = () => {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle newsletter subscription logic here
    console.log("Newsletter subscription:", email);
    setIsSubscribed(true);
    setEmail("");
    
    // Reset success message after 3 seconds
    setTimeout(() => {
      setIsSubscribed(false);
    }, 3000);
  };

  return (
    <section className="newsletter-section fix section-padding bg-cover" 
             style={{ backgroundImage: 'url("assets/img/bg-image/bg.jpg")' }}>
      <div className="newsletter-overlay"></div>
      <div className="container">
        <div className="newsletter-wrapper text-center">
          <div className="row justify-content-center">
            <div className="col-xl-8 col-lg-10">
              <div className="newsletter-content">
                <div className="newsletter-icon wow fadeInUp" data-wow-delay=".3s">
                  <i className="fas fa-envelope"></i>
                </div>
                <h2 className="wow fadeInUp" data-wow-delay=".5s">
                  Subscribe to Our <span className="theme-color-3">Newsletter</span>
                </h2>
                <p className="wow fadeInUp" data-wow-delay=".7s">
                  Stay updated with our latest offers, new menu items, and special events. 
                  Get exclusive discounts delivered straight to your inbox!
                </p>
                
                {!isSubscribed ? (
                  <form onSubmit={handleSubmit} className="newsletter-form wow fadeInUp" data-wow-delay=".9s">
                    <div className="form-group">
                      <input
                        type="email"
                        placeholder="Enter your email address"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                      />
                      <button type="submit" className="theme-btn">
                        <span className="button-content-wrapper d-flex align-items-center">
                          <span className="button-icon">
                            <i className="fas fa-paper-plane" />
                          </span>
                          <span className="button-text">Subscribe</span>
                        </span>
                      </button>
                    </div>
                  </form>
                ) : (
                  <div className="newsletter-success wow fadeInUp" data-wow-delay=".3s">
                    <div className="success-icon">
                      <i className="fas fa-check-circle"></i>
                    </div>
                    <h4>Thank you for subscribing!</h4>
                    <p>You'll receive our latest updates soon.</p>
                  </div>
                )}
                
                <div className="newsletter-benefits wow fadeInUp" data-wow-delay="1.1s">
                  <div className="row">
                    <div className="col-md-4">
                      <div className="benefit-item">
                        <i className="fas fa-gift"></i>
                        <span>Exclusive Offers</span>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="benefit-item">
                        <i className="fas fa-utensils"></i>
                        <span>New Menu Updates</span>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="benefit-item">
                        <i className="fas fa-calendar-alt"></i>
                        <span>Event Notifications</span>
                      </div>
                    </div>
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

export default NewsletterSection;
