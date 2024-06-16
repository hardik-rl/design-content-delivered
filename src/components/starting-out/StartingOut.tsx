const StartingOut = () => {
  return (
    <div>
      <div className="md:mt-20 mb-10 mt-10 text-center max-w-lg mx-auto">
        <h2 className="title w-fit mx-auto">starting out?</h2>
        <p className="mt-8">
          Affordable, One-Time Packages to Launch Your Vision
        </p>
      </div>
      <div className="grid xl:grid-cols-3 md:grid-cols-2 gap-4">
        <div className="shadow-custom flex justify-between flex-col rounded-xl bg-isabelline md:p-7 p-4">
          <div>
            <h1 className="text-xl font-medium xl:-mt-2 mt-4 xl:max-w-40 mb-2">
              Branding
            </h1>
            <p>
              Get a complete branding package designed to make your brand stand
              out and resonate with your audience.
            </p>
          </div>

          <div className="details-card mt-7 maxLg:flex-wrap flex items-end gap-3 shadow-none after:hidden px-6 py-3">
            <ul>
              <li className="!mb-2">Logo</li>
              <li className="!mb-2">Brand Colors</li>
              <li className="!mb-2">Brand Patterns</li>
              <li className="!mb-2">Typography</li>
              <li className="!mb-2">Brand guideline</li>
              <li className="!mb-2">Unlimited Revisions</li>
            </ul>
            <div className="my-3 text-center">
              <p className="text-center text-sm pb-3">one-time payment</p>
              <h1 className="xl:text-3xl text-xl font-bold text-[#2A2A2A] mb-5">
                $750
              </h1>
              <button className="btn-primary text-sm w-full text-isabelline">
                buy now
              </button>
            </div>
          </div>
        </div>
        <div className="shadow-custom flex justify-between flex-col rounded-xl bg-isabelline md:p-7 p-4">
          <div>
            <h1 className="text-xl font-medium xl:-mt-2 mt-4 xl:max-w-40 mb-2">
              Jump-start
            </h1>
            <p>
              Combines branding and essential web elements ready to make an
              imapct
            </p>
          </div>

          <div className="details-card mt-7 flex maxLg:flex-wrap items-end gap-3 shadow-none after:hidden px-6 py-3">
            <ul>
              <li className="!mb-2">Complete Branding</li>
              <li className="!mb-2">10 Custom Graphics</li>
              <li className="!mb-2">3 Email Templates</li>
              <li className="!mb-2">1 Landing Page</li>
              <li className="!mb-2">Unlimited Revisions</li>
            </ul>
            <div className="my-3 text-center">
              <p className="text-center text-sm pb-3">one-time payment</p>
              <h1 className="xl:text-3xl text-xl font-bold text-[#2A2A2A] mb-5">
                $1095
              </h1>
              <button className="btn-primary text-sm w-full text-isabelline">
                buy now
              </button>
            </div>
          </div>
        </div>
        <div className="shadow-custom flex justify-between flex-col rounded-xl bg-isabelline md:p-7 p-4">
          <div>
            <h1 className="text-xl font-medium xl:-mt-2 mt-4 xl:max-w-40 mb-2">
              Visual Essentials
            </h1>
            <p>
              This package offers essential design elements to enhance your
              digital presence and engage your audience effectively.
            </p>
          </div>

          <div className="details-card mt-7 flex maxLg:flex-wrap items-end gap-3 shadow-none after:hidden px-6 py-3">
            <ul>
              <li className="!mb-2">10 Custom Graphics</li>
              <li className="!mb-2">1 Landing Page</li>
              <li className="!mb-2">3 Email Template</li>
              <li className="!mb-2">Unlimited Revisions</li>
            </ul>
            <div className="my-3 text-center">
              <p className="text-center text-sm pb-3">one-time payment</p>
              <h1 className="xl:text-3xl text-xl font-bold text-[#2A2A2A] mb-5">
                $450
              </h1>
              <button className="btn-primary w-full text-sm text-isabelline">
                buy now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StartingOut;
