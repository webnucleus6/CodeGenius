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
    <div className="px-4 sm:px-6 text-white sm:grid md:grid-cols-4 sm:grid-cols-2 mx-auto">
      <div className="p-5">
        <a className="btn btn-ghost  ">
            <div className="text-[0px]">
              {" "}
              <span className="text-xl">Code</span>
              <span className="text-2xl font-bold">Genius</span>
            </div>
          </a>
      </div>
      <div className="p-5">
        <div className="text-sm uppercase  font-bold">Services</div>
        <a className="my-3 block" href="/#">Branding <span className="text-teal-600 text-xs p-1"></span></a>
        <a className="my-3 block" href="/#">Design <span className="text-teal-600 text-xs p-1"></span></a>
        <a className="my-3 block" href="/#">Development <span className="text-teal-600 text-xs p-1">New</span></a>
      </div>
      <div className="p-5">
        <div className="text-sm uppercase  font-bold">Company</div>
        <a className="my-3 block" href="/#">Help Center <span className="text-teal-600 text-xs p-1"></span></a>
        <a className="my-3 block" href="/#">Privacy Policy <span className="text-teal-600 text-xs p-1"></span></a>
        <a className="my-3 block" href="/#">Conditions <span className="text-teal-600 text-xs p-1"></span></a>
      </div>
      <div className="p-5">
        <div className="text-sm uppercase  font-bold">Contact us</div>
        <ul className="flex items-center mt-5 gap-5">
          <li>
            <FaFacebook />
          </li>
          <li>
            <FaTwitter />
          </li>
          <li>
            <FaLinkedin />
          </li>
          <li>
            <FaInstagram />
          </li>
          <li>
            <FaYoutube />
          </li>
        </ul>
      </div>
    </div>

    <div className="bg-[#092349] py-4">
    <p className="text-white text-center text-sm">© 2024 CodeGenius. All rights reserved.</p>
    </div>
  </footer>
  );
};

export default Footer;
