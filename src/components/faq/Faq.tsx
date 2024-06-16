/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";

const Faq = () => {
  const faqs = [
    {
      question: "Why not hire a freelancer or a full-time designer?",
      id: 1,
      answer:
        "Hiring a full-time designer can be a significant financial commitment, often exceeding $70- 100K a year, plus benefits. And finding a skilled designer available full-time is not always easy, I have tried and tested freelancers, you know how it is. My service provides an affordable, flexible alternative. You can pause and resume your subscription based on your project flow, ensuring you only pay when you have design needs.",
    },
    {
      question: "What if I run out of design work?",
      id: 2,
      answer:
        "Flowbite is first conceptualized and designed using the Figma software so everything you see in the library has a design equivalent in our Figma file. Check out the Figma design system based on the utility classes from Tailwind CSS and components from Flowbite.",
    },
    {
      question: "How do I manage my subscription?",
      id: 3,
      answer:
        "The main difference is that the core components from Flowbite are open source under the MIT license, whereas Tailwind UI is a paid product. Another difference is that Flowbite relies on smaller and standalone components, whereas Tailwind UI offers sections of pages. However, we actually recommend using both Flowbite, Flowbite Pro, and even Tailwind UI as there is no technical reason stopping you from using the best of two worlds.",
    },
  ];

  const [openAccordionId, setOpenAccordionId] = useState(null);

  // Function to handle click on accordion item
  const handleAccordionClick = (id: any) => {
    setOpenAccordionId(id === openAccordionId ? null : id);
  };

  return (
    <div className="my-20 max-w-3xl mx-auto">
      <div className="text-center max-w-xl mx-auto mb-8">
        <h2 className="title title--center">FAQs</h2>
      </div>

      {faqs.map((faq, index) => (
        <div key={index}>
          <h2 className={`${!openAccordionId && "border-b border-black"}`}>
            <button
              type="button"
              onClick={() => handleAccordionClick(faq.id)}
              className="flex text-theend items-center justify-between w-full py-4 font-medium rtl:text-right gap-3"
            >
              <span>{faq.question}</span>

              <div
                className={`triangle_down ${
                  openAccordionId === faq.id && "rotate-180"
                }`}
              ></div>
            </button>
          </h2>
          {openAccordionId === faq.id && (
            <div aria-labelledby={`accordion-collapse-heading-${index + 1}`}>
              <div>
                <p className="mb-2 text-quartz">{faq.answer}</p>
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Faq;
