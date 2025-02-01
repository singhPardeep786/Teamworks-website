import { useState, useEffect, useRef } from "react";
import emailjs from "emailjs-com";
import { gsap } from "gsap";

const Contact = () => {

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
  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    project: "",
  });

  const [errors, setErrors] = useState({});
  const formRef = useRef(null);

  const validate = () => {
    let newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    } else if (formData.name.length < 3) {
      newErrors.name = "Name must be at least 3 characters";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Enter a valid email";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!/^\d{10}$/.test(formData.phone)) {
      newErrors.phone = "Enter a valid 10-digit phone number";
    }

    if (!formData.project.trim()) {
      newErrors.project = "Project description is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validate()) {
      emailjs
        .send(
          "service_nzb32uc", // Service ID
          "template_2rzh2kk", // Template ID
          {
            from_name: formData.name, // Corrected to use 'from_name' as per emailjs template
            from_email: formData.email, // 'from_email' corresponds to the email address of the sender
            phone: `${formData.phone}`, // 'phone' is the phone number
            message: formData.project, // Added 'message' field to send textarea content
            to_email: "pardeep90191170@gmail.com", // Admin email
            to_name: "Pardeep",
          },
          "ZRjBAgKkrNRAnhVkO" // Replace with your actual Public Key
        )
        .then(
          (response) => {
            alert("Thank you for reaching out. We will get back to you soon!");
            setFormData({ name: "", email: "", phone: "", project: "" });
            setErrors({});
          },
          (error) => {
            alert("Failed to send email. Please try again.");
          }
        );
    }
  };

  return (
    <>
      <div
        ref={leftOverlayRef}
        className="fixed top-0 left-0 w-full h-full overlay_color z-[99]"
        style={{ transformOrigin: "bottom" }}
      />
      <div className="flex justify-center items-center flex-col min-h-screen bg-gray-100">
        <h6 className="uppercase text-4xl font-bold text-gray-800 mb-8 contact_title"> Let's work together</h6>
        <div className="bg-white shadow-md rounded-4xl p-6 flex flex-col items-center md:flex-row w-[80%] md:w-[40%]">
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="flex flex-col flex-1 p-4"
          >
            <label className="mb-1">Enter your name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="border p-2 mb-2 rounded-2xl w-full"
            />
            {errors.name && (
              <p className="text-red-500 text-sm">{errors.name}</p>
            )}

            <label className="mb-1">Enter your email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="border p-2 mb-2 rounded-2xl w-full"
            />
            {errors.email && (
              <p className="text-red-500 text-sm">{errors.email}</p>
            )}

            <label className="mb-1">Enter your phone number</label>
            <input
              type="number"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="border p-2 mb-2 rounded-2xl w-full"
            />
            {errors.phone && (
              <p className="text-red-500 text-sm">{errors.phone}</p>
            )}

            <label className="mb-1">What is it about?</label>
            <textarea
              name="project"
              value={formData.project}
              onChange={handleChange}
              className="border p-2 mb-2 rounded-2xl w-full h-24 resize-none"
            ></textarea>
            {errors.project && (
              <p className="text-red-500 text-sm">{errors.project}</p>
            )}

            <button
              type="submit"
              className="w-full p-3 mt-4 rounded-2xl text-center cursor-pointer uppercase submit_button"
            >
              SUBMIT
            </button>
          </form>
          <div className="hidden md:block w-1/2 p-4">
            <img
              src="/images/sacramento_4.jpg"
              alt="Garden View"
              className="rounded-4xl w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
