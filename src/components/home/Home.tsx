import Navbar from "../navbar/Navbar";
import emailIocn from "../../assets/images/icons/email-icon.svg";
import instagramIocn from "../../assets/images/icons/instagram-icon.svg";
import facebookIocn from "../../assets/images/icons/facebook-icon.svg";
import linkdinIocn from "../../assets/images/icons/linkedin-icon.svg";
import xIocn from "../../assets/images/icons/twitter-icon.svg";
import BusinessWorksTabs from "../business-works-tabs/BusinessWorksTabs";
import WhatCanIDo from "../what-can-i-do/WhatCanIDo";
import WhoIsItFor from "../who-is-it-for/WhoIsItFor";
import Price from "../price/Price";
import StartingOut from "../starting-out/StartingOut";
import SpecificProject from "../specific-project/SpecificProject";
import Faq from "../faq/Faq";
import Footer from "../footer/Footer";

const Home = () => {
  return (
    <>
      <section className="flex gap-7 maxXl:flex-wrap">
        <div className="w-[70%] maxXl:w-full">
          <div className="flex justify-between xl:pr-16 maxLg:pr-0 maxMd:flex-col ">
            <div className="maxMd:flex maxMd:justify-between">
              <Navbar />
            </div>
            <div className="text-right mt-14  maxMd:text-center">
              <h2 className="text-2xl font-medium">
                Design. Content. Delivered.
              </h2>
              <p className="text-xl py-5">
                Your solution to your <br /> unlimited design and content needs.
              </p>
              <button className="btn-primary">see plans</button>
            </div>
          </div>
          <div className="bg-[#F0EBE6] w-[100%] rounded-[10px] maxMd:hidden cardSmallDownArrow">
            <ul className="data-lists">
              <li>branding</li>
              <li>blog posts</li>
              <li>packaging</li>
              <li>stationery</li>
              <li>web apps</li>
              <li>landing pages</li>
              <li>emails</li>
              <li>product descriptions</li>
              <li>posters/covers</li>
              <li>newsletters</li>
              <li>Sales Funnels</li>
              <li>ad Creatives</li>
              <li>SEO</li>
              <li>social media</li>
              <li>ghost writing</li>
              <li>Mobile Apps</li>
              <li>ebooks</li>
              <li>Websites</li>
              <li>product pages</li>
              <li>and more...</li>
            </ul>
          </div>
          <div className="maxLg:mt-8 maxXl:!hidden">
            <h2 className="title xl:hidden">how it works</h2>
            <div className="how-works">
              <div className="w-[33%] mt-14 maxLg:w-[50%] maxLg:mt-0">
                <h2 className="title maxLg:hidden">how it works</h2>
                <div className="card !w-full lg:mt-4 maxLg:h-full cardSmallArrow">
                  <h2>
                    subscribe <span>1</span>
                  </h2>
                  <p>
                    Select your ideal plan. Start hassle-free, no strings
                    attached..
                  </p>
                </div>
              </div>
              <div className="card mt-8 maxLg:mt-0 cardBigArrow">
                <h2>
                  list tasks <span>2</span>
                </h2>
                <p>
                  Tell us what you need; we'll handle the rest. Pour out all
                  your design needs.
                </p>
              </div>
              <div className="card cardSmallArrow">
                <h2>
                  revise <span>3</span>
                </h2>
                <p>
                  Enjoy the freedom of unlimited revisions, ensuring each detail
                  aligns with your vision.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[30%] mt-14 flex flex-col justify-between maxXl:w-full maxXl:mt-4 maxXl:gap-8 maxMd:!mt-[-45px]">
          <div className="details-card">
            <ul>
              <li>One Subscription for all your needs</li>
              <li>Unlimited Design and content Requests</li>
              <li>Average 2-5 day delivery</li>
              <li>Pause or Cancel anytime</li>
              <li>1: 1 async communication</li>
              <li>No hiring required</li>
              <li>No Contracts</li>
              <li>No Meetings</li>
            </ul>
          </div>
          <h2 className="title lg:hidden">how it works</h2>
          <div className="xl:flex maxXl:grid maxXl:grid-cols-2 maxMd:!grid-cols-1 gap-16 mt-7 maxXl:mt-0 h-full maxXl:gap-6 maxMd:text-center">
            <div className="xl:!hidden p-6 rounded-lg shadow-cardShadow maxLg:!flex flex-col justify-end cardSmallArrow">
              <h2 className="text-[33px] leading-10 font-ranika relative">
                subscribe{" "}
                <span className="text-[#EB4F55] text-6xl maxXl:text-3xl absolute right-[0] top-[-20px] font-ranika">
                  1
                </span>
              </h2>
              <p className="mt-2">
                Select your ideal plan. Start hassle-free, no strings attached..
              </p>
            </div>
            <div className="xl:!hidden p-6 rounded-lg shadow-cardShadow maxLg:!flex flex-col justify-end cardSmallArrowRes">
              <h2 className="text-[33px] leading-10 font-ranika relative">
                list tasks{" "}
                <span className="text-[#EB4F55] text-6xl maxXl:text-3xl absolute right-[0] top-[-20px] font-ranika">
                  2
                </span>
              </h2>
              <p className="mt-2">
                Tell us what you need; we'll handle the rest. Pour out all your
                design needs.
              </p>
            </div>
            <div className="xl:!hidden p-6 rounded-lg shadow-cardShadow maxLg:!flex flex-col justify-end order-4 cardSmallLeftArrowRes">
              <h2 className="text-[33px] leading-10 font-ranika relative">
                revise{" "}
                <span className="text-[#EB4F55] text-6xl maxXl:text-3xl absolute right-[0] top-[-20px] font-ranika">
                  3
                </span>
              </h2>
              <p className="mt-2">
                Enjoy the freedom of unlimited revisions, ensuring each detail
                aligns with your vision.
              </p>
            </div>
            <div className="p-6 rounded-lg shadow-cardShadow flex flex-col justify-end maxXl:order-3 maxMd:!order-4 ">
              <h2 className="text-[33px] leading-10 font-ranika relative">
                get <br /> delivery{" "}
                <span className="text-[#EB4F55] text-6xl maxXl:text-3xl absolute right-[0] top-[-20px] font-ranika">
                  4
                </span>
              </h2>
              <p className="mt-2">
                Receive designs within 2-5 days or less ensuring your
                satisfaction with every delivery.
              </p>
            </div>
            <div className="social-icons maxXl:hidden">
              <ul>
                <li>
                  <a href="#">
                    <img src={emailIocn} alt="email-icon" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img src={instagramIocn} alt="instagram-icon" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img src={facebookIocn} alt="facebook-icon" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img src={linkdinIocn} alt="linkdin-icon" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img src={xIocn} alt="twitter-icon" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="w-full xl:hidden ">
          <ul className="flex justify-between">
            <li>
              <a href="#">
                <img src={emailIocn} alt="email-icon" />
              </a>
            </li>
            <li>
              <a href="#">
                <img src={instagramIocn} alt="instagram-icon" />
              </a>
            </li>
            <li>
              <a href="#">
                <img src={facebookIocn} alt="facebook-icon" />
              </a>
            </li>
            <li>
              <a href="#">
                <img src={linkdinIocn} alt="linkdin-icon" />
              </a>
            </li>
            <li>
              <a href="#">
                <img src={xIocn} alt="twitter-icon" />
              </a>
            </li>
          </ul>
        </div>
      </section>
      <BusinessWorksTabs />
      <WhatCanIDo />
      <WhoIsItFor />
      <Price />
      <StartingOut />
      <SpecificProject />
      <Faq />
      <Footer />
    </>
  );
};

export default Home;
