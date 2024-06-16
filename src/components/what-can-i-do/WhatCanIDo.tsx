const WhatCanIDo = () => {
  const listItems = [
    "Logo",
    "Typography",
    "Brand Guidelines",
    "Brand Colors",
    "Brand Patterns",
    "Stationery",
    "Packaging",
    "Labels",
    "Email Templates",
  ];
  const websitesList = [
    "Landing Pages",
    "Lead pages",
    "Online Store",
    "Membership Areas",
  ];
  const webAppList = ["Dashboards", "Onboading flows"];
  const graphicsItems = [
    "social media graphics",
    "ad creatives",
    "Ebooks",
    "Custom Illustrations",
    "Icons",
    "Static Ads",
  ];
  return (
    <div className="grid lg:grid-cols-2 gap-6 mt-20">
      <div className="flex maxMd:flex-wrap gap-6">
        <div className="md:w-1/2 w-full">
          <div className="shadow-custom transition hover:shadow-default md:p-10 p-5 rounded-lg">
            <h2 className="text-3xl leading-10 text-gray44 font-ranika relative">
              Branding
            </h2>
            <ul className="mt-10 space-y-2">
              {listItems.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
          <div className="shadow-custom transition hover:shadow-default md:p-10 p-5 mt-6 rounded-lg">
            <h2 className="text-3xl leading-10 text-gray44 font-ranika relative">
              Websites
            </h2>
            <ul className="mt-5 space-y-2">
              {websitesList.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
        <div className="md:w-1/2 w-full">
          <div className="flex flex-col h-full">
            <div className="shadow-custom transition hover:shadow-default md:p-10 p-5 rounded-lg">
              <h2 className="text-3xl leading-10 text-gray44 font-ranika relative">
                Web Apps
              </h2>
              <ul className="mt-5 space-y-2">
                {webAppList.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
            <div className="shadow-custom transition hover:shadow-default mt-6 md:p-10 p-5 rounded-lg flex items-center flex-1">
              <h2 className="text-3xl leading-10 text-gray44 font-ranika relative">
                Mobile Apps
              </h2>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col maxLg:mt-10">
        <div>
          <h2 className="title max-w-80 mx-auto">what I can do for you?</h2>
          <p className="mt-8 max-w-80 mx-auto">
            Elevate Your Brand's Essence, Streamlining Customer Journeys, and
            Crafting Distinctive Digital Impressions.
          </p>
        </div>
        <div className="shadow-custom transition hover:shadow-default md:p-10 p-5 rounded-lg md:mt-20 mt-10 flex-1">
          <h2 className="text-3xl leading-10 text-gray44 font-ranika relative">
            Graphics
          </h2>
          <ul className="mt-5 space-y-2">
            {graphicsItems.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default WhatCanIDo;
