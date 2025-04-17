import React, { useState } from "react";
import { Link } from "react-router-dom";
import VideoModal from "../VideoModal";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
// import required modules
import { Navigation } from "swiper/modules";
const silderData = [
	{
		
		title: [<i>Innovation Driving</i>, <i>Revenue Growth</i>],
		subTitle:
			"Embrace the future of healthcare with innovative solutions. From efficient medical billing to expert IT consultation, we empower you to enhance patient care and boost revenue with cutting-edge technology.",
		bgUrl: "/images/home_2/hero_3.jpg",

		videoBtnText: "See how we work",
		videoUrl: "https://www.youtube.com/embed/VcaAVWtP48A",
		btnText: " Book a Free Consultation",
		btnUrl: "/appointments",
		funfactList: [
			{ number: "95%", title: "Client Satisfaction Rate" },
			{ number: "25+", title: "Specialties Supported" },
			{ number: "100%", title: "HIPAA Compliance" },
			{ number: "120+", title: "Providers" },
		],
	},
	{
		title: ["End Claim Denials - Maximize Revenue Today"],
		subTitle:
			"Our intelligent, AI-driven approach to medical billing & coding, RCM, and provider credentialing helps reduce claim denials by up to 30%, improve compliance, and ensure smoother reimbursements.",
		bgUrl: "/images/home_2/hero_2.jpg",

		videoBtnText: "See how we work",
		videoUrl: "https://www.youtube.com/embed/VcaAVWtP48A",
		btnText: " Book a Free Consultation",
		btnUrl: "/appointments",
		funfactList: [
			{ number: "20+", title: "Years of experience" },
			{ number: "95%", title: "Patient satisfaction rating" },
			{ number: "5000+", title: "Patients served annually" },
			{ number: "10+", title: "Healthcare providers on staff" },
		],
	},
	{
		title: ["From Claims to Cash—Faster Than Ever"],
		subTitle:
			"Accurate, HIPAA-compliant medical billing solutions designed to streamline your practice and boost your cash flow.",
		bgUrl: "/images/home_2/hero.jpg",

		videoBtnText: "See how we work",
		videoUrl: "https://www.youtube.com/embed/VcaAVWtP48A",
		btnText: " Book a Free Consultation",
		btnUrl: "/appointments",
		funfactList: [
			{ number: "20+", title: "Years of experience" },
			{ number: "95%", title: "Patient satisfaction rating" },
			{ number: "5000+", title: "Patients served annually" },
			{ number: "10+", title: "Healthcare providers on staff" },
		],
	},
	{
		title: ["Simplify Billing. Amplify Results!"],
		subTitle:
			"Our intelligent, AI-driven approach to medical billing & coding, RCM, and provider credentialing helps reduce claim denials by up to 30%, improve compliance, and ensure smoother reimbursements.",
		bgUrl: "/images/home_2/hero_4.jpg",

		videoBtnText: "See how we work",
		videoUrl: "https://www.youtube.com/embed/VcaAVWtP48A",
		btnText: " Book a Free Consultation",
		btnUrl: "/appointments",
		funfactList: [
			{ number: "20+", title: "Years of experience" },
			{ number: "95%", title: "Patient satisfaction rating" },
			{ number: "5000+", title: "Patients served annually" },
			{ number: "10+", title: "Healthcare providers on staff" },
		],
	},
];

export default function HeroStyle2() {
	const [videoModalOpen, setVideoModalOpen] = useState(false);

	return (
		<Swiper navigation={true} modules={[Navigation]} className="mySwiper">
			{silderData.map((item, index) => (
				<SwiperSlide key={index}>
					<section
						className="cs_hero cs_style_2"
						style={{
							backgroundImage: `url(${item.bgUrl})`,
							backgroundSize: "right",
							backgroundPosition: "center",
							backgroundRepeat: "no-repeat",
							minHeight: "calc(100vh-20px)", // Adjust for header height
							paddingTop: "120px", // Space for header
							display: "flex",
							flexDirection: "column",
							justifyContent: "center",
							position: "relative",
						}}
					>
						<div className="cs_hero_overlay"></div>
						<div className="container">
							<div className="cs_hero_text">
								<h1 className="cs_hero_title cs_white_color">
									{item.title.map((line, idx) => (
										<React.Fragment key={idx}>
											{line}
											<br />
										</React.Fragment>
									))}
								</h1>
								<p className="cs_hero_subtitle cs_white_color">{item.subTitle}</p>
								<div className="cs_hero_btns">
									<Link
										to={item.btnUrl}
										className="cs_btn"
									>
										{item.btnText}
									</Link>
									<span
										className="cs_video_open"
										onClick={() => setVideoModalOpen(true)}
									>
										▶
									</span>
								</div>
							</div>
							<div className="cs_hero_funfact_container">
								{item.funfactList.map((fact, idx) => (
									<div className="cs_hero_funfact_item" key={idx}>
										<h3>{fact.number}</h3>
										<p>{fact.title}</p>
									</div>
								))}
							</div>
						</div>

						{/* Video Modal */}
						{videoModalOpen && (
							<VideoModal
								videoUrl={item.videoUrl}
								videoBtnText="Watch Video"
								variant="cs_white_color"
								onClose={() => setVideoModalOpen(false)}
							/>
						)}
					</section>
				</SwiperSlide>
			))}
		</Swiper>
	);
}
