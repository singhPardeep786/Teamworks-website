import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { SlideshowLightbox } from "lightbox.js-react";

const Work = () => {
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

  useEffect(() => {
    const updateParallax = () => {
      if (window.innerWidth > 768) {
        gsap.to(".logo_section", {
          backgroundPositionY: "30%",
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".logo_section",
            start: "top bottom",
            end: "bottom top",
            scrub: 2,
          },
        });
      } else {
        gsap.set(".logo_section", { backgroundPositionY: "50%" }); // Reset for mobile
      }
    };

    updateParallax();
    window.addEventListener("resize", updateParallax);
    return () => window.removeEventListener("resize", updateParallax);
  }, []);

  return (
    <>
      <div
        ref={leftOverlayRef}
        className="fixed top-0 left-0 w-full h-full overlay_color z-[99]"
        style={{ transformOrigin: "bottom" }}
      />
      {/*---BANNER---SECTION---START */}

      <section className="wrapper">
        <div className="about_section_main text-center">
          <div className="about_section">
            <div className="about_us_word overflow-hidden">
              <p className="overflow-hidden take_tour">Take a tour of</p>
            </div>
            <div className="about_us_word overflow-hidden">
              <p className="overflow-hidden take_tour">our creations</p>
            </div>
          </div>
        </div>
      </section>

      {/*---BANNER---SECTION---START */}

      {/*-----LOGO---SECTION---START------*/}

      <section className="wrapper">
        <h2 className="uppercase text-4xl text-center md:text-start mt-5">
          LOGO
        </h2>
        {/* <div className="logo_section">
          <div className="logo_box">
            <img src="/images/sahasra_logo.jpg" className="w-full" alt="" />
          </div>
          <div className="logo_box">
            <img src="/images/montage_logo.png" className="w-full" alt="" />
          </div>
          <div className="logo_box">
            <img src="/images/sahasra_logo.jpg" className="w-full" alt="" />
          </div>
          <div className="logo_box">
            <img src="/images/sahasra_logo.jpg" className="w-full" alt="" />
          </div>
          <div className="logo_box">
            <img src="/images/montage_logo.png" className="w-full" alt="" />
          </div>
          <div className="logo_box">
            <img src="/images/sahasra_logo.jpg" className="w-full" alt="" />
          </div>
          <div className="logo_box">
            <img src="/images/sahasra_logo.jpg" className="w-full" alt="" />
          </div>
          <div className="logo_box">
            <img src="/images/montage_logo.png" className="w-full" alt="" />
          </div>
          <div className="logo_box">
            <img src="/images/sahasra_logo.jpg" className="w-full" alt="" />
          </div>
        </div> */}

        {/* <div className="logo_section">
          <div className="logo_wrapper">
            <div className="logo_box">
              <img src="/images/sahasra_logo.jpg" className="w-full" alt="Logo 1" />
            </div>
            <div className="logo_box">
              <img src="/images/montage_logo.jpg" className="w-full" alt="Logo 2" />
            </div>
            <div className="logo_box">
              <img src="/images/sahasra_logo.jpg" className="w-full" alt="Logo 3" />
            </div>
            <div className="logo_box">
              <img src="/images/montage_logo.jpg" className="w-full" alt="Logo 4" />
            </div>
            <div className="logo_box">
              <img src="/images/sahasra_logo.jpg" className="w-full" alt="Logo 5" />
            </div>

            <!-- Duplicate Logos for Smooth Transition -->
            <div className="logo_box">
              <img src="/images/sahasra_logo.jpg" className="w-full" alt="Logo 1" />
            </div>
            <div className="logo_box">
              <img src="/images/montage_logo.jpg" className="w-full" alt="Logo 2" />
            </div>
            <div className="logo_box">
              <img src="/images/sahasra_logo.jpg" className="w-full" alt="Logo 3" />
            </div>
            <div className="logo_box">
              <img src="/images/montage_logo.jpg" className="w-full" alt="Logo 4" />
            </div>
            <div className="logo_box">
              <img src="/images/sahasra_logo.jpg" className="w-full" alt="Logo 5" />
            </div>
          </div>
        </div> */}

        <div className="logo_section mt-5 transition-all">
          <div className="logo_wrapper">
            {[
              "/images/sahasra_logo.jpg",
              "/images/montage_logo.png",
              "/images/swasthi_logo.jpg",
              "/images/soubhagya_logo.png",
              "/images/veekay_logo.png",
              "/images/forest_edge_logo.png",
              "/images/anvita_preserve_logo.png",
              "/images/nature_valley_logo.png",
            ].map((src, index) => (
              <div className="logo_box" key={index}>
                <img src={src} alt="Company Logo" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/*-----LOGO---SECTION---END------*/}

      {/*------PROJECT---IMAGES---STARTED------*/}

      <section className="wrapper">
        <h2 className="uppercase text-2xl md:text-4xl mt-10">3d work</h2>
        <div className="projects_main mt-4">
          <SlideshowLightbox className="projects">
            <img
              src="/images/Radhey_Skye_01.jpg"
              className=""
              data-lightbox="gallery"
              alt="Radhey Skye"
            />
            <img
              src="/images/casabella_entrance.jpg"
              className="my-4"
              data-lightbox="gallery"
              alt="Casabella Entrance"
            />
            <img
              src="/images/east_&_west_street_day.jpg"
              className="my-4"
              data-lightbox="gallery"
              alt="East and West Street Day"
            />
            <img
              src="/images/kabini_render.jpg"
              className="my-4"
              data-lightbox="gallery"
              alt="Kabini Render"
            />
            <img
              src="/images/clubhouse.jpg"
              data-lightbox="gallery"
              className="mt-4"
              alt="Clubhouse"
            />
            <img
              src="/images/east_200_sqyds.jpg"
              data-lightbox="gallery"
              alt="East 200 Sqyds"
            />
            <img
              src="/images/swasthi_clubhouse.jpg"
              data-lightbox="gallery"
              alt="Swasthi Clubhouse"
            />
            <img
              src="/images/east_street_day.jpg"
              data-lightbox="gallery"
              alt="East Street Day"
            />
            <img
              src="/images/montage_clubhouse.jpg"
              className="my-4"
              data-lightbox="gallery"
              alt="Montage Clubhouse"
            />
            <img
              src="/images/wide_night_view.jpg"
              data-lightbox="gallery"
              alt="Wide Night View"
            />
            <img
              src="/images/The_Marquise.jpg"
              className="mt-4"
              data-lightbox="gallery"
              alt="The Marquise"
            />
            <img
              src="/images/Western_Windsor_Park_02.jpg"
              className="mt-4"
              data-lightbox="gallery"
              alt="Western Windsor Park"
            />
          </SlideshowLightbox>
        </div>
      </section>

      {/*------PROJECT---IMAGES---END------*/}

      {/*-----BROCHURES---START------*/}

      <section className="wrapper">
        <h2 className="uppercase text-4xl text-center md:text-start mt-5">
          Brohures
        </h2>
        <div className="row md:flex items-center justify-center gap-3">
          <div className="col-4 mt-5">
            <div className="brochure_img">
              <img
                src="/images/gallery-04.jpg"
                className="w-full h-full rounded-4xl"
                alt=""
              />
            </div>
          </div>
          <div className="col-4 mt-5">
            <div className="brochure_img">
              <img
                src="/images/gallery-06.jpg"
                className="w-full h-full rounded-4xl"
                alt=""
              />
            </div>
          </div>
          <div className="col-4 mt-5">
            <div className="brochure_img">
              <img
                src="/images/brochure_7.jpg"
                className="w-full h-full rounded-4xl"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>

      {/*-----BROCHURES---END------*/}

      {/*-----WEBSITES---START------*/}

      <section className="wrapper">
        <h2 className="uppercase text-4xl text-center md:text-start mt-15">
          Websites
        </h2>
        <div className="row md:flex items-center justify-center gap-3">
          <div className="col-4 mt-5">
            <a href="https://www.sahasraprojects.com/" target="__blank">
              <div className="website_box rounded-4xl overflow-hidden shadow-md border-1 border-amber-300">
                <div className="overlay">
                  <h2 className="uppercase">Sahasra Projects</h2>
                </div>
                <img
                  src="/images/websites_imgs/sahasra_website.jpeg"
                  className="w-full object-cover"
                  alt=""
                />
              </div>
            </a>
          </div>
          <div className="col-4 mt-5">
            <a href="#">
            <div className="website_box rounded-4xl overflow-hidden shadow-md border-1 border-amber-300">
              <div className="overlay">
                <h2 className="uppercase">Aditi homes</h2>
              </div>
              <img
                src="/images/websites_imgs/aditi_homes.jpeg"
                className="w-full object-cover img2"
                alt=""
              />
            </div>
            </a>
          </div>
          <div className="col-4 mt-5">
            <a href="#">
            <div className="website_box rounded-4xl overflow-hidden shadow-md border-1 border-amber-300">
              <div className="overlay">
                <h2 className="uppercase">montage</h2>
              </div>
              <img
                src="/images/websites_imgs/montage_website.jpeg"
                className="w-full object-cover"
                alt=""
              />
            </div>
            </a>
          </div>
        </div>
      </section>

      {/*-----WEBSITES---END------*/}
    </>
  );
};

export default Work;
