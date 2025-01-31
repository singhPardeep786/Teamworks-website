import React from "react";
import MagnetBtn from "../magnetBtn/MagnetBtn";
import { Link, useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="w-[100%] mx-auto bg-amber-200 rounded-t-4xl mt-20">
        <section className="wrapper overflow-hidden ">
          <div className="flex items-center flex-col justify-center w-full h-screen">
            <div>
              <MagnetBtn />
            </div>
            <div className="w-full md:w-[70%] lg:w-[50%] flex flex-col md:flex-row justify-between gap-5 mt-20">
              <div className="w-full md:w-[60%] footer_content">
                <h3 className="text-3xl">Address - </h3>
                <p className="w-full md:w-[100%] mt-2">
                  1st floor, New mark House, Patrika Nagar, Madhapur, Hyderabad,
                  Telangana 500081
                </p>
                <p className="mt-5 ">&copy;Teamworks New Media 2025</p>
              </div>
              <div className="w-full md:w-[80%]">
                <div className="w-full md:w-[50%] ms-auto">
                  <h3 className="text-3xl lg:text-[1.7rem]">Connect - </h3>
                  <div className="flex gap-1 mt-2 footer_content">
                    <p className="font-bold md:text-sm lg:text-[1rem]">Email:</p>
                    <Link
                      to="mailto:naveenpujala@teamworks.in"
                      className="font-medium footer_link md:text-sm lg:text-[1rem]"
                    >
                      naveenpujala@teamworks.in
                    </Link>
                  </div>
                  <div className="flex gap-1 mt-1 footer_content">
                    <p className="font-bold md:text-sm lg:text-[1rem]">Phone:</p>
                    <a href="tel:+91 9948621234" className="footer_link md:text-sm lg:text-[1rem]">
                      {" "}
                      +91 9948621234
                    </a>
                  </div>
                  <Link to="/privacy" onClick={() => { navigate('/privacy', { replace: true }); window.scrollTo(0, 0); }} className="mt-5 inline-block futura footer_link">Privacy Policy</Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Footer;
