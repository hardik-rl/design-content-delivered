import React, { useState } from "react";
import "../../assets/css/common.css";
import img1 from "../../assets/images/img1.jpg";
import img2 from "../../assets/images/img2.jpg";
import img3 from "../../assets/images/img3.jpg";
import img4 from "../../assets/images/img4.jpg";

const BusinessWorksTabs = () => {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index: React.SetStateAction<number>) => {
    setToggleState(index);
  };

  const getActiveClass = (index: number, className: string) =>
    toggleState === index ? className : "";

  const tabTitles = [
    "branding",
    "landing pages",
    "product pages",
    "social media",
    "packaging",
    "blog posts",
    "emails",
    "posters/covers",
  ];
  const tabContents = [
    [img1, img2, img3, img4, img1, img2, img3, img4],
    [img1, img2, img3, img4, img1],
    [img1, img2, img3, img4, img1, img2],
    [img1, img2, img3, img4],
    [img1, img2, img3, img4, img1],
    [img1, img2, img3],
    [img1, img2, img3, img4, img1, img2],
    [img1, img2],
  ];

  return (
    <div className="container mt-40">
      <div className="flex justify-center">
        <h2 className="title text-center pb-8 bulb-shape">
          creative work that elevates your business
        </h2>
      </div>

      <ul className="tab-list">
        {tabTitles.map((title, index) => (
          <li
            key={index}
            className={`tabs ${getActiveClass(index + 1, "active-tabs")}`}
            onClick={() => toggleTab(index + 1)}
          >
            {title}
          </li>
        ))}
      </ul>
      <div className="content-container">
        {tabContents.map((tabContent, index) => (
          <div
            key={index}
            className={`content ${getActiveClass(index + 1, "active-content")}`}
          >
            {tabContent.map((imgSrc, imgIndex) => (
              <img key={imgIndex} src={imgSrc} alt="" className="transition ease-linear	 hover:scale-90 "/>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default BusinessWorksTabs;
