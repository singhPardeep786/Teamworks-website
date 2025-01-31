import React, { useEffect } from "react";
import ShaderScene from "../shaderScene/ShaderScene";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
// import MagnetBtn from "../magnetBtn/MagnetBtn";

const Home = () => {
  useEffect(() => {
    const details = gsap.utils.toArray(
      ".desktopContentSection:not(:first-child)"
    );
    const photos = gsap.utils.toArray(".desktopPhoto:not(:first-child)");

    gsap.set(photos, { yPercent: 101 });

    const allPhotos = gsap.utils.toArray(".desktopPhoto");

    // create
    let mm = gsap.matchMedia();

    // add a media query. When it matches, the associated function will run
    mm.add("(min-width: 992px)", () => {
      // this setup code only runs when viewport is at least 600px wide
      console.log("desktop");

      ScrollTrigger.create({
        trigger: ".gallery",
        start: "top top",
        end: "bottom bottom",
        pin: ".right",
      });

      //create scrolltrigger for each details section
      //trigger photo animation when headline of each details section
      //reaches 80% of window height
      details.forEach((detail, index) => {
        let headline = detail.querySelector("h2");
        let animation = gsap
          .timeline()
          .to(photos[index], { yPercent: 0 })
          .set(allPhotos[index], { autoAlpha: 0 });

        ScrollTrigger.create({
          trigger: headline,
          start: "top 80%",
          end: "top 50%",
          animation: animation,
          scrub: 2,
          markers: false,
        });
      });
    });

    return () => {
      mm.revert();
    };
  }, []);

  useEffect(() => {
    const trigger = ".how_it_works";
    const slides = ".slides";
    const scroller = "body";
    const start = "top 80%";
    const end = "top 30%";
    const scrub = 2;
    const duration = 2;

    if (window.innerWidth < 1271) {
      gsap.to(slides, {
        transform: "translateX(0%)",
        duration: duration,
        scrollTrigger: {
          scroller: scroller,
          trigger: trigger,
          start: start,
          end: end,
          scrub: scrub,
          // markers: true
        },
      });
    } else {
      gsap.to(slides, {
        transform: "translateX(80%)",
        duration: duration,
        scrollTrigger: {
          scroller: scroller,
          trigger: trigger,
          start: start,
          end: end,
          scrub: scrub,
          // markers: true
        },
      });
    }
  }, []);

  

  return (
    <>
      <ShaderScene />

      <div className="gallery">
        <div className="left">
          <div className="desktopContent">
            <div className="desktopContentSection">
              <h2>3d Renders</h2>
              <p className="futura">
                Every detail, every texture, every angle – meticulously crafted
                to bring your vision to life.
              </p>
            </div>
            <div className="desktopContentSection">
              <h2>Brochure</h2>
              <p className="futura">
                Transforming Ideas Into Impactful Stories.
              </p>
            </div>
            <div className="desktopContentSection">
              <h2 className="uppercase">Logo Creation</h2>
              <p className="futura">
                Turning visions into visual masterpieces.
              </p>
            </div>
            <div className="desktopContentSection">
              <h2>Web development</h2>
              <p>Responsive, Aesthetic, and User-Friendly – We Build It All.</p>
            </div>
            <div className="desktopContentSection">
              <h2>Hoardings</h2>
              <p>Elevate Your Brand with Us.</p>
            </div>
          </div>
        </div>

        <div className="right">
          {/* <!-- mobile content --> */}
          <div className="mobileContent">
            <div className="mobilePhoto red rounded-4xl">
              <img
                src="/images/The_Marquise_Web_01.jpg"
                className="w-full object-cover rounded-4xl h-full"
                alt=""
              />
            </div>
            <h2 className="mt-5">3d Renders</h2>
            <p className="futura">
              Every detail, every texture, every angle – meticulously crafted to
              bring your vision to life.
            </p>

            <div className="mobilePhoto rounded-4xl green">
              <img
                src="/images/gallery-04.jpg"
                className="w-full h-full rounded-4xl object-cover"
                alt=""
              />
            </div>
            <h2 className="mt-5">Brochure</h2>
            <p className="futura">Transforming Ideas Into Impactful Stories.</p>

            <div className="mobilePhoto rounded-4xl pink">
              <img
                src="/images/logo_design.jpg"
                className="w-full h-full rounded-4xl object-cover"
                alt=""
              />
            </div>
            <h2 className="uppercase mt-5">Logo Creation</h2>
            <p className="futura">Turning visions into visual masterpieces.</p>

            <div className="mobilePhoto rounded-4xl blue">
              <img
                src="/images/website_design.jpg"
                className="w-full h-full rounded-4xl object-cover"
                alt=""
              />
            </div>
            <h2 className="mt-5">Website</h2>
            <p>Responsive, Aesthetic, and User-Friendly – We Build It All.</p>

            <div className="mobilePhoto rounded-4xl blue">
              <img
                src="/images/hoardings.jpg"
                className="w-full h-full rounded-4xl object-cover"
                alt=""
              />
            </div>
            <h2 className="mt-5">Web development</h2>
            <p>Responsive, Aesthetic, and User-Friendly – We Build It All.</p>
          </div>

          {/* <!-- desktop content --> */}

          <div className="desktopPhotos">
            <div className="desktopPhoto red">
              <img
                src="/images/The_Marquise_Web_01.jpg"
                className="w-full object-cover h-full"
                alt=""
              />
            </div>
            <div className="desktopPhoto green">
              <img
                src="/images/gallery-04.jpg"
                className="w-full h-full object-cover"
                alt=""
              />
            </div>
            <div className="desktopPhoto pink">
              <img
                src="/images/logo_design.jpg"
                className="w-full h-full object-cover"
                alt=""
              />
            </div>
            <div className="desktopPhoto blue">
              <img
                src="/images/website_design.jpg"
                className="w-full h-full object-cover"
                alt=""
              />
            </div>
            <div className="desktopPhoto pink">
              <img
                src="/images/hoardings.jpg"
                className="w-full h-full object-cover"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>

      {/* -------------------HOW---WE---WORKS---START------------ */}

      <section className="section_wrapper pin_wrapper bg-amber-50 rounded-4xl">
        <div className="how_it_works w-full text-center">
          <h2 className="uppercase transition-all text-center mt-10 sm:mt-0">
            How we works  
          </h2>
          <div className="slider p-2 mt-12">
            <div className="slides">
              <h3>Send brief</h3>
              <p>
                Send us complete details about your project along with your
                requirements and estimated time.
              </p>
            </div>
            <div className="slides">
              <h3>Stay connected</h3>
              <p>
                Share your feedback so we can continue or make the necessary
                corrections.
              </p>
            </div>
            <div className="slides">
              <h3>Approve</h3>
              <p>
                Your Approval Ensures We’re on the Right Track. Once Approved,
                We’ll Proceed to the Next Phase.
              </p>
            </div>
            <div className="slides">
              <h3>Get results</h3>
              <p>
                Take a Look at the Results and See How We’ve Progressed! and See
                the Impact of Our Work.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* -------------------HOW---WE---WORKS---END------------ */}

    </>
  );
};

export default Home;
