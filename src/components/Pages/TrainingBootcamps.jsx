import React from "react";
import BannerSectionStyle7 from "../Section/BannerSection/BannerSectionStyle7";
import BannerSectionStyle3 from "../Section/BannerSection/BannerSectionStyle3";
import Section from "../Section";
import AboutSectionStyle2 from "../Section/AboutSection/AboutSectionStyle2";
import FeaturesSectionStyle3 from "../Section/FeaturesSection/FeaturesSectionStyle3";
import Banner from "../Section/BannerSection";
import TestimonialSectionStyle3 from "../Section/TestimonialSection/TestimonialSectionStyle3";
import FeaturesSection from "../Section/FeaturesSection";

import { pageTitle } from "../../helpers/PageTitle";

const featureListData = [
  {
    title: "Flexible Learning Options",
    subTitle:
      "MTS offers a range of learning formats, including online, in-person, and hybrid programs, to accommodate diverse learning styles and schedules. Our flexible options ensure that you can access quality education, regardless of your location or availability.",
    iconUrl: "images/icons/professional.svg",
  },
  {
    title: "Practical, Real-World Skills",
    subTitle:
      "Our programs are designed to equip you with practical, hands-on skills that are directly applicable to your chosen field. Whether you’re learning medical billing, coding, or digital marketing, you’ll gain the expertise needed to excel in your career.",
    iconUrl: "images/icons/comprehensive.svg",
  },
  {
    title: "Innovative Learning Methods",
    subTitle:
      "Learn using cutting-edge, AI-driven technologies and modern teaching techniques that keep you ahead of industry trends, ensuring you gain the latest, most relevant knowledge.",
    iconUrl: "images/icons/patient.svg",
  },
  {
    title: "Complete Career Support",
    subTitle:
      "Receive comprehensive career support, including personalized coaching, resume building, interview preparation, and access to a network of industry professionals to guide your career journey.",
    iconUrl: "images/icons/facilities.svg",
  },
  {
    title: "Job Placement Support & Networking",
    subTitle:
      "Benefit from our dedicated job placement resources and exclusive networking opportunities to connect with top employers, giving you a competitive edge in securing your ideal position.",
    iconUrl: "images/icons/facilities.svg",
  },
];

