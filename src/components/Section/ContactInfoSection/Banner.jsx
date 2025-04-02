import React from "react";

export default function BannerSectionStyle3({
  bgUrl,
  imgUrl,
  title,
  textColor,
  subTitle,
}) {
  return (
    <section
      className=""
      style={{
        backgroundImage: `url(${bgUrl})`,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "500px",
        backgroundSize: "cover",
      }}
    >
      <div className="container" style={{ textAlign: "center" }}>
        <h2
          className={`cs_banner_titless cs_fs_72 ${textColor ? textColor : ""}`}
        >
          {title}
        </h2>
        <h5
          className={`cs_banner_subtitless cs_fs_20 mb-0 cs_heading_colors ${
            textColor ? textColor : ""
          }`}
        >
          {subTitle}
        </h5>
      </div>
    </section>
  );
}
