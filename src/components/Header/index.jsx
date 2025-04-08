import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import DropDown from "./DropDown";
import Cta from "../Cta";

export default function Header({ logoSrc, variant }) {
  const [isSticky, setIsSticky] = useState(false);
  const [mobileToggle, setMobileToggle] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleLinkClick = () => {
    setMobileToggle(false); // Close the mobile menu
  };

  return (
    <>
      <header
        className={`cs_site_header cs_style1 cs_sticky_header ${
          mobileToggle ? "cs_mobile_toggle_active" : ""
        } ${variant} ${isSticky ? "cs_active_sticky" : ""}`}
      >
        <div className="cs_main_header">
          <div className="container">
            <div className="cs_main_header_in">
              <div className="cs_main_header_left">
                <Link className="cs_site_branding" to="/" onClick={handleLinkClick}>
                  <img src={logoSrc} alt="Logo" style={{ width: "150px" }} />
                </Link>
              </div>
              <div className="cs_main_header_center">
                <nav className="cs_nav">
                  <ul
                    className={`${
                      mobileToggle ? "cs_nav_list cs_active" : "cs_nav_list"
                    }`}
                  >
                    <li className="menu-item-has-children">
                      <Link to="/" onClick={handleLinkClick}>Solutions</Link>
                      <DropDown>
                        <ul style={{ fontSize: "13px" }}>
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
                      <Link to="/" onClick={handleLinkClick}>Company</Link>
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
                      <Link to="/" onClick={handleLinkClick}>Resources</Link>
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
                    style={{ color: "white" }}
                    className={
                      mobileToggle
                        ? "cs_menu_toggle cs_teggle_active"
                        : "cs_menu_toggle"
                    }
                    onClick={() => setMobileToggle(!mobileToggle)}
                  >
                    <span></span>
                  </span>
                </nav>
              </div>
              <div className="cs_main_header_right">
                <div className="cs_toolbox">
                  <Cta btnText="Request Demo" btnUrl="/appointments" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}