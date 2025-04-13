import React from 'react';
import SectionHeading from '../../SectionHeading';
import Spacing from '../../Spacing';
import IconBoxStyle3 from '../../IconBox/IconBoxStyle3';

export default function WorkingProcess({
  sectionTitle,
  sectionTitleUp,
  sectionTitleDown,
  sectionSubTitle,
  data,
}) {
  return (
    <div>
      {/* Removed background shapes */}
      <div className="container">
        <SectionHeading
          title={sectionTitle}
          titleUp={sectionTitleUp}
          titleDown={sectionTitleDown}
          subTitle={sectionSubTitle}
          center
        />
        <Spacing md="105" lg="50" />
        <div className="cs_iconbox_3_wrap">
          {data?.map((item, index) => (
            <IconBoxStyle3 key={index} {...item} />
          ))}
        </div>
      </div>
    </div>
  );
}
