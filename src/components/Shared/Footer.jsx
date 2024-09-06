import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa6";
const Footer = () => {
  return (
    <footer className="bg-[#061A3A] mt-8 md:mt-20 lg:mt-48 pt-5">
      <div className="px-4 sm:px-6 text-white flex flex-col items-center md:items-start md:flex-row justify-between">
        <div className="p-5 text-center md:text-start">
          <a href="#" className="">
            <div className="text-[0px]">
              {" "}
              <span className="text-xl">Code</span>
              <span className="text-2xl font-bold">Genius</span>
            </div>
          </a>
        </div>
        <div className="p-5 text-center md:text-start">
          <div className="text-sm uppercase  font-bold">Services</div>
          <a className="my-3 block" href="/#">
            Branding <span className="text-teal-600 text-xs p-1"></span>
          </a>
          <a className="my-3 block" href="/#">
            Design <span className="text-teal-600 text-xs p-1"></span>
          </a>
          <a className="my-3 block" href="/#">
            Development
          </a>
        </div>
        <div className="p-5 text-center md:text-start">
          <div className="text-sm uppercase  font-bold">Company</div>
          <a className="my-3 block" href="/#">
            Help Center <span className="text-teal-600 text-xs p-1"></span>
          </a>
          <a className="my-3 block" href="/#">
            Privacy Policy <span className="text-teal-600 text-xs p-1"></span>
          </a>
          <a className="my-3 block" href="/#">
            Conditions <span className="text-teal-600 text-xs p-1"></span>
          </a>
        </div>
        <div className="p-5 text-center md:text-start">
          <div className="text-sm uppercase  font-bold">Contact us</div>
          <ul className="flex items-center justify-center sm:justify-start mt-5 gap-5">
            <li>
              <a href="#">
                <FaFacebook />
              </a>
            </li>
            <li>
              <a href="#">
                <FaTwitter />
              </a>
            </li>
            <li>
              <a href="#">
                {" "}
                <FaLinkedin />
              </a>
            </li>
            <li>
              <a href="#">
                <FaInstagram />
              </a>
            </li>
            <li>
              <a href="#">
                <FaYoutube />
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="bg-[#092349] py-4">
        <p className="text-white text-center text-sm">
          © 2024 CodeGenius. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
