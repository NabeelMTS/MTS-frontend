import React from "react";
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
		bgUrl: "/images/home_2/hero_bg.jpeg",
		imgUrl: "/images/home_2/patents.png",
		videoBtnText: "See how we work",
		videoUrl: "https://www.youtube.com/embed/VcaAVWtP48A",
		btnText: "MedicoTech Solutions",
		btnUrl: "/",
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
		bgUrl: "/images/healthcare-outsourcing-solutions/banner_bg_2.jpeg",
		imgUrl: "/images/home_2/patents.png",
		videoBtnText: "See how we work",
		videoUrl: "https://www.youtube.com/embed/VcaAVWtP48A",
		btnText: "MedicoTech Solutions",
		btnUrl: "/",
		funfactList: [
			{ number: "20+", title: "Years of experience" },
			{ number: "95%", title: "Patient satisfaction rating" },
			{ number: "5000+", title: "Patients served annually" },
			{ number: "10+", title: "Healthcare providers on staff" },
		],
	},
	{
		title: ["End Claim Denials - Maximize Revenue Today"],
		subTitle:
			"Our intelligent, AI-driven approach to medical billing & coding, RCM, and provider credentialing helps reduce claim denials by up to 30%, improve compliance, and ensure smoother reimbursements.",
		bgUrl: "/images/provider-credentialing/credentialling.png",
		imgUrl: "/images/home_2/patents.png",
		videoBtnText: "See how we work",
		videoUrl: "https://www.youtube.com/embed/VcaAVWtP48A",
		btnText: "MedicoTech Solutions",
		btnUrl: "/",
		funfactList: [
			{ number: "20+", title: "Years of experience" },
			{ number: "95%", title: "Patient satisfaction rating" },
			{ number: "5000+", title: "Patients served annually" },
			{ number: "10+", title: "Healthcare providers on staff" },
		],
	},
];

export default function HeroStyle2() {
	return (
		<Swiper navigation={true} modules={[Navigation]} className="mySwiper">
			{silderData.map((item, index) => (
				<SwiperSlide key={index}>
					<section
						className="cs_hero cs_style_2 cs_bg_filed"
						style={{ backgroundImage: `url(${item.bgUrl})` }}
					>
						<div className="container">
							<div className="cs_hero_text">
								<h1 className="cs_hero_title cs_white_color cs_fs_84">
									{/* {item.title} */}
									{item.title.map((line, idx) => (
										<React.Fragment key={idx}>
											{line}
											<br />
										</React.Fragment>
									))}
								</h1>
								<div className="cs_hero_text_in">
									<div className="cs_hero_btn cs_white_color">
										<Link to={item.btnUrl} className="cs_text_btn">
											{item.btnText}
										</Link>
									</div>
									<p className="cs_hero_subtitle cs_white_color">
										{item.subTitle}
									</p>
								</div>
							</div>
							<img src={item.imgUrl} alt="Hero" className="cs_hero_patents" />
						</div>
						<div className="container">
							<div className="cs_hero_bottom">
								<div className="cs_hero_bottom_left">
									<div className="cs_hero_btn_wrap">
										{/* <button className="cs_btn cs_style_1">
					<span>Schedule a Demo</span>
					<i>
						<img src="/images/icons/arrow_white.svg" alt="Icon" />
						<img src="/images/icons/arrow_white.svg" alt="Icon" />
					</i>
				</button> */}
										<VideoModal
											videoUrl={item.videoUrl}
											videoBtnText={item.videoBtnText}
											variant="cs_white_color"
										/>
									</div>
								</div>
								<div className="cs_hero_bottom_right">
									{item.funfactList?.length > 0 && (
										<div className="cs_hero_funfact text-center">
											{item.funfactList?.map((item, index) => (
												<div className="cs_hero_funfact_col" key={index}>
													<h3 className="cs_white_color cs_fs_72">
														{item.number}
													</h3>
													<p className="cs_white_color mb-0">{item.title}</p>
												</div>
											))}
										</div>
									)}
								</div>
							</div>
						</div>
					</section>
				</SwiperSlide>
			))}
		</Swiper>
	);
}
