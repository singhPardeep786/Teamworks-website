import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { useForm } from "react-hook-form";

const ContactForm = () => {
  const formRef = useRef(null);
  const titleRef = useRef(null);
  const formElementsRef = useRef([]);

  const leftOverlayRef = useRef(null);

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

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    reset(); // Clear form after submission
  };

  useEffect(() => {
    gsap.fromTo(
      titleRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, ease: "power3.out" }
    );

    gsap.fromTo(
      formRef.current,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 1, ease: "power3.out", delay: 0.5 }
    );

    gsap.fromTo(
      formElementsRef.current,
      { opacity: 0, y: 15 },
      {
        opacity: 1,
        y: 0,
        stagger: 0.05,
        duration: 0.8,
        ease: "power3.out",
        delay: 1,
      }
    );
  }, []);

  return (
    <>
      <div
        ref={leftOverlayRef}
        className="fixed top-0 left-0 w-full h-full overlay_color z-[99]"
        style={{ transformOrigin: "bottom" }}
      />
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
        <h6
          ref={titleRef}
          className="uppercase text-4xl font-bold text-gray-800 mb-8"
        >
          Let's work together
        </h6>

        <div
          ref={formRef}
          className="bg-white rounded-3xl shadow-lg p-6 md:p-8 flex flex-col md:flex-row items-center max-w-3xl w-full"
        >
          {/* Left Section - Form */}
          <div className="flex-1 w-full">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <input
                type="text"
                {...register("name", { required: true })}
                placeholder="Enter your name"
                ref={(el) => (formElementsRef.current[0] = el)}
                className="w-full p-3 border-b focus:outline-none focus:border-gray-700"
              />
              {errors.name && (
                <span className="text-red-500 text-sm">Name is required.</span>
              )}

              <input
                type="email"
                {...register("email", { required: true })}
                placeholder="Enter your email"
                ref={(el) => (formElementsRef.current[1] = el)}
                className="w-full p-3 border-b focus:outline-none focus:border-gray-700"
              />
              {errors.email && (
                <span className="text-red-500 text-sm">
                  Valid email required.
                </span>
              )}

              <input
                type="tel"
                {...register("phone", {
                  required: true,
                  pattern: /^\+?\d{10,13}$/,
                })}
                placeholder="Enter your phone number"
                ref={(el) => (formElementsRef.current[2] = el)}
                className="w-full p-3 border-b focus:outline-none focus:border-gray-700"
              />
              {errors.phone && (
                <span className="text-red-500 text-sm">
                  Valid phone number required.
                </span>
              )}

              <p className="text-sm text-gray-700 mt-4">What is it about?</p>
              <textarea
                {...register("message", { required: true })}
                placeholder="Please describe your project..."
                ref={(el) => (formElementsRef.current[3] = el)}
                className="w-full p-3 border-b focus:outline-none focus:border-gray-700 h-28 resize-none"
              />
              {errors.message && (
                <span className="text-red-500 text-sm">
                  Please describe your project.
                </span>
              )}

              <button
                type="submit"
                ref={(el) => (formElementsRef.current[4] = el)}
                className="w-full p-3 mt-4 rounded-2xl text-center cursor-pointer uppercase submit_button"
              >
                Submit
              </button>
            </form>
          </div>

          {/* Right Section - Image */}
          <div className="hidden md:block flex-1 ml-8 relative">
            <div className="w-full overflow-hidden rounded-3xl border border-gray-300 relative">
              <img
                src="images/sacramento_4.jpg"
                alt="Contact Illustration"
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactForm;
