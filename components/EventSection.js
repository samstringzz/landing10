"use client";

import Link from "next/link";

const EventSection = () => {
  return (
    <section className="event-section fix section-padding section-bg">
      <div className="container">
        <div className="section-title text-center">
          <span className="wow fadeInUp">upcoming events</span>
          <h2 className="wow fadeInUp" data-wow-delay=".3s">
            Upcoming <span>Events</span>
          </h2>
        </div>
        <div className="row">
          <div className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".3s">
            <div className="single-event-card">
              <div className="event-image">
                <img src="assets/img/gallery/01.jpg" alt="event-img" />
                <div className="event-date">
                  <span className="day">15</span>
                  <span className="month">Dec</span>
                </div>
              </div>
              <div className="event-content">
                <div className="event-meta">
                  <span className="location">
                    <i className="fas fa-map-marker-alt"></i>
                    Kano, Nigeria
                  </span>
                  <span className="time">
                    <i className="fas fa-clock"></i>
                    4:00 PM
                  </span>
                </div>
                <h4>
                  <Link href="/event-details">Ashraf & Sultana</Link>
                </h4>
                <p>
                  Wedding photography event. No description available.
                </p>
                <Link href="/event-details" className="theme-btn-2">
                  Learn More
                </Link>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".5s">
            <div className="single-event-card">
              <div className="event-image">
                <img src="assets/img/gallery/02.jpg" alt="event-img" />
                <div className="event-date">
                  <span className="day">22</span>
                  <span className="month">Dec</span>
                </div>
              </div>
              <div className="event-content">
                <div className="event-meta">
                  <span className="location">
                    <i className="fas fa-map-marker-alt"></i>
                    Lagos, Nigeria
                  </span>
                  <span className="time">
                    <i className="fas fa-clock"></i>
                    2:00 PM
                  </span>
                </div>
                <h4>
                  <Link href="/event-details">Aisha & Mohammed</Link>
                </h4>
                <p>
                  Wedding photography event. No description available.
                </p>
                <Link href="/event-details" className="theme-btn-2">
                  Learn More
                </Link>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".7s">
            <div className="single-event-card">
              <div className="event-image">
                <img src="assets/img/gallery/02.jpg" alt="event-img" />
                <div className="event-date">
                  <span className="day">28</span>
                  <span className="month">Dec</span>
                </div>
              </div>
              <div className="event-content">
                <div className="event-meta">
                  <span className="location">
                    <i className="fas fa-map-marker-alt"></i>
                    Abuja, Nigeria
                  </span>
                  <span className="time">
                    <i className="fas fa-clock"></i>
                    6:00 PM
                  </span>
                </div>
                <h4>
                  <Link href="/event-details">Fatima & Ibrahim</Link>
                </h4>
                <p>
                  Wedding photography event. No description available.
                </p>
                <Link href="/event-details" className="theme-btn-2">
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventSection;
