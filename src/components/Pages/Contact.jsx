import React from "react";
import AppointmentWithContactInfoSection from "../Section/AppointmentWithContactInfoSection";
import ContactInfoSection from "../Section/ContactInfoSection";

import Section from "../Section";
import { pageTitle } from "../../helpers/PageTitle";
import Banner from "../../components/Section/ContactInfoSection/Banner";

export default function Appointments() {
	pageTitle("Appointments");
	return (
		<>
			<Banner
				bgUrl="/images/contactBanner.png"
				title="Contact US"
				subTitle="Get in touch"
			/>

			<Section topMd={130} topLg={130} topXl={130}>
				<AppointmentWithContactInfoSection />
			</Section>
			<Section
				topMd={200}
				topLg={150}
				topXl={100}
				bottomMd={200}
				bottomLg={150}
				bottomXl={110}
			>
				<div className="container">
					<div className="cs_map">
						<iframe
							id="map"
							title="Google Map"
							src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d96652.27317354927!2d-74.33557928194516!3d40.79756494697628!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c3a82f1352d0dd%3A0x81d4f72c4435aab5!2sTroy+Meadows+Wetlands!5e0!3m2!1sen!2sbd!4v1563075599994!5m2!1sen!2sbd"
							allowFullScreen
						/>
					</div>
				</div>{" "}
			</Section>
		</>
	);
}
