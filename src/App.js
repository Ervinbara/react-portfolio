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
                <Header />
                <main className="main-content">
                    <Banner />
                    <Skills />
                    <Projects />
                </main>
            </div>
        </Router>
    );
}

export default App;
