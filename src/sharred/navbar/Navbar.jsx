import {FaChevronDown} from "react-icons/fa";
import logoImage from "../../assets/logo.png";
import {FaCartShopping} from "react-icons/fa6";

const Navbar = () => {
  const navLinks = (
    <>
      <li>
        <a className="navbar-btn-style">HOME</a>
        <div className="hover-effect transition duration-300 ease-in-out w-[0%] bg-transparent py-[2px] "></div>
      </li>
      <li className="group relative">
        <a className="cursor-pointer navbar-btn-style">
          SERVICES
          <FaChevronDown />
        </a>
        <div className="hover-effect transition duration-300 ease-in-out w-[0%] bg-transparent py-[2px] "></div>
        <ul className="bg-white z-10 p-2 w-56 rounded-none group-hover:block absolute top-8 hidden">
          <li>
            <a className="navbar-btn-style">iPhone Repair</a>
          </li>
          <li>
            <a className="navbar-btn-style">iPad Repair</a>
          </li>
          <li>
            <a className="navbar-btn-style">Mac Repair</a>
          </li>
          <li>
            <a className="navbar-btn-style">Apple Watch Repair</a>
          </li>
        </ul>
      </li>
      <li className="group/outer relative">
        <a className="cursor-pointer navbar-btn-style">
          SHOP
          <FaChevronDown />
        </a>
        <div className="hover-effect transition duration-300 ease-in-out w-[0%] bg-transparent py-[2px] "></div>
        <ul className="bg-white z-10 p-2 group-hover/outer:block hidden absolute top-8 w-56">
          <li className="group/inner relative">
            <a className="cursor-pointer flex justify-between navbar-btn-style">
              By Device
              <FaChevronDown />
            </a>
            <ul className="bg-white z-10 p-2 group-hover/inner:block hidden absolute left-full -mx-1 top-0 w-56">
              <li>
                <a className="navbar-btn-style">iPhone</a>
              </li>
              <li>
                <a className="navbar-btn-style">iPad</a>
              </li>
              <li>
                <a className="navbar-btn-style">Macbook</a>
              </li>
              <li>
                <a className="navbar-btn-style">Apple Watch</a>
              </li>
            </ul>
          </li>
          <li className="group/inner relative">
            <a className="cursor-pointer flex justify-between navbar-btn-style">
              By Category <FaChevronDown />
            </a>
            <ul className="bg-white z-10 p-2 group-hover/inner:block hidden absolute left-full top-0 w-56 -mx-1">
              <li>
                <a className="navbar-btn-style">case & protection</a>
              </li>
              <li>
                <a className="navbar-btn-style">Display</a>
              </li>
              <li>
                <a className="navbar-btn-style">Battery</a>
              </li>
              <li>
                <a className="navbar-btn-style">Headphones & Speaker</a>
              </li>
              <li>
                <a className="navbar-btn-style">Power and Cables</a>
              </li>
              <li>
                <a className="navbar-btn-style">Mouse & keypad</a>
              </li>
              <li>
                <a className="navbar-btn-style">Wearables</a>
              </li>
            </ul>
          </li>
          <li className="group/inner relative">
            <a className="cursor-pointer flex justify-between navbar-btn-style">
              By Brands
              <FaChevronDown />
            </a>
            <ul className="bg-white z-10 p-2 group-hover/inner:block hidden absolute left-full top-0 w-56 -mx-1">
              <li>
                <a className="navbar-btn-style">Apple</a>
              </li>
              <li>
                <a className="navbar-btn-style">Anker</a>
              </li>
              <li>
                <a className="navbar-btn-style"> Baykron</a>
              </li>
              <li>
                <a className="navbar-btn-style">iFixit</a>
              </li>
              <li>
                <a className="navbar-btn-style">Mcdodo</a>
              </li>
              <li>
                <a className="navbar-btn-style">Aspor</a>
              </li>
              <li>
                <a className="navbar-btn-style">JBL</a>
              </li>
              <li>
                <a className="navbar-btn-style">UGREEN</a>
              </li>
              <li>
                <a className="navbar-btn-style">ACEFAST</a>
              </li>
              <li>
                <a className="navbar-btn-style">Zeblaze</a>
              </li>
            </ul>
          </li>
        </ul>
      </li>
      <li>
        <a className="navbar-btn-style">BLOG</a>
        <div className="hover-effect transition duration-300 ease-in-out w-[0%] bg-transparent py-[2px] "></div>
      </li>
      <li>
        <a className="navbar-btn-style">ABOUT</a>
        <div className="hover-effect transition duration-300 ease-in-out w-[0%] bg-transparent py-[2px] "></div>
      </li>
      <li>
        <a className="navbar-btn-style">CONTACT US</a>
        <div className="hover-effect transition duration-300 ease-in-out w-[0%] bg-transparent py-[2px] "></div>
      </li>
    </>
  );

  return (
    <div className="navbar bg-base-100 max-w-screen-xl mx-auto">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="lg:hidden md:pl-4 pt-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </div>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow w-52">
            {navLinks}
          </ul>
        </div>
        <a className="">
          <img className="h-12 lg:ml-0 md:ml-12 ml-12" src={logoImage} />
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navLinks}</ul>
      </div>
      {/* cart items */}

      <div className="navbar-end flex justify-end items-center">
        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
          <div className="indicator relative">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 absolute right-12"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>

            <FaCartShopping className="absolute right-5" />
            <span className="bg-[#f96331] text-white badge badge-md  indicator-item">0</span>
          </div>
        </div>
        <a className="md:hover:bg-[#f96331] hover:text-white hidden  btn md:flex justify-center  rounded-none bg-transparent border-[#f96331]">Login</a>
      </div>
    </div>
  );
};

export default Navbar;
