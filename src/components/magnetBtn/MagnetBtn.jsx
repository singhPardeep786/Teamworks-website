import React, { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import gsap from "gsap";

const MagnetBtn = () => {
  const buttonRef = useRef(null);
  const bgRef = useRef(null);
  const textRef = useRef(null);
  const navigate = useNavigate();

  const handleMouseMove = (e) => {
    const button = buttonRef.current.getBoundingClientRect();
    const x = e.clientX - button.left - button.width / 2;
    const y = e.clientY - button.top - button.height / 2;

    // Perform the magnet effect with a smooth transition
    gsap.to(buttonRef.current, {
      x: x * 0.2, // Adjust the strength of the magnet
      y: y * 0.2,
      duration: 0.5,
      ease: "power2.out",
    });

    // Animate the text in the opposite direction
    gsap.to(textRef.current, {
      x: -x * 0.1, // Move in the opposite direction
      y: -y * 0.1,
      duration: 0.5,
      ease: "power2.out",
    });
  };

  const handleMouseEnter = (e) => {
    const button = buttonRef.current.getBoundingClientRect();
    const bg = bgRef.current;

    const x = e.clientX - button.left;
    const y = e.clientY - button.top;

    const isFromTop =
      y < button.height / 2 &&
      Math.abs(x - button.width / 2) <= button.width / 2;
    const isFromBottom = !isFromTop;
    const isFromLeft = x < button.width / 2;
    const isFromRight = !isFromLeft;

    // Determine direction of entry
    let direction;
    if (isFromTop) direction = { x: "0%", y: "-100%" }; // Top
    else if (isFromBottom) direction = { x: "0%", y: "100%" }; // Bottom
    else if (isFromLeft) direction = { x: "-100%", y: "0%" }; // Left
    else direction = { x: "100%", y: "0%" }; // Right

    // Adjust mouse entering from left right
    if (isFromLeft) {
      gsap.fromTo(
        bg,
        { x: "-200%", y: direction.y, borderRadius: "50%" },
        { x: "0%", y: "0%", borderRadius: "50%", duration: 0.5, ease: "power2.out" }
      );
      gsap.fromTo(
        textRef.current,
        { x: 0, y: 0 },
        { x: 0, y: "0%", duration: 0.5, ease: "power2.out" }
      );
    } else if (isFromRight) {
      gsap.fromTo(
        bg,
        { x: "200%", y: direction.y, borderRadius: "50%" },
        { x: "0%", y: "0%", borderRadius: "50%", duration: 0.5, ease: "power2.out" }
      );
      gsap.fromTo(
        textRef.current,
        { x: 0, y: 0 },
        { x: 0, y: "0%", duration: 0.5, ease: "power2.out" }
      );
    } else {
      gsap.fromTo(
        bg,
        { x: direction.x, y: direction.y, borderRadius: "50%" },
        { x: "0%", y: "0%", borderRadius: "50%", duration: 0.5, ease: "power2.out" }
      );
      gsap.fromTo(
        textRef.current,
        { x: -direction.x, y: -direction.y },
        { x: "0%", y: "0%", duration: 0.5, ease: "power2.out" }
      );
    }
  };

  const handleMouseLeave = (e) => {
    const button = buttonRef.current.getBoundingClientRect();
    const bg = bgRef.current;

    const x = e.clientX - button.left;
    const y = e.clientY - button.top;

    const isFromTop =
      y < button.height / 2 &&
      Math.abs(x - button.width / 2) <= button.width / 2;
    const isFromBottom = !isFromTop;
    const isFromLeft = x < button.width / 2;
    const isFromRight = !isFromLeft;

    // Determine direction of entry
    let direction;
    if (isFromTop) direction = { x: "0%", y: "-100%" }; // Top
    else if (isFromBottom) direction = { x: "0%", y: "100%" }; // Bottom
    else if (isFromLeft) direction = { x: "-100%", y: "0%" }; // Left
    else direction = { x: "100%", y: "0%" }; // Right

    // Reset magnet effect smoothly
    gsap.to(buttonRef.current, { x: 0, y: 0, duration: 0.5, ease: "power2.out" });

    // Reset text position smoothly
    gsap.to(textRef.current, { x: 0, y: 0, duration: 0.5, ease: "power2.out" });

    // Animate the background leaving smoothly
    if (isFromLeft) {
      gsap.to(bg, {
        x: "-100%",
        y: "0%",
        borderRadius: "50%",
        duration: 0.5,
        ease: "power2.in",
      });
    } else if (isFromRight) {
      gsap.to(bg, {
        x: "100%",
        y: "0%",
        borderRadius: "50%",
        duration: 0.5, 
        ease: "power2.in",
      });
    } else if (isFromTop) {
      gsap.to(bg, {
        x: "0%",
        y: "-100%",
        borderRadius: "50%",
        duration: 0.5, 
        ease: "power2.in",
      });
    } else if (isFromBottom) {
      gsap.to(bg, {
        x: "0%",
        y: "100%",
        borderRadius: "50%",
        duration: 0.5, 
        ease: "power2.in",
      });
    }
  };

  return (
    <>
      <Link to="/contact" onClick={(e) => { e.preventDefault(); window.scrollTo(0, 0); navigate('/contact'); }}>
        <div
          className="contact_btn"
          ref={buttonRef}
          onMouseMove={handleMouseMove}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          style={{
            position: "relative",
            overflow: "hidden",
            display: "inline-block",
            textAlign: "center",
            background: "var(--white)",
            border: "2px solid var(--black)",
            color: "var(--black)",
            fontSize: "36px",
            fontWeight: "bold",
            cursor: "pointer",
          }}
        >
          {/* Hover background */}
          <div
            ref={bgRef}
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              background: "var(--lightblue)",
              zIndex: 1,
              transform: "translateY(100%)", // Start offscreen
            }}
          />

          {/* Button content */}
          <div
            ref={textRef}
            style={{
              position: "relative",
              zIndex: 2,
            }}
          >
            <h3 style={{ margin: 0, fontSize: "1rem" }}>Click here to</h3>
            <h2 style={{ margin: 0 }}>Get in touch</h2>
          </div>
        </div>
      </Link>
    </>
  );
};

export default MagnetBtn;
