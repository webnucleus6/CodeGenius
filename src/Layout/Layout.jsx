import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Shared/Navbar/Navbar";

const Layout = () => {
  useEffect(() => {
    const cursorDot = document.querySelector(".cursor-dot");
    const cursorOutline = document.querySelector(".cursor-outline");
    document.addEventListener("mousemove", (e) => {
      const posX = e.clientX;
      const posY = e.clientY;
      cursorDot.style.left = `${posX}px`;
      cursorDot.style.top = `${posY}px`;
      cursorOutline.style.left = `${posX}px`;
      cursorOutline.style.top = `${posY}px`;
    });

    return () => {
      document.removeEventListener("mousemove", (e) => {
        const posX = e.clientX;
        const posY = e.clientY;
        cursorDot.style.left = `${posX}px`;
        cursorDot.style.top = `${posY}px`;
        cursorOutline.style.left = `${posX}px`;
        cursorOutline.style.top = `${posY}px`;
      });
    };
  }, []);

  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div className="h-[1000px]">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
