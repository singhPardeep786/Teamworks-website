import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [visible, setVisible] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [prevScrollPos]);

  const navbarVariants = {
    hidden: { y: "-100%" },
    visible: { y: 0 }
  };

  const AnimatedLink = ({ to, children, onClick }) => {
    return (
      <Link to={to} onClick={() => { window.scrollTo(0, 0); onClick(); navigate(to); }} className={`relative overflow-hidden group ${location.pathname === to ? 'text-yellow-700' : 'text-zinc-800'}`}>
        {/* Original text */}
        <span className="inline-block relative">
          {children.split('').map((char, index) => (
            <span
              key={index}
              className={`inline-block transition-all duration-700 group-hover:translate-y-[-100%] group-hover:opacity-0 ${location.pathname === to ? 'text-yellow-700' : ''}`}
              style={{ transitionDelay: `${index * 30}ms` }}
            >
              {char}
            </span>
          ))}
        </span>
        {/* Text that appears from bottom */}
        <span className="absolute left-0 top-0 inline-block">
          {children.split('').map((char, index) => (
            <span
              key={index}
              className={`inline-block translate-y-[100%] opacity-0 text-gray-600 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 ${location.pathname === to ? 'text-yellow-700' : ''}`}
              style={{ transitionDelay: `${index * 30}ms` }}
            >
              {char}
            </span>
          ))}
        </span>
      </Link>
    );
  };

  return (
    <motion.div 
      className="fixed w-full top-0 left-0 z-50"
      initial="visible"
      animate={visible ? "visible" : "hidden"}
      variants={navbarVariants}
      transition={{ duration: 0.3 }}
    >
      <div className="relative flex items-center justify-between py-2 md:py-0 sm:py-3 px-3 sm:px-10 md:px-10px bg-white/80 backdrop-blur-sm">
        <div className="logo">
          <Link to="/" onClick={() => { window.scrollTo(0, 0); navigate('/'); }}><img src="/images/new_logo.png" className="w-full" alt="logo" /></Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:block">
          <ul className="flex space-x-6">
            <li className="overflow-hidden"><AnimatedLink to="/" onClick={() => { window.scrollTo(0, 0); navigate('/'); }} className="text-zinc-800">Home</AnimatedLink></li>
            <li className="overflow-hidden"><AnimatedLink to="/about" onClick={() => { window.scrollTo(0, 0); navigate('/about'); }} className="text-zinc-800">About</AnimatedLink></li>
            <li className="overflow-hidden"><AnimatedLink to="/work" onClick={() => { window.scrollTo(0, 0); navigate('/work'); }} className="text-zinc-800">Work</AnimatedLink></li>
            <li className="overflow-hidden"><AnimatedLink to="/contact" onClick={() => { window.scrollTo(0, 0); navigate('/contact'); }} className="text-zinc-800">Contact</AnimatedLink></li>
          </ul>
        </nav>

        {/* Mobile Toggle Button */}
        <div className="md:hidden">
          <button 
            className="relative w-8 h-8 flex flex-col justify-center items-center"
            onClick={() => setIsOpen(!isOpen)}
          >
            <motion.span 
              className="absolute w-8 h-[2px] bg-zinc-800"
              animate={isOpen ? { rotate: 45, y: 0 } : { rotate: 0, y: -8 }}
              transition={{ duration: 0.3 }}
            />
            <motion.span 
              className="absolute w-8 h-[2px] bg-zinc-800"
              animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
              transition={{ duration: 0.3 }}
            />
            <motion.span 
              className="absolute w-8 h-[2px] bg-zinc-800"
              animate={isOpen ? { rotate: -45, y: 0 } : { rotate: 0, y: 8 }}
              transition={{ duration: 0.3 }}
            />
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              className="fixed top-[60px] left-0 w-full h-screen bg-white/95 backdrop-blur-sm md:hidden"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <nav className="p-5 responsive_nav flex flex-col items-center justify-center h-screen w-full">
                <ul className="space-y-4">
                  <li className="text-[2rem] sm:text-[3rem] md:text-[4rem] lg:text-[5.7rem]"><AnimatedLink to="/" onClick={() => { setIsOpen(false); window.scrollTo(0, 0); navigate('/'); }} className="block text-zinc-800 ">Home</AnimatedLink></li>
                  <li className="text-[2rem] sm:text-[3rem] md:text-[4rem] lg:text-[5.7rem]"><AnimatedLink to="/about" onClick={() => { setIsOpen(false); window.scrollTo(0, 0); navigate('/about'); }} className="block text-zinc-800">About</AnimatedLink></li>
                  <li className="text-[2rem] sm:text-[3rem] md:text-[4rem] lg:text-[5.7rem]"><AnimatedLink to="/work" onClick={() => { setIsOpen(false); window.scrollTo(0, 0); navigate('/work'); }} className="block text-zinc-800">Work</AnimatedLink></li>
                  <li className="text-[2rem] sm:text-[3rem] md:text-[4rem] lg:text-[5.7rem]"><AnimatedLink to="/contact" onClick={() => { setIsOpen(false); window.scrollTo(0, 0); navigate('/contact'); }} className="block text-zinc-800">Contact</AnimatedLink></li>
                </ul>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

export default Navbar;
