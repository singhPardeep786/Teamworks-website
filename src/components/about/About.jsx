import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger"; 

const About = () => {
  const aboutUsRef = useRef(null);
  const leftOverlayRef = useRef(null);

  useEffect(() => {
    // Page load animation with curved overlays from both sides
    const tl = gsap.timeline();
    
    tl.to([leftOverlayRef.current], {
      yPercent: -100,
      duration: 0.8,
      ease: "power4.inOut", 
      stagger: 0.1,
      borderBottomLeftRadius: "50%",
      borderBottomRightRadius: "50%",
      onComplete: () => {
        leftOverlayRef.current.style.display = 'none';
        // Animation for "About Us" text to appear word by word
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
      }
    });
  }, []);

  useEffect(()=>{
    const overlay1 = document.querySelector('.overlay1');
    const overlay2 = document.querySelector('.overlay2');
    const overlay3 = document.querySelector('.overlay3');
    gsap.fromTo(overlay1,{
      transform: "translateY(0%)",
    },{
      transform: "translateY(100%)",
      duration: 1,
      scrollTrigger: {
        scroller: "body",
        trigger: overlay1,
        start: "top 90%",
        end: "top 50%",
        scrub: 2,
        // markers: true
      }
    })

    gsap.fromTo(overlay2,{
      transform: "translateX(0%)",
    },{
      transform: "translateX(100%)",
      duration: 1,
      scrollTrigger: {
        scroller: "body",
        trigger: overlay2,
        start: "top 90%",
        end: "top 50%",
        scrub: 2,
        // markers: true
      }
    })

    gsap.fromTo(overlay3,{
      transform: "translateX(0%)",
    },{
      transform: "translateX(-100%)",
      duration: 1,
      scrollTrigger: {
        scroller: "body",
        trigger: overlay3,
        start: "top 90%",
        end: "top 50%",
        scrub: 2,
        // markers: true
      }
    })
  }, []);

  return (
    <>
    <div
          ref={leftOverlayRef}
          className="fixed top-0 left-0 w-full h-full overlay_color z-[99]"
          style={{ transformOrigin: "bottom" }}
        />
      {/* ---------------BANNER---START----------- */}
      <section className="wrapper">
        <div className="about_section_main text-center">
          <div className="about_section">
            <div ref={aboutUsRef} className="about_us_word overflow-hidden" style={{opacity: 0}}>
              <p className="overflow-hidden">For a new media company we are pretty old.</p>
            </div>
            <div ref={aboutUsRef} className="about_us_word overflow-hidden" style={{opacity: 0}}>
              <p className="overflow-hidden">
                We were amongst the pioneers in this space and we're ranked
                amongst the most stable, dependable and successful ones.
              </p>
            </div>
            <div ref={aboutUsRef} className="about_us_word overflow-hidden" style={{opacity: 0}}>
              <p className="overflow-hidden">
                This is a reputation built through servicing the requirements of
                over 200 customers, both big and small from various industry
                verticals, a major proportion of whom are regular, repeat
                clientele.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* ---------------BANNER---END----------- */}


      {/* ---------------WHY---TEAMWORKS---START----------- */}

      <section className="wrapper">
          <div className="relative overflow-hidden">
            <div className="overlay1"></div>
            <h2 className="text-center md:text-4xl uppercase font-bold py-8 bg-[var(--lightyellow)] rounded-4xl">why teamworks</h2>
          </div>
        <div className="row lg:flex items-center">
          <div className="col-6 mt-10">
            <div className="teamworks_img relative overflow-hidden">
              <div className="overlay2"></div>
              <img src="/public/images/Teamworks.jpg" className="w-full rounded-4xl" alt="" />
            </div>
          </div>
          <div className="col-6 mt-10">
            <div className="teamworks_img_content relative overflow-hidden">
              <div className="overlay3"></div>
              <p className="futura">Let's face it, times have changed. Today, no media plan is complete without new media. No international communication is 100% effective without new media.</p>
              <p className="futura mt-3">All you need is someone to share their experience and expertise with enthusiasm. Who can proactively come up with solutions and ideas to jumpstart a new media initiative. A partner who's adept at blending talent with technology and delivering on time.</p>
              <p className="futura mt-3">It's quicker. It's cheaper. And far more efficient.</p>
              <p className="futura mt-3">Equally, someone who knows and understands how to get the best of converstaional media so that, used in tandem, the two combine their might and ensure your brand is perceived and experienced in only one way...The Right Way.</p>
              <p className="futura mt-3">Talk to Teamworks. <br />
              We're here to do this for you.</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* ---------------WHY---TEAMWORKS---END----------- */}

    </>
  );
};

export default About;
