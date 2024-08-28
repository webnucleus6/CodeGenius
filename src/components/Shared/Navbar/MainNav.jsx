import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

const MainNav = () => {
  const location = useLocation();
  const [isScroll, setIsScroll] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const scrollPositon = window.pageYOffset;
      setIsScroll(scrollPositon > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const links = [
    {
      path: "/",
      title: "Home",
    },
    {
      path: "/about",
      title: "About",
    },
    {
      path: "/services",
      title: "Services",
    },
    {
      path: "/portfolio",
      title: "Portfolio",
    },
    {
      path: "/contact-us",
      title: "Contact",
    },
  ];

  return (
    <div
      className={`border fixed w-full transition !duration-700 ease-in-out ${
        isScroll ? "bg-[#061A3A] text-white top-0 py-3" : "bg-white"
      }`}
    >
      <div className="navbar max-w-7xl w-full mx-auto px-0">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              {links.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className={`${
                      link.path === location.pathname
                        ? "border border-blue-500"
                        : ""
                    } btn px-4 py-2 `}
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <a className="btn btn-ghost  ">
            <div className="text-[0px]">
              {" "}
              <span className="text-xl">Code</span>
              <span className="text-2xl font-bold">Genius</span>
            </div>
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-3">
            {links.map((link) => (
              <li key={link.path}>
                <Link
                  to={link.path}
                  className={`${
                    link.path === location.pathname
                      ? "border border-blue-500"
                      : ""
                  }  px-4 py-2 rounded-full`}
                >
                  {link.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="navbar-end">
          <a className="btn">Button</a>
        </div>
      </div>
    </div>
  );
};

export default MainNav;
