import { useState } from "react";

const PriceTabs = () => {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index: React.SetStateAction<number>) => {
    setToggleState(index);
  };

  const getActiveClass = (index: number, className: string) =>
    toggleState === index ? className : "";
  return (
    <div className="price-tabs">
      <ul className="flex">
        <li
          className={`tabs ${getActiveClass(1, "active-tabs")}`}
          onClick={() => toggleTab(1)}
        >
          <button className="btn-light">Monthly</button>
        </li>
        <li
          className={`tabs ${getActiveClass(2, "active-tabs")}`}
          onClick={() => toggleTab(2)}
        >
          <button className="btn-primary -ml-2 -z-10 font-medium">Quarterly</button>
        </li>
      </ul>
      <div className="content-container">
        <div
          className={`content grid lg:grid-cols-3 lg:gap-12 gap-6 ${getActiveClass(
            1,
            "active-content"
          )}`}
        >
          <div className="shadow-custom rounded-xl bg-isabelline md:p-7 p-4">
            <div className="text-right">
              <span className="btn-primary px-3.5 py-1.5 text-sm rounded shadow-custom">limited plans</span>
            </div>
            <h1 className="xl:text-2xl text-xl font-medium xl:-mt-2 mt-4 xl:max-w-40">
              unlimited graphics
            </h1>
            <p>
              Perfect for businesses seeking regular, high-quality visual
              content.
            </p>
            <h1 className="xl:text-3xl text-xl font-bold text-[#2A2A2A] mt-7">$ 1550/m</h1>
            <p className="mt-1">Paid Monthly.</p>
            <p>Pause or Cancel anytime.</p>
            <div className="my-3">
              <button className="btn-primary w-full text-isabelline">
                subscribe
              </button>
            </div>
            <a
              href="#0"
              className="underline block text-center border-b border-gray44/120 pb-3"
            >
              Book an Intro Call
            </a>
            <div className="details-card shadow-none after:hidden px-6 py-3">
              <ul>
                <li className="!mb-2">One request at a time</li>
                <li className="!mb-2">unlimited brands</li>
                <li className="!mb-2">unlimited revisions</li>
                <li className="!mb-2">unlimited requests</li>
                <li className="!mb-2">2-3 business day delivery</li>
                <li className="!mb-2">Dedicated Job Board</li>
                <li className="!mb-2">Pause or cancel anytime</li>
                <li className="!mb-2">Invite your team</li>
                <li>unlimited content writing</li>
              </ul>
            </div>
          </div>
          <div className="shadow-custom rounded-xl bg-isabelline md:p-7 p-4">
            <div className="text-right">
              <span className="btn-primary text-sm px-3.5 py-1.5 rounded shadow-custom">limited plans</span>
            </div>
            <h1 className="xl:text-2xl text-xl font-medium xl:-mt-2 mt-4 xl:max-w-40">
              unlimited everything
            </h1>
            <p>
              A comprehensive solution for all your design and content
              requirements.
            </p>
            <h1 className="xl:text-3xl text-xl font-bold text-[#2A2A2A] mt-7">$ 2850/m</h1>
            <p className="mt-1">Paid Monthly.</p>
            <p>Pause or Cancel anytime.</p>
            <div className="my-3">
              <button className="btn-primary w-full text-isabelline">
                subscribe
              </button>
            </div>
            <a
              href="#0"
              className="underline block text-center border-b border-gray44/120 pb-3"
            >
              Book an Intro Call
            </a>
            <div className="details-card shadow-none after:hidden px-6 py-3">
              <ul>
                <li className="!mb-2">One request at a time</li>
                <li className="!mb-2">unlimited brands</li>
                <li className="!mb-2">unlimited revisions</li>
                <li className="!mb-2">unlimited requests</li>
                <li className="!mb-2">2-3 business day delivery</li>
                <li className="!mb-2">Dedicated Job Board</li>
                <li className="!mb-2">Pause or cancel anytime</li>
                <li className="!mb-2">Invite your team</li>
                <li>unlimited content writing</li>
              </ul>
            </div>
          </div>
          <div>
            <h2 className="title">unlimited plans</h2>
            <p className="mt-8">
              Choose a Subscription That Aligns Perfectly with Your Needs
            </p>
            <p className="mt-10">
              Opt for a quarterly commitment and enjoy significant savings.
              Benefit from consistent, quality creative services while managing
              your budget more effectively.
            </p>
            <p className="mt-6">
              Most requests take 2 days or less to complete unless a complex
              task is being carried out.
            </p>
            <hr className="mt-16 mb-8" />
            <p>
              Learn more about how NoExpertClub works and how it can help you.
            </p>
            <a href="#0" className="underline block font-medium mt-3 mb-8">
              Book a Call
            </a>
            <p className="max-w-48">
              need custom quote? Share your requirements
            </p>
            <a href="#0" className="underline block font-medium my-3">
              Fill out the form
            </a>
          </div>
        </div>
        <div className={`content ${getActiveClass(2, "active-content")}`}>
          <h1>Comming Soon</h1>
        </div>
      </div>
    </div>
  );
};

export default PriceTabs;
