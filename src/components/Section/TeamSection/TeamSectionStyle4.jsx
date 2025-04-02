import React from "react";
import SectionHeading from "../../SectionHeading";
import Spacing from "../../Spacing";
import TeamStyle4 from "../../Team/TeamStyle4";

export default function TeamSectionStyle4({
	sectionTitle,
	sectionTitleUp,
	data,
}) {
	return (
		<div className="container">
			<SectionHeading title={sectionTitle} titleUp={sectionTitleUp} center />
			<Spacing md="72" lg="50" />
			<div className="row cs_gap_y_30">
				{data?.map((item, index) => (
					<div className="col-lg-4" key={index}>
						<TeamStyle4 {...item} />
					</div>
				))}
			</div>
			{/* <div className="d-flex justify-content-center">
				<button className="cs_btn cs_style_1">
					<a href="/services">
						<span>View All Services</span>
						<i>
							<img src="/images/icons/arrow_white.svg" alt="Icon" />
							<img src="/images/icons/arrow_white.svg" alt="Icon" />
						</i>
					</a>
				</button>
			</div> */}
		</div>
	);
}
