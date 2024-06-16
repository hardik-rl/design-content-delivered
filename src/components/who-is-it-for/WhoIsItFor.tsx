import img1 from "../../assets/images/icons/e-commerce.svg";
import img2 from "../../assets/images/icons/sass.svg";
import img3 from "../../assets/images/icons/startups.svg";
import img4 from "../../assets/images/icons/coach.svg";

const WhoIsItFor = () => {
  const items = [
    {
      imgSrc: img1,
      title: "Ecommerce",
      description:
        "Scale your e-commerce venture with eye-catching designs and persuasive content that drive traffic and convert shoppers.",
    },
    {
      imgSrc: img2,
      title: "SaaS",
      description:
        "Enhance your interface with user-centric designs and clear, impactful content that retains users and reduces churn.",
    },
    {
      imgSrc: img3,
      title: "Startups",
      description:
        "Stand out with unique branding and strategic design that captures attention and accelerates growth.",
    },
    {
      imgSrc: img4,
      title: "Coach",
      description:
        "Connect and inspire with personalized branding and content that resonates with your audience's journey.",
    },
  ];
  return (
    <>
      <div className="md:mt-20 mt-10 text-center max-w-lg mx-auto">
        <h2 className="title w-fit mx-auto">who is it for?</h2>
        <p className="mt-8">
          For every business leader that needs compelling design and content to
          tell their story and engage customers effectively.
        </p>
      </div>
      <div>
        <ul className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 md:mt-20 mt-10">
          {items.map((item, index) => (
            <li
              className="text-center transition rounded cursor-pointer p-4 hover:shadow-custom group"
              key={index}
            >
              <img
                src={item.imgSrc}
                alt=""
                className="md:w-12 transition w-8 mx-auto group-hover:origin-top-left group-hover:rotate-6"
              />
              <h5 className="md:mt-10 mt-5 mb-3 md:text-xl text-lg font-bold group-hover:text-fireOpal">
                {item.title}
              </h5>
              <p>{item.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default WhoIsItFor;
