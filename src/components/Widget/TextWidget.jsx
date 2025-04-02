import React from "react";
import parse from "html-react-parser";

export default function TextWidget({ logoUrl, text }) {
	return (
		<div className="cs_text_widget">
			{logoUrl && (
				<img
					src={logoUrl}
					alt="Logo"
					style={{ width: "173px", height: "70px" }}
				/>
			)}
			{/* {text && <p>{text}</p>} */}
			<h3>MedicoTech <br/>Solutions </h3>
			
		</div>
	);
}
