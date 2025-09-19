import Link from "next/link";

const Footer = ({ footer }) => {
  return <SimpleFooter />;
};

const SimpleFooter = () => {
  return (
    <footer className="footer-section fix section-bg">
      <div className="container">
        <div className="footer-widgets-wrapper">
          <div className="row justify-content-center">
            <div className="col-xl-6 col-lg-8 text-center">
              <div className="single-footer-widget">
                <div className="widget-head">
                  <Link href="/">
                    <img src="assets/img/logo/logo.svg" alt="FoodKing Logo" />
                  </Link>
                </div>
                <div className="footer-content">
                  <p>
                    We believe it has the power to do amazing things.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container">
          <div className="footer-bottom-wrapper text-center">
            <p className="wow fadeInUp" data-wow-delay=".3s">
              © Copyright <span className="theme-color-3">2024</span>{" "}
              <Link href="/">FoodKing </Link>. All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;