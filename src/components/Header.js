import React, { useState, useEffect, useMemo } from 'react';
import { Link } from 'react-router-dom';
import '../css/Header.css';
import logo from '../images/logo.svg'; // Import the logo

function Header() {
    const [isDarkMode, setIsDarkMode] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [currentText, setCurrentText] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);
    const [charIndex, setCharIndex] = useState(0);
    const [arrayIndex, setArrayIndex] = useState(0);
    const [animationStopped, setAnimationStopped] = useState(false);

    const typingSpeed = 50;
    const eraseSpeed = 50;
    const delayBetweenCycles = 1100;

    // UseMemo to memoize codeSnippets
    const codeSnippets = useMemo(() => ["<?php", "<React>", "Code in progress...", "Code done."], []);
    // const codeSnippets = useMemo(() => ["<?php", "Code done."], []);

    useEffect(() => {
        let typingTimeout;

        if (arrayIndex === codeSnippets.length - 1 && currentText === "Code done.") {
            // Stop the animation and show the logo
            setAnimationStopped(true);
            return;
        }

        if (!isDeleting && charIndex < codeSnippets[arrayIndex].length) {
            // Continue typing
            typingTimeout = setTimeout(() => {
                setCurrentText((prev) => prev + codeSnippets[arrayIndex].charAt(charIndex));
                setCharIndex((prev) => prev + 1);
            }, typingSpeed);
        } else if (isDeleting && charIndex > 0) {
            // Continue deleting
            typingTimeout = setTimeout(() => {
                setCurrentText((prev) => prev.slice(0, -1));
                setCharIndex((prev) => prev - 1);
            }, eraseSpeed);
        } else if (!isDeleting && charIndex === codeSnippets[arrayIndex].length) {
            // Start deleting after typing the full text
            setTimeout(() => setIsDeleting(true), delayBetweenCycles);
        } else if (isDeleting && charIndex === 0) {
            // Move to the next text after deleting
            setIsDeleting(false);
            setArrayIndex((prev) => (prev + 1) % codeSnippets.length);
        }

        return () => clearTimeout(typingTimeout);
    }, [charIndex, isDeleting, codeSnippets, arrayIndex, currentText]);

    const toggleDarkMode = () => {
        setIsDarkMode(!isDarkMode);
        document.body.classList.toggle('dark-mode', !isDarkMode);
    };

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    // Ferme le menu mobile lorsqu'on clique en dehors
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (isMobileMenuOpen && !event.target.closest('.sidebar, .hamburger')) {
                setIsMobileMenuOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isMobileMenuOpen]);

    return (
        <header className="header">
            <div className="header-container">
                {/* Logo with typing animation */}
                <div className="logo">
                    {!animationStopped ? (
                        <p className={animationStopped ? 'highlight code-cursor' : ''}>{currentText}</p>
                    ) : (
                        <img src={logo} alt="Logo" className="logo-img animated-logo" /> // Logo appears here with animation
                    )}
                </div>

                {/* Navigation and dark mode toggle */}
                <div className="nav-theme-container">
                    <nav className="nav">
                        <ul className="nav-list">
                            <li className="nav-item">
                                <a href="#expertise" className="nav-link">About</a>
                            </li>
                            <li className="nav-item">
                                <a href="#projects" className="nav-link">Project</a>
                            </li>
                            <li className="nav-item">
                                <a href="#contact" className="nav-link">Contact</a>
                            </li>
                        </ul>
                    </nav>
                    <button className="theme-toggle" onClick={toggleDarkMode}>
                        <div className={`toggle-icon ${isDarkMode ? 'dark' : ''}`}></div>
                    </button>
                </div>

                {/* Mobile menu controls */}
                <div className="mobile-controls">
                    <div className={`hamburger ${isMobileMenuOpen ? 'active' : ''}`} onClick={toggleMobileMenu}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                    <button className="theme-toggle mobile-toggle" onClick={toggleDarkMode}>
                        <div className={`toggle-icon ${isDarkMode ? 'dark' : ''}`}></div>
                    </button>
                </div>

                {/* Sidebar for mobile */}
                <div className={`sidebar ${isMobileMenuOpen ? 'open' : ''}`}>
                    <ul className="sidebar-list">
                        <li className="nav-item">
                            <Link to="/about" className="nav-link" onClick={() => setIsMobileMenuOpen(false)}>About</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/projects" className="nav-link" onClick={() => setIsMobileMenuOpen(false)}>Projects</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/contact" className="nav-link" onClick={() => setIsMobileMenuOpen(false)}>Contact</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </header>
    );
}

export default Header;
