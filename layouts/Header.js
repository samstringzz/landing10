"use client";
import Link from "next/link";

const Header = ({ header }) => {
  return <SimpleHeader />;
};

const SimpleHeader = () => {
  return (
    <header className="header-section">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-12">
            <div className="header-wrapper text-center">
              <div className="logo">
                <Link href="/">
                  <img src="assets/img/logo/logo.svg" alt="FoodKing Logo" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;