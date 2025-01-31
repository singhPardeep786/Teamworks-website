import React, { useRef, useEffect } from 'react';
import { ReactLenis } from 'lenis/react';
import { Outlet } from 'react-router-dom';
import Navbar from './components/Navbar/Navabar';
import Footer from './components/footer/Footer';

const App = () => {
    const lenisRef = useRef();
    
    useEffect(() => {
        function update(time) {
            lenisRef.current?.lenis?.raf(time);
        }
        const rafId = requestAnimationFrame(update);
        
        return () => cancelAnimationFrame(rafId);
    }, []);
    
    return (
        <ReactLenis ref={lenisRef} root options={{ duration: 1.2, smoothWheel: true }}>
            <div>
                <Navbar />
                <Outlet />
                <Footer />
            </div>
        </ReactLenis>
    );
};

export default App;