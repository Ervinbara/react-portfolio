import React, { useEffect } from 'react';
import { BrowserRouter as Router} from 'react-router-dom';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Banner from './pages/Banner';
import Skills from './pages/Skills';
import Projects from './pages/Projects';

import './App.css';

function App() {
    useEffect(() => {
        const handleScroll = () => {
            const header = document.querySelector('.header');
            if (window.scrollY > 50) {
                header.classList.add('scroll');
            } else {
                header.classList.remove('scroll');
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <Router>
            <div className="app-container">
            <div className="background-spheres">
            <div className="sphere sphere-1"></div>
            <div className="sphere sphere-2"></div>
            <div className="sphere sphere-3"></div>
            <div className="sphere sphere-4"></div>
            <div className="sphere sphere-5"></div>
            <div className="sphere sphere-6"></div>
            <div className="sphere sphere-7"></div>
            <div className="sphere sphere-8"></div>
      </div>
                <Header />
                <main className="main-content">
                    <Banner />
                    <Skills />
                    <Projects />
                    {/* <Routes>
                        <Route path="/about" element={} />
                    </Routes> */}
                </main>
            </div>
        </Router>
    );
}

export default App;
