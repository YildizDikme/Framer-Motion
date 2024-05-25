import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="flex flex-col items-center text-center text-surface text-white mt-10">
      <div className="container pt-9">
        <div className="mb-6 flex justify-center space-x-4">
          {socialIcons.map((icon, index) => (
            <a
              key={index}
              href={icon.href}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-transparent p-3 font-medium uppercase leading-normal text-surface transition duration-150 ease-in-out hover:bg-white hover:text-black focus:outline-none focus:ring-0"
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <icon.icon size={24} style={{ width: "18px", height: "18px" }} />
            </a>
          ))}
        </div>
      </div>
      <div className="w-full bg-black/5 p-4 text-center text-xs">
        © 2024 Copyright:{" "}
        <a
          href="https://tw-elements.com/"
          className=" hover:text-blue-700"
        >
          Yıldız Dikme
        </a>
      </div>
    </footer>
  );
};

const socialIcons = [
  { icon: FaFacebookF, href: "https://www.facebook.com" },
  { icon: FaTwitter, href: "https://www.twitter.com" },
  { icon: FaInstagram, href: "https://www.instagram.com" },
  { icon: FaLinkedinIn, href: "https://www.linkedin.com" },
];

export default Footer;
