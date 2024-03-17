import React, { useState } from "react";
import "../../assets/css/common.css";

const BusinessWorksTabs = () => {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index: React.SetStateAction<number>) => {
    setToggleState(index);
  };

  const getActiveClass = (index: number, className: string) =>
    toggleState === index ? className : "";

  return (
    <div className="container mt-40">
      <div className="flex justify-center">
       <h2 className="title text-center pb-8">creative work that elevates your business</h2>
      </div>
      <ul className="tab-list">
        <li
          className={`tabs ${getActiveClass(1, "active-tabs")}`}
          onClick={() => toggleTab(1)}
        >
         branding
        </li>
        <li
          className={`tabs ${getActiveClass(2, "active-tabs")}`}
          onClick={() => toggleTab(2)}
        >
          landing pages
        </li>
        <li
          className={`tabs ${getActiveClass(3, "active-tabs")}`}
          onClick={() => toggleTab(3)}
        >
         product pages
        </li>
         <li
          className={`tabs ${getActiveClass(4, "active-tabs")}`}
          onClick={() => toggleTab(4)}
        >
        social media
        </li>
         <li
          className={`tabs ${getActiveClass(5, "active-tabs")}`}
          onClick={() => toggleTab(5)}
        >
        packaging
        </li>
         <li
          className={`tabs ${getActiveClass(6, "active-tabs")}`}
          onClick={() => toggleTab(6)}
        >
         blog posts
        </li>
         <li
          className={`tabs ${getActiveClass(7, "active-tabs")}`}
          onClick={() => toggleTab(7)}
        >
         emails
        </li>
         <li
          className={`tabs ${getActiveClass(8, "active-tabs")}`}
          onClick={() => toggleTab(8)}
        >
         posters/covers
        </li> 
      </ul>
      <div className="content-container">
        <div className={`content ${getActiveClass(1, "active-content")}`}>
          <h2>Lorem</h2>
        </div>
        <div className={`content ${getActiveClass(2, "active-content")}`}>
          <h2>Ipsum</h2>
        </div>
        <div className={`content ${getActiveClass(3, "active-content")}`}>
          <h2>Dolor</h2>
        </div>
        <div className={`content ${getActiveClass(4, "active-content")}`}>
          <h2>Dolor</h2>
        </div>
        <div className={`content ${getActiveClass(5, "active-content")}`}>
          <h2>Dolor</h2>
        </div>
        <div className={`content ${getActiveClass(6, "active-content")}`}>
          <h2>Dolor</h2>
        </div>
        <div className={`content ${getActiveClass(7, "active-content")}`}>
          <h2>Dolor</h2>
        </div>
        <div className={`content ${getActiveClass(8, "active-content")}`}>
          <h2>Dolor</h2>
        </div>
      </div>
    </div>
  );
};

export default BusinessWorksTabs;