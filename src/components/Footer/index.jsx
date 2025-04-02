import React from "react";
import ContactInfoWidget from "../Widget/ContactInfoWidget";
import MenuWidget from "../Widget/MenuWidget";
import SocialWidget from "../Widget/SocialWidget";
import Newsletter from "../Widget/Newsletter";
import TextWidget from "../Widget/TextWidget";
const menuDataOne = [
  { title: "Medical Billing", href: "/about" },
  { title: "Free Audit", href: "/doctors" },
  { title: "RCM ", href: "/timetable" },
  { title: "Clinical Services", href: "/appointments" },
  { title: "Digital Marketing", href: "/" },
  { title: "Training & Bootcamps", href: "/" },
];
const menuDataTwo = [
  { title: "About Us", href: "/about" },
  { title: "Contact Us", href: "/contact" },
  { title: "FAQs", href: "/faqs" },
  { title: "Testimonials", href: "/" },
  { title: "Blog", href: "/blog" },
  { title: "Privacy Policy", href: "/privacy-data-protection-policy" },
  { title: "Terms & Conditions", href: "/" },
];

export default function Footer() {
  return (
    <footer className="cs_footer cs_style_1 cs_heading_color">
      <div
        className="cs_footer_logo_wrap"
        style={{ backgroundImage: "url(/images/footer_bg_1.svg)" }}
      >
        <div
          className="cs_footer_brand"
          style={{ backgroundImage: "url(/images/footer_logo_bg.svg)" }}
        >
          <img
            src="/images/logo_icon.png"
            alt="Logo Icon"
            className="cs_footer_brand_icon"
          />
          <h2 className="cs_footer_brand_text">MedicoTech</h2>
        </div>
      </div>
      <div className="cs_footer_main">
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <div className="cs_footer_item">
                {/* <TextWidget logoUrl="/images/logo.png" text="" /> */}
                <TextWidget text="MedicoTech Solutions" />

                <ContactInfoWidget />
              </div>
            </div>
            <div className="col-lg-2">
              <div className="cs_footer_item">
                <MenuWidget data={menuDataOne} />
              </div>
            </div>
            <div className="col-lg-2">
              <div className="cs_footer_item">
                <MenuWidget data={menuDataTwo} />
              </div>
            </div>
            <div className="col-lg-4">
              <div className="cs_footer_item">
                <Newsletter
                  title="Weekly Newsletter"
                  subTitle="Stay updated with the latest in medical billing solutions and HealthTech innovations—delivered straight to your inbox!"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="cs_footer_bottom cs_accent_bg">
        <div className="container">
          <div className="cs_footer_bottom_in">
            <SocialWidget />
            <div className="cs_copyright">
              Copyright © 2025 MedicoTech Solutions, LLC. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
