import email from "../../assets/images/icons/email.svg";
import instagram from "../../assets/images/icons/instagram.svg";
import fb from "../../assets/images/icons/fb.svg";
import linkedin from "../../assets/images/icons/linkedin.svg";
import twitter from "../../assets/images/icons/twitter.svg";

const Footer = () => {
  return (
    <div className="grid md:grid-cols-3 gap-10">
      <p>
        Embarking on a creative venture should be exciting and seamless. That's
        why I'm here to make the process as straightforward and enjoyable as
        possible. Whether you have a question, a project idea, or just want to
        discuss the potential of working together, I'm all ears.
      </p>
      <div className="text-center transition hover:shadow-default py-3 px-10 rounded-lg bg-[#F0EBE6]">
        <p>reach out to me at</p>
        <ul className="flex items-start justify-center mt-8 gap-10 footer-social-media">
          <li>
            <a href="#0">
              <img src={email} alt="email" />
            </a>
          </li>
          <li>
            <a href="#0">
              <img src={instagram} alt="instagram" />
            </a>
          </li>
          <li>
            <a href="#0">
              <img src={fb} alt="fb" />
            </a>
          </li>
          <a href="#0">
            <img src={linkedin} alt="linkedin" />
          </a>
          <li>
            <a href="#0">
              <img src={twitter} alt="twitter" />
            </a>
          </li>
        </ul>
        <p className="mt-10 border-t border-black pt-8">
          book your free consultation today
        </p>
        <button className="btn-primary text-sm text-isabelline mt-8">
          book now
        </button>
      </div>
      <ul className="space-y-3 lg:pl-10 md:pl-5">
        <li>
          <a href="#0">Terms & Condition</a>
        </li>
        <li>
          <a href="#0">Privacy Policy</a>
        </li>
        <li>
          <a href="#0">Free Resources</a>
        </li>
      </ul>
    </div>
  );
};

export default Footer;
