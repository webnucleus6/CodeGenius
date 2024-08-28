import React from "react";
import NavTop from "./NavTop";
import MainNav from "./MainNav";

const Navbar = () => {
  return (
    <div>
      <div className="">
        <NavTop />
        <div>
          <MainNav />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
