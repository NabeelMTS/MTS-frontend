import React from 'react';

export default function AppointmentFormStyle2() {
  return (
    <form action="/" className="cs_appointment_form cs_style_1 cs_type_1">
      <div className="cs_appointment_form_field">
        <div className="cs_appointment_form_icon cs_center rounded-circle cs_accent_bg">
          <img src="/images/home_4/appointment_icon_1.svg" alt="Icon" style={{width: '20px'}} />
        </div>
        <div className="cs_appointment_form_field_right">
          <input type="text" placeholder="Enter your name" />
        </div>
      </div>
      <div className="cs_appointment_form_field">
        <div className="cs_appointment_form_icon cs_center rounded-circle cs_accent_bg">
          <img src="/images/home_4/appointment_icon_2.svg" alt="Icon" />
        </div>
        <div className="cs_appointment_form_field_right">
          <label>Email Address</label>
          <input type="email" placeholder="Enter email address" />
        </div>
      </div>
      <div className="cs_appointment_form_field">
        <div className="cs_appointment_form_icon cs_center rounded-circle cs_accent_bg">
          <img src="/images/home_4/appointment_icon_3.svg" alt="Icon" />
        </div>
        <div className="cs_appointment_form_field_right">
          <label>Phone Number</label>
          <input type="tel" placeholder="Enter phone number" />
        </div>
      </div>
      <button className="cs_btn cs_style_1" style={{marginTop: '15px'}}>
        <span>Submit</span>
      </button>
    </form>
  );
}
