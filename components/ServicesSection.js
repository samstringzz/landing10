"use client";

import Link from "next/link";

const ServicesSection = () => {
  const services = [
    {
      icon: "fas fa-camera",
      title: "Photography",
      price: "₦150 /SESSION",
      description: "Professional photography services for personal branding and business needs.",
      features: ["Professional quality", "Personal branding", "Business photography"]
    },
    {
      icon: "fas fa-lightbulb",
      title: "Brand Strategy",
      price: "₦400 /PROJECT",
      description: "Comprehensive brand development and strategic planning for entrepreneurs.",
      features: ["Brand development", "Strategic planning", "Entrepreneur focus"]
    },
    {
      icon: "fas fa-share-alt",
      title: "Social Media Marketing",
      price: "₦250 /MONTH",
      description: "Expert social media management and content strategy for maximum engagement.",
      features: ["Social media management", "Content strategy", "Maximum engagement"]
    }
  ];

  return (
    <section className="services-section fix section-padding section-bg">
      <div className="container">
        <div className="section-title text-center">
          <span className="wow fadeInUp">what we offer</span>
          <h2 className="wow fadeInUp" data-wow-delay=".3s">
            Services <span>We Offer</span>
          </h2>
          <p className="wow fadeInUp" data-wow-delay=".5s">
            Professional services to help you build and grow your business
          </p>
        </div>
        <div className="row">
          {services.map((service, index) => (
            <div 
              key={index}
              className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp" 
              data-wow-delay={`${0.3 + (index * 0.2)}s`}
            >
              <div className="single-service-card">
                <div className="service-icon">
                  <i className={service.icon}></i>
                </div>
                <div className="service-content">
                  <div className="service-price">
                    <span className="price">{service.price}</span>
                  </div>
                  <h4>{service.title}</h4>
                  <p>{service.description}</p>
                  <ul className="service-features">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex}>
                        <i className="fas fa-check"></i>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link href="/services" className="theme-btn-2">
                    Learn More 
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="services-cta text-center wow fadeInUp" data-wow-delay=".8s">
          <Link href="/contact" className="theme-btn">
            <span className="button-content-wrapper d-flex align-items-center">
              <span className="button-icon">
                <i className="flaticon-phone-call-2" />
              </span>
              <span className="button-text">Get Started Today</span>
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
