import React from "react";

const Header = () => {
  return (
    <div className="navbar relative px-2 md:px-10">
      <div className="navbar-start">
        <img src="/framer-motion.svg" alt="Logo" className="h-8 w-8" />
      </div>
      <div className="navbar-end">
        <button className="btn-grad">Get Started</button>
      </div>
    </div>
  );
};

export default Header;
