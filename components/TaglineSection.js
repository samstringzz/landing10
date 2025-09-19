"use client";

const TaglineSection = () => {
  return (
    <section className="tagline-section fix section-padding bg-cover" 
             style={{ backgroundImage: 'url("assets/img/banner/main-bg.jpg")' }}>
      <div className="container">
        <div className="tagline-wrapper text-center">
          <div className="row justify-content-center">
            <div className="col-xl-8 col-lg-10">
              <div className="tagline-content">
                <h2 className="wow fadeInUp" data-wow-delay=".3s">
                  <span className="theme-color-3">Empowering entrepreneurs to build brands they love</span>
                </h2>
                <p className="wow fadeInUp" data-wow-delay=".5s">
                  Content Hub - Your one-stop destination for all your business needs.
                </p>
                <div className="tagline-social wow fadeInUp" data-wow-delay=".7s">
                  <div className="social-icons">
                    <a href="#" className="social-link instagram">
                      <i className="fab fa-instagram"></i>
                    </a>
                    <a href="#" className="social-link youtube">
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

export default TaglineSection;
