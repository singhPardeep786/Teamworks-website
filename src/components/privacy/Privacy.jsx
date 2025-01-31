import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { Link, useNavigate } from "react-router-dom";

const Privacy = () => {
  const leftOverlayRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const tl = gsap.timeline();
    tl.to(leftOverlayRef.current, {
      yPercent: -100,
      duration: 0.8,
      ease: "power4.inOut",
      borderBottomLeftRadius: "50%",
      borderBottomRightRadius: "50%",
      onComplete: () => {
        leftOverlayRef.current.style.display = "none";
        const tl2 = gsap.timeline();
        tl2.fromTo(
          ".about_us_word",
          {
            opacity: 0,
            y: 20,
          },
          {
            opacity: 1,
            y: 0,
            stagger: 0.03,
            duration: 0.5,
          }
        );
      },
    });
  }, []);

  return (
    <>
      <div
        ref={leftOverlayRef}
        className="fixed top-0 left-0 w-full h-full overlay_color z-[99]"
      />
      <section className="wrapper py-16 px-5">
        <div className="privacy_policy text-center mt-10 bg-white shadow-lg rounded-lg p-10 max-w-4xl mx-auto">
          <div className="relative">
            <h2 className="futura font-bold uppercase text-3xl text-gray-800">Privacy Policy</h2>
            <h3 className="futura font-semibold uppercase text-xl text-gray-600 mt-2">Teamworks New Media Pvt. Ltd.</h3>
            <div className="privacy_content mt-6 text-start text-gray-700">
              <p className="leading-relaxed">
                At <strong>Teamworks New Media Pvt. Ltd.</strong>, we value the privacy of our customers and are committed to protecting your personal data. This Privacy Policy outlines the types of information we collect, how we use it, and the steps we take to ensure your privacy while you interact with our website, services, and business operations.
              </p>
              
              <h3 className="font-bold mt-6 text-lg text-gray-800">Personal Information</h3>
              <p className="mt-2 leading-relaxed">
                When you use our website or services, we may collect personal information such as your name, email address, phone number, company details, and other relevant data necessary to provide our services related to real estate and branding.
              </p>
              
              <h3 className="font-bold mt-6 text-lg text-gray-800">How We Use Your Information</h3>
              <p className="mt-2 leading-relaxed">
                We use the collected information to provide, maintain, and improve our services. This includes:
              </p>
              <ul className="list-disc list-inside mt-2">
                <li className="bg-gray-100 p-2 rounded-lg mb-2">Responding to inquiries and customer support requests.</li>
                <li className="bg-gray-100 p-2 rounded-lg mb-2">Personalizing user experience and providing relevant service offerings.</li>
                <li className="bg-gray-100 p-2 rounded-lg mb-2">Improving our website and business operations.</li>
                <li className="bg-gray-100 p-2 rounded-lg mb-2">Complying with legal obligations and industry regulations.</li>
              </ul>
              
              <h3 className="font-bold mt-6 text-lg text-gray-800">Data Security</h3>
              <p className="mt-2 leading-relaxed">
                We implement appropriate security measures to protect your personal information from unauthorized access, alteration, or disclosure. However, while we strive to ensure complete security, no online data transmission is 100% secure.
              </p>
              
              <h3 className="font-bold mt-6 text-lg text-gray-800">Third-Party Disclosure</h3>
              <p className="mt-2 leading-relaxed">
                We do not sell, trade, or otherwise transfer your personal information to outside parties unless required by law or with your explicit consent.
              </p>
              
              <h3 className="font-bold mt-6 text-lg text-gray-800">Your Rights</h3>
              <p className="mt-2 leading-relaxed">
                You have the right to access, update, or delete your personal information. If you wish to exercise these rights, please contact us using the information provided below.
              </p>
              
              <p className="mt-4 leading-relaxed">
                For more information or to request access to your personal information, please <Link to="/contact" onClick={() => { navigate('/contact', { replace: true }); window.scrollTo(0, 0); }} className="text-blue-600 font-medium hover:underline">contact us</Link>.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Privacy;
