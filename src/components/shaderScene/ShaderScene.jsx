import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import vertexShader from '../../shaders/vertexShader.glsl';
import fragmentShader from '../../shaders/fragmentShader.glsl';
import { gsap, ScrollTrigger } from 'gsap/all';
import Navabar from '../Navbar/Navabar';
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom'; // Import useNavigate hook

gsap.registerPlugin(ScrollTrigger);

const ShaderScene = () => {
    const canvasRef = useRef(null);
    const leftOverlayRef = useRef(null);
    const navigate = useNavigate(); // Initialize useNavigate hook

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
            }
        });

        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 100);
        camera.position.z = 3;

        const renderer = new THREE.WebGLRenderer({
            canvas: canvasRef.current,
            antialias: true,
            alpha: true
        });
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

        const geometry = new THREE.IcosahedronGeometry(2, 50, 50);
        const material = new THREE.ShaderMaterial({
            vertexShader,
            fragmentShader,
            uniforms: {
                uTime: { value: 0.0 },
                uColorChange: {
                    value: 0
                }
            }
        });

        const sphere = new THREE.Mesh(geometry, material);
        sphere.position.y = -2.3;
        scene.add(sphere);

        const tl2 = gsap.timeline({
            scrollTrigger: {
                trigger: '.landing',
                start: 'top top',
                end: 'bottom bottom',
                scrub: 1,
                onLeaveBack: () => {
                    gsap.to(".who_we_are", {
                        opacity: 0,
                        visibility: "hidden",
                        pointerEvents: "none",
                        duration: 0.3
                    });
                }
            },
        });

        gsap.set(".who_we_are", {
            opacity: 0,
            visibility: "hidden",
            pointerEvents: "none"
        });

        tl2.to(sphere.position, {
            y: 0,
            z: -1,
            ease: "power2.inOut",
        }, "a")
        .to(material.uniforms.uColorChange, {
            value: 1,
            ease: "power2.inOut",
        }, "a")
        .to(".landing h1", {
            opacity: 0,
            duration: 0.5
        }, "a")
        .to(".who_we_are", {
            opacity: 1,
            visibility: "visible", 
            pointerEvents: "all",
            duration: 0.5
        }, ">-0.3");

        const clock = new THREE.Clock();
        const animate = () => {
            requestAnimationFrame(animate);
            material.uniforms.uTime.value = clock.getElapsedTime();
            renderer.render(scene, camera);
        };

        animate();

        const handleResize = () => {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);
            renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        };

        window.addEventListener('resize', handleResize);

    }, []);

    useEffect(() => {
        // Animation for text on load - delayed to start after overlay animation
        const tl = gsap.timeline({delay: 1});
        
        tl.fromTo(".teamworks-letter", {
            y: 100,
            opacity: 0
        }, {
            y: 0,
            opacity: 1,
            stagger: 0.04,
            ease: "power4.out",
            duration: 1
        })
        .fromTo(".subtitle-letter", {
            y: 50,
            opacity: 0
        }, {
            y: 0,
            opacity: 1,
            stagger: 0.02,
            ease: "power3.out"
        }, "-=0.5"); // Start subtitle animation slightly before teamworks finishes
    }, []);

    return (
        <>        
            <div className='w-full'>
                {/* Split page load overlays */}
                <div 
                    ref={leftOverlayRef} 
                    className="fixed top-0 left-0 w-full h-full overlay_color z-[99]"
                    style={{ transformOrigin: 'bottom' }}
                />
                
                <Navabar />
                <div className="landing w-full h-[200vh]">
                    <div className='w-full h-screen sticky top-0 left-0'>
                        <div className='absolute w-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center'>
                            <h1 className='text-[4rem] sm:text-[3rem] md:text-[4rem] lg:text-[7rem] transition-all mb-0 p-0 font-bold leading-26 z-[9] overflow-hidden'>
                                <span className="teamworks-letter inline-block">T</span>
                                <span className="teamworks-letter inline-block">e</span>
                                <span className="teamworks-letter inline-block">a</span>
                                <span className="teamworks-letter inline-block">m</span>
                                <span className="teamworks-letter inline-block">w</span>
                                <span className="teamworks-letter inline-block">o</span>
                                <span className="teamworks-letter inline-block">r</span>
                                <span className="teamworks-letter inline-block">k</span>
                                <span className="teamworks-letter inline-block">s</span>
                            </h1>
                            <h1 className='text-[1.5rem] sm:text-[1.25rem] md:text-[1.5rem] lg:text-[2.5rem] transition-all p-0 mt-0 font-semibold z-[9] overflow-hidden'>
                                <span className="subtitle-letter inline-block">Y</span>
                                <span className="subtitle-letter inline-block">o</span>
                                <span className="subtitle-letter inline-block">u</span>
                                <span className="subtitle-letter inline-block">r</span>
                                <span className="subtitle-letter inline-block">&nbsp;</span>
                                <span className="subtitle-letter inline-block">N</span>
                                <span className="subtitle-letter inline-block">e</span>
                                <span className="subtitle-letter inline-block">w</span>
                                <span className="subtitle-letter inline-block">&nbsp;</span>
                                <span className="subtitle-letter inline-block">M</span>
                                <span className="subtitle-letter inline-block">e</span>
                                <span className="subtitle-letter inline-block">d</span>
                                <span className="subtitle-letter inline-block">i</span>
                                <span className="subtitle-letter inline-block">a</span>
                                <span className="subtitle-letter inline-block">&nbsp;</span>
                                <span className="subtitle-letter inline-block">P</span>
                                <span className="subtitle-letter inline-block">a</span>
                                <span className="subtitle-letter inline-block">r</span>
                                <span className="subtitle-letter inline-block">t</span>
                                <span className="subtitle-letter inline-block">n</span>
                                <span className="subtitle-letter inline-block">e</span>
                                <span className="subtitle-letter inline-block">r</span>
                            </h1>
                            <div className='flex flex-col gap-10 items-center justify-center who_we_are absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full'>
                                <h3 className='font-bold text-xl mb-0'>Who we are</h3>
                                <p className='mb-0 text-3xl futura'>We craft digital experiences that inspire, innovate, and ignite imagination through masterful design</p>
                                <Link to="/about" onClick={() => { window.scrollTo(0, 0); navigate('/about'); }} className="know_more">Know more</Link>
                            </div>
                        </div>
                        <canvas className='pointer-events-none z-[-1]' ref={canvasRef} />
                    </div>
                </div>
            </div>
        </>
    );
};

export default ShaderScene;
