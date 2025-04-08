import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
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
    // Cleanup function to remove the event listener
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
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
                <Link className="cs_site_branding" to="/">
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
                      <Link to="/">Solutions</Link>
                      <DropDown>
                        <ul style={{ fontSize: "13px" }}>
                          <span className="d-block ms-3 text-decoration-underline fw-bold">
                            Billing Solutions
                          </span>
                          <li>
                            <Link to="/medical-billing">
                              Medical Billing Services
                            </Link>
                          </li>
                          <li>
                            <Link to="/medical-coding-services">
                              Medical Coding Services
                            </Link>
                          </li>
                          <li>
                            <Link to="/rcm-services">RCM Services </Link>
                          </li>
                          <li>
                            <Link to="/provider-credentialing">
                              Provider Credentialing & Enrollment{" "}
                            </Link>
                          </li>

                          <span className="d-block ms-3 text-decoration-underline fw-bold">
                            Clinical Services
                          </span>
                          <li>
                            <Link to="/care-management-service">Care Management</Link>
                          </li>
                          <li>
                            <Link to="/clinical-pharmacist-services">
                              Clinical Pharmacist Services
                            </Link>
                          </li>
                          <li>
                            <Link to="/medical-scribing-services">Medical Scribing Services</Link>
                          </li>
                          <li>
                            <Link to="/medical-record-keeping">
                              Medical Record Keeping & Documentation
                            </Link>
                          </li>
                          <li>
                            <Link to="/telemedicine">
                              Telemedicine & Virtual Care Services
                            </Link>
                          </li>
                          <li>
                            <Link to="/clinical-data-analysis-and-reporting">
                              Clinical Data Analysis & Reporting
                            </Link>
                          </li>
                          <li>
                            <Link to="/services">
                              Services
                            </Link>
                          </li>
                          <li>
                            <Link to="/specialties">
                              Specialties
                            </Link>
                          </li>
                          <li>
                            <Link to="/digital-health-marketing">
                              <span className="d-block text-decoration-underline fw-bold">
                                Healthcare Digital Marketing
                              </span>
                            </Link>
                          </li>
                          <li>
                            <Link to="/business-growth">
                              <span className="d-block text-decoration-underline fw-bold">
                                Business Growth Services
                              </span>
                            </Link>
                          </li>
                          <li>
                            <Link to="/healthcare-outsourcing-solutions">
                              <span className="d-block text-decoration-underline fw-bold">
                                Healthcare Outsourcing Solutions
                              </span>
                            </Link>
                          </li>
                          <li>
                            <Link to="/training-bootcamps">
                              <span className="d-block text-decoration-underline fw-bold">
                                Training & Bootcamps
                              </span>
                            </Link>
                          </li>
                        </ul>
                      </DropDown>
                    </li>
                    <li className="">
                      <Link to="/">Specialties</Link>
                    </li>
{/*                     <li className="">
                      <Link to="/">Expertise</Link>
                    </li>

                    <li className="">
                      <Link to="/">Industries</Link>
                    </li> */}
                    <li className="menu-item-has-children">
                      <Link to="/">Company</Link>
                      <DropDown>
                        <ul>
                          <li>
                            <Link to="/about">About Us</Link>
                          </li>
                          <li>
                            <Link to="/mission-and-vision">
                              Mission & Vision
                            </Link>
                          </li>
                          <li>
                            <Link to="/partners">Partners</Link>
                          </li>
                          <li>
                            <Link to="/careers">Careers</Link>
                          </li>
                          <li>
                            <Link to="/contact">Contact</Link>
                          </li>
                          <li>
                            <Link to="/faqs">FAQs</Link>
                          </li>
                        </ul>
                      </DropDown>
                    </li>
                    <li className="menu-item-has-children">
                      <Link to="/">Resources</Link>
                      <DropDown>
                        <ul>
                          <li>
                            <Link to="/careers">Brochure</Link>
                          </li>
                          <li>
                            <Link to="/careers">Testimonials</Link>
                          </li>

                          <li>
                            <Link to="/appointments">Case Studies</Link>
                          </li>

                          <li>
                            <Link to="/careers">Infographics</Link>
                          </li>

                          <li>
                            <Link to="/departments">eBooks</Link>
                          </li>

                          <li>
                            <Link to="/careers">Whitepapers</Link>
                          </li>
                          <li>
                            <Link to="/careers">Blog</Link>
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
                  
                  <Cta
                  btnText="Request Demo"
                  btnUrl="/appointments"
                  >
                  </Cta>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
