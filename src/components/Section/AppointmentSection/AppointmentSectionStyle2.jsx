import React from 'react';
import AppointmentForm from '../../AppointmentForm';
import SectionHeading from '../../SectionHeading';
import Spacing from '../../Spacing';

export default function AppointmentSectionStyle2({
  bgUrl,
  imgUrl,
  sectionTitle,
  sectionTitleUp,
}) {
  return (
    <section className="cs_appointment_section_1">
      <div className="container">
        <div className="cs_height_70" /> {/* Reduced height */}
        <div className="cs_appointment_img" style={{ maxHeight: '500px' }}> {/* Added maxHeight */}
          <img src={imgUrl} alt="Appointment" style={{ objectFit: 'contain' }} />
        </div>
        <div className="row">
          <div className="offset-lg-6 col-lg-6">
            <SectionHeading title={sectionTitle} titleUp={sectionTitleUp} />
            <Spacing md="30" /> {/* Reduced spacing */}
            <AppointmentForm />
          </div>
        </div>
        <div className="cs_height_70" /> {/* Reduced height */}
      </div>
    </section>
  );
}
