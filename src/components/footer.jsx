import React from "react";
import { BsFacebook, BsInstagram, BsLinkedin, BsTwitter } from "react-icons/bs";

const Footer = () => {
  return (
    <div className="main bg-gray-700 sticky ">
      <div className="uperSection flex  ">
        <div className="left-section flex flex-[3] justify-between  items-center  gap-10  px-10     pt-10">
          <div className="first mb-20 ">
            <h3 className=" text-xl font-bold mb-5  text-white">
              For Business
            </h3>
            <h6>Employer</h6>
            <h6>Months plan</h6>
            <h6>Individual</h6>
          </div>
          <div className="mb-20">
            <h3 className=" text-xl font-bold mb-5 text-white">Resources</h3>
            <h6>Resources center</h6>
            <h6>Testomonials</h6>
            <h6>STD</h6>
          </div>
          <div className="mb-20">
            <h3 className=" text-xl font-bold mb-5 sticky text-white">
              Partners
            </h3>
            <h6>Swing Tech</h6>
            <h6>Mercantile</h6>
            <h6>Esewa</h6>
          </div>
          <div className="mb-20">
            <h3 className=" text-xl font-bold mb-5 pt-5 text-white">Company</h3>
            <h6>About</h6>
            <h6>Press</h6>
            <h6>Carrer</h6>
            <h6>contact</h6>
          </div>
        </div>
        <div className="right-section flex flex-[1] justify-center p-10  ">
          <div>
            <h3 className="text-xl font-bold mb-5 text-white ">
              Coming soon On
            </h3>
            <div className="icons flex justify-center items-center gap-5 text-3xl text-orange-600">
              <BsFacebook />
              <BsTwitter />
              <BsInstagram />
              <BsLinkedin />
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-white mx-10 mb-10"></div>
      <div className="lower flex justify-between px-10 py-5 pb-10  ">
        <div className="left font-serif  ">
          <h5>@2023 Codelnn. All right reserved</h5>
        </div>
        <div className="right flex items-center gap-8  font-serif">
          <p>Terms & Conditions</p>
          <p>Privacy</p>
          <p>Security </p>
          <p>Cookies Declaration</p>
        </div>
      </div>
    </div>
  );
  // <div className=" bg-gray-700 text-white text-center py-10 px-10 text-3xl">
  //   &copy;BigMart, 2023
  // </div>;
};

export default Footer;