const featureData = [
  {
    title: "Healthcare Career Pathways",
    subTitle:
      "Our healthcare programs provide hands-on training in medical billing, coding, and clinical services. Equip yourself with the skills needed to thrive in healthcare administration, improve patient outcomes, and navigate complex billing systems with ease.",
    iconUrl: "/images/departments/icon_9.svg",
  },
  {
    title: "Technology & Data Science Mastery",
    subTitle:
      "Learn cutting-edge technologies like AI, data analytics, and software engineering. Our programs prepare you to work in the rapidly evolving tech industry, equipping you with the expertise to solve real-world problems using innovative tech solutions.",
    iconUrl: "/images/departments/icon_10.svg",
  },
  {
    title: "Business Strategy & Growth Programs",
    subTitle:
      "Develop essential business skills in project management, digital marketing, and business analysis. Our programs help you master strategies for business growth, improve decision-making, and drive organizational success in a competitive market.",
    iconUrl: "/images/departments/icon_11.svg",
  },
  {
    title: "Bootcamps & Certifications",
    subTitle:
      "Our fast-track bootcamps and certification programs are perfect for career changers. Get industry-specific knowledge quickly and efficiently, with a focus on hands-on learning and job-readiness to help you transition into a new field.",
    iconUrl: "/images/departments/icon_12.svg",
  },
];
const testimonialData = [
  {
    text: "The bootcamp was a game-changer for me. The hands-on approach and real-world examples prepared me to jump straight into my new job!",
    ratingNumber: "5",
    avatarImgUrl: "/images/home_1/avatar_2.png",
    avatarName: "Emily S.",
    avatarDesignation: "Data Analyst",
  },
  {
    text: "I gained the confidence and skills I needed to make a career change into healthcare billing, and the job placement support helped me land my first position!",
    ratingNumber: "4.5",
    avatarImgUrl: "/images/home_1/avatar_2.png",
    avatarName: "John T.",
    avatarDesignation: "Medical Biller",
  },
  {
    text: "The program exceeded my expectations. The industry-experienced trainers provided valuable insights, and I secured a software engineering role with a top tech company. I’m now part of an exciting, innovative team!",
    ratingNumber: "5",
    avatarImgUrl: "/images/home_1/avatar_2.png",
    avatarName: "Sarah K.",
    avatarDesignation: "Software Engineer",
  },
  {
    text: "Thanks to the career support and networking opportunities, I transitioned into a project management role within six months. The program gave me the skills and confidence I needed to thrive in my new career!",
    ratingNumber: "4.5",
    avatarImgUrl: "/images/home_1/avatar_2.png",
    avatarName: "Michael P.",
    avatarDesignation: "Project Manager",
  },
  {
    text: "After completing the clinical services program, I was able to secure a position as a clinical coordinator at a major hospital. The practical experience I gained was invaluable in my new role!",
    ratingNumber: "4.5",
    avatarImgUrl: "/images/home_1/avatar_2.png",
    avatarName: "Lisa H.",
    avatarDesignation: "Clinical Coordinator",
  },
  {
    text: "The coding bootcamp was exactly what I needed to break into the healthcare IT field. I now work as a coding specialist and am already progressing toward more advanced roles!",
    ratingNumber: "4.5",
    avatarImgUrl: "/images/home_1/avatar_2.png",
    avatarName: "David M.",
    avatarDesignation: "Coding Specialist",
  },
];
export default function TrainingBootcamps() {
  pageTitle("Training and Bootcamps");
  return (
    <>
      <BannerSectionStyle3
        bgUrl="/images/about/banner_bg.svg"
        imgUrl="/images/training-bootcamps/banner_img.png"
        title="Training & Bootcamps"
        subTitle="Where Innovation Driving Revenue Growth!"
      />
      <Section topMd={135} topLg={100} topXl={100}>
        <AboutSectionStyle2
          title="Fuel Your Vision, Shape Your Future"
          subTitle="At MedicoTech Solutions, we believe that great achievements begin with a powerful vision. Whether you're looking to excel in healthcare, medical billing and coding, artificial intelligence, digital marketing, mastering cutting-edge business skills, or revolutionizing clinical services, we’re here to empower your journey."
          imgUrl="/images/departments/department_img_1.png"
        />
      </Section>

      <Section topMd={170} topLg={145} topXl={90}>
        <FeaturesSectionStyle3
          sectionTitle="Treatments"
          sectionTitleUp="MORE TYPE OF"
          data={featureData}
        />
      </Section>
      <Section>
        <Banner
          bgUrl="images/home_1/cta_bg.svg"
          imgUrl="images/training-bootcamps/cta_img.png"
          title="Ready to Accelerate Your Career?"
          subTitle="Join MedicoTech Solutions to gain in-demand skills in healthcare, technology, and business. Whether you want to break into healthcare tech, upskill in medical billing and coding, or boost your business acumen, we have the program for you."
        />
      </Section>
      <Section
        topMd={185}
        topLg={140}
        topXl={100}
        bottomMd={185}
        bottomLg={140}
        bottomXl={100}
      >
        <FeaturesSection sectionTitle="Our Values" data={featureListData} />
      </Section>

      <div className="container d-flex flex-column justify-content-center align-items-center vh-100 text-center">
        <h3>Remote Training for Maximum Flexibility</h3>
        <p>
          Our remote programs allow you to learn from anywhere. Whether you're a
          working professional or a student, you can access live sessions,
          recorded modules, and mentorship to succeed at your own pace.
        </p>
        <p>
          Join thousands of learners who have advanced their careers through our
          cutting-edge, flexible training solutions.
        </p>
      </div>

      <Section
        className="cs_bg_filed"
        style={{ backgroundImage: "url(/images/home_3/testimonial_bg.svg)" }}
      >
        <Section
          topMd={190}
          topLg={145}
          topXl={105}
          bottomMd={200}
          bottomLg={150}
          bottomXl={110}
        >
          <TestimonialSectionStyle3
            sectionTitle="Don’t just take <br/> our word for it!"
            sectionTitleUp="Success Stories"
            data={testimonialData}
          />
        </Section>
        <Section className="cs_footer_margin_0">
          <BannerSectionStyle7
            imgUrl="/images/training-bootcamps/banner_img_3.png"
            bgUrl="/images/departments/banner_bg_3.svg"
            title="Don’t Let Your Career Growth <br />Take a Backseat!"
            subTitle="Join our training and boot camp programs to gain the skills you need to excel in healthcare technology, research, and AI—flexible, interactive, and accessible from anywhere!"
          />
        </Section>
      </Section>
    </>
  );
}
