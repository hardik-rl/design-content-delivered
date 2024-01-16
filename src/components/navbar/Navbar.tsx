import { useState } from 'react';
import logo from "../../assets/images/icons/logo.svg"
// import { ReactComponent as Logo } from "../../assets/images/icons/logo.svg";


function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <div className="flex items-center flex-shrink-0 text-white mr-6 md:mr-[7rem]">
              <img src={logo} alt="logo" />
            </div>
            <nav>
                <div className="block md:hidden">
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="flex items-center px-3 py-2 rounded text-black-500 hover:text-black-400"
                    >
                        <svg
                            className={`fill-current h-3 w-3 ${isOpen ? "hidden" : "block"}`}
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
                        </svg>
                        <svg
                            className={`fill-current h-3 w-3 ${isOpen ? "block" : "hidden"}`}
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z" />
                        </svg>
                    </button>
                </div>
                <div
                    className={`w-full block flex-grow md:flex md:items-center md:w-auto ${isOpen ? "block" : "hidden"}`}
                >
                    <div className="nav-list">
                        <ul className='list-[circle]'>
                            <li>
                                <a href="#" className="block mt-4 md:inline-block md:mt-0 text-white-200 mr-4">
                                    projects
                                </a>
                            </li>
                            <li>
                                <a href="#" className="block mt-4 md:inline-block md:mt-0 text-white-200 mr-4">
                                    plans
                                </a>
                            </li> <li>
                                <a href="#" className="block mt-4 md:inline-block md:mt-0 text-white-200 mr-4">
                                    scope of work
                                </a>
                            </li> <li>
                                <a href="#" className="block mt-4 md:inline-block md:mt-0 text-white-200 mr-4">
                                    FAQs
                                </a>
                            </li>
                            <li>    <a href="#" className="block mt-4 md:inline-block md:mt-0 text-white-200 mr-4">
                                contact
                            </a></li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
}
export default Navbar;