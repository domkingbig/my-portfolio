import Image from 'next/image';
import React from "react";
import '../styles/Footer.module.css'

const Footer = () => {
  return (
    <footer className="footer z-10 border border-l-transparent border-r-transparent border-t-[#33353F] text-white">
      <div className="container flex justify-between p-12">
        <span  >
          {/* <Image
              src="/images/logo.png"
              alt="logo-image"
              className=" absolute  -translate-x-1/2 -translate-y-1/2 transform custom-left-23"
              width={90}
              height={90}
            /> */}
            </span>
        <p className="text-slate-600">All right reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;