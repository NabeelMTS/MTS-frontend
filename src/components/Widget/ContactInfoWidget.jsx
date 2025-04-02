import { Icon } from "@iconify/react";
import React from "react";

export default function ContactInfoWidget() {
	return (
		<ul className="cs_contact_widget">
			<li>
				<i className="cs_accent_bg">
					<Icon icon="ep:location" />
				</i>
				5900 Balcones Drive, #18270 Austin, TX
			</li>
			<li>
				<i className="cs_accent_bg">
					<Icon icon="fluent:call-24-regular" />
				</i>
				+1 (737) 283-1792
			</li>
			<li>
				<i className="cs_accent_bg">
					<Icon icon="bi:envelope" />
				</i>
				info@medicotechsolutions.com
			</li>
		</ul>
	);
}
