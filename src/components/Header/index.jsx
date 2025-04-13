import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import DropDown from "./DropDown";

export default function Header({ logoSrc, variant }) {
  const [isSticky, setIsSticky] = useState(false);
  const [mobileToggle, setMobileToggle] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleLinkClick = () => {
    setMobileToggle(false);
  };

  return (
    <header
      className={`cs_site_header cs_style1 ${
        isSticky ? "cs_sticky_active" : ""
      } ${mobileToggle ? "cs_mobile_toggle_active" : ""} ${variant}`}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        background: "white",
        color: "black",
        boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
        zIndex: 1000,
        height: '100px'
      }}
    >
      <div className="cs_main_header">
        <div className="container">
          <div className="cs_main_header_in">
            {/* Logo Section */}
            <div className="cs_main_header_left">
              <Link
                className="cs_site_branding"
                to="/"
                onClick={handleLinkClick}
              >
                <img src={logoSrc} alt="Logo" style={{ width: "150px" }} />
              </Link>
            </div>

            {/* Navigation Section */}
            <div className="cs_main_header_center">
              <nav className="cs_nav">
                <ul
                  className={`cs_nav_list ${
                    mobileToggle ? "cs_active" : ""
                  }`}
                >
                  <li className="menu-item-has-children">
                    <Link to="/" onClick={handleLinkClick}>
                      Solutions
                    </Link>
                    <DropDown>
                      <ul>
                        <span className="d-block ms-3 text-decoration-underline fw-bold">
                          Billing Solutions
                        </span>
                        <li>
                          <Link to="/medical-billing" onClick={handleLinkClick}>
                            Medical Billing Services
                          </Link>
                        </li>
                        <li>
                          <Link to="/medical-coding-services" onClick={handleLinkClick}>
                            Medical Coding Services
                          </Link>
                        </li>
                        <li>
                          <Link to="/rcm-services" onClick={handleLinkClick}>
                            RCM Services
                          </Link>
                        </li>
                        <li>
                          <Link to="/provider-credentialing" onClick={handleLinkClick}>
                            Provider Credentialing & Enrollment
                          </Link>
                        </li>
                        <span className="d-block ms-3 text-decoration-underline fw-bold">
                          Clinical Services
                        </span>
                        <li>
                          <Link to="/care-management-service" onClick={handleLinkClick}>
                            Care Management
                          </Link>
                        </li>
                        <li>
                          <Link to="/clinical-pharmacist-services" onClick={handleLinkClick}>
                            Clinical Pharmacist Services
                          </Link>
                        </li>
                        <li>
                          <Link to="/medical-scribing-services" onClick={handleLinkClick}>
                            Medical Scribing Services
                          </Link>
                        </li>
                        <li>
                          <Link to="/medical-record-keeping" onClick={handleLinkClick}>
                            Medical Record Keeping & Documentation
                          </Link>
                        </li>
                        <li>
                          <Link to="/telemedicine" onClick={handleLinkClick}>
                            Telemedicine & Virtual Care Services
                          </Link>
                        </li>
                        <li>
                          <Link to="/clinical-data-analysis-and-reporting" onClick={handleLinkClick}>
                            Clinical Data Analysis & Reporting
                          </Link>
                        </li>
                        <li>
                          <Link to="/services" onClick={handleLinkClick}>
                            Services
                          </Link>
                        </li>
                        <li>
                          <Link to="/specialties" onClick={handleLinkClick}>
                            Specialties
                          </Link>
                        </li>
                        <li>
                          <Link to="/digital-health-marketing" onClick={handleLinkClick}>
                            <span className="d-block text-decoration-underline fw-bold">
                              Healthcare Digital Marketing
                            </span>
                          </Link>
                        </li>
                        <li>
                          <Link to="/business-growth" onClick={handleLinkClick}>
                            <span className="d-block text-decoration-underline fw-bold">
                              Business Growth Services
                            </span>
                          </Link>
                        </li>
                        <li>
                          <Link to="/healthcare-outsourcing-solutions" onClick={handleLinkClick}>
                            <span className="d-block text-decoration-underline fw-bold">
                              Healthcare Outsourcing Solutions
                            </span>
                          </Link>
                        </li>
                        <li>
                          <Link to="/training-bootcamps" onClick={handleLinkClick}>
                            <span className="d-block text-decoration-underline fw-bold">
                              Training & Bootcamps
                            </span>
                          </Link>
                        </li>
                      </ul>
                    </DropDown>
                  </li>
                  <li>
                    <Link to="/specialties" onClick={handleLinkClick}>
                      Specialties
                    </Link>
                  </li>
                  <li className="menu-item-has-children">
                    <Link to="/" onClick={handleLinkClick}>
                      Company
                    </Link>
                    <DropDown>
                      <ul>
                        <li>
                          <Link to="/about" onClick={handleLinkClick}>
                            About Us
                          </Link>
                        </li>
                        <li>
                          <Link to="/mission-and-vision" onClick={handleLinkClick}>
                            Mission & Vision
                          </Link>
                        </li>
                        <li>
                          <Link to="/partners" onClick={handleLinkClick}>
                            Partners
                          </Link>
                        </li>
                        <li>
                          <Link to="/careers" onClick={handleLinkClick}>
                            Careers
                          </Link>
                        </li>
                        <li>
                          <Link to="/contact" onClick={handleLinkClick}>
                            Contact
                          </Link>
                        </li>
                        <li>
                          <Link to="/faqs" onClick={handleLinkClick}>
                            FAQs
                          </Link>
                        </li>
                      </ul>
                    </DropDown>
                  </li>
                  <li className="menu-item-has-children">
                    <Link to="/" onClick={handleLinkClick}>
                      Resources
                    </Link>
                    <DropDown>
                      <ul>
                        <li>
                          <Link to="/careers" onClick={handleLinkClick}>
                            Brochure
                          </Link>
                        </li>
                        <li>
                          <Link to="/careers" onClick={handleLinkClick}>
                            Testimonials
                          </Link>
                        </li>
                        <li>
                          <Link to="/appointments" onClick={handleLinkClick}>
                            Case Studies
                          </Link>
                        </li>
                        <li>
                          <Link to="/careers" onClick={handleLinkClick}>
                            Infographics
                          </Link>
                        </li>
                        <li>
                          <Link to="/departments" onClick={handleLinkClick}>
                            eBooks
                          </Link>
                        </li>
                        <li>
                          <Link to="/careers" onClick={handleLinkClick}>
                            Whitepapers
                          </Link>
                        </li>
                        <li>
                          <Link to="/careers" onClick={handleLinkClick}>
                            Blog
                          </Link>
                        </li>
                      </ul>
                    </DropDown>
                  </li>
                </ul>
                <span
                  className={`cs_menu_toggle ${
                    mobileToggle ? "cs_toggle_active" : ""
                  }`}
                  onClick={() => setMobileToggle(!mobileToggle)}
                >
                  <span></span>
                </span>
              </nav>
            </div>

            {/* Call-to-Action Section */}
            <div className="cs_main_header_right">
              <div className="cs_toolbox">
                <Link
                  to="/appointments"
                  className="cs_btn"
                  onClick={handleLinkClick}
                >
                  Get a Free Consultation
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}