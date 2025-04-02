export default function AppointmentForm() {
	return (
		<form action="#" className="row">
			<div className="col-lg-6">
				<label className="cs_input_label cs_heading_color">Name</label>
				<input type="text" className="cs_form_field" placeholder="David John" />
				<div className="cs_height_42 cs_height_xl_25" />
			</div>

			<div className="col-lg-6">
				<label className="cs_input_label cs_heading_color">Email</label>
				<input type="email" className="cs_form_field" placeholder="Email" />
				<div className="cs_height_42 cs_height_xl_25" />
			</div>
			<div className="col-lg-12">
				<label  className="cs_input_label cs_heading_color">Phone Number</label>
				<input
					type="text"
					className="cs_form_field"
					placeholder="Phone Number"
				/>
				<div className="cs_height_42 cs_height_xl_25" />
			</div>
			<div className="col-lg-12">
				<label className="cs_input_label cs_heading_color">Message</label>
				<textarea
					className="cs_form_field"
					placeholder="Enter your message here"
					rows="5"
				></textarea>
				<div className="cs_height_42 cs_height_xl_25" />
			</div>
			<div className="col-lg-12">
				<button className="cs_btn cs_style_1">
					<span>Submit</span>
					<i>
						<img src="/images/icons/arrow_white.svg" alt="Icon" />
						<img src="/images/icons/arrow_white.svg" alt="Icon" />
					</i>
				</button>
			</div>
		</form>
	);
}
