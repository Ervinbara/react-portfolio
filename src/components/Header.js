import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../css/Header.css';
import logo from '../images/logo.svg'; // Import the logo

function Header() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    // Fonction pour basculer le menu mobile
    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    // Fonction pour fermer la sidebar
    const closeSidebar = () => {
        setIsMobileMenuOpen(false);
    };

    // Ferme la sidebar lors du redimensionnement de l'écran si la largeur dépasse 768px
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth > 768 && isMobileMenuOpen) {
                setIsMobileMenuOpen(false);
            }
        };

        window.addEventListener('resize', handleResize);

        // Nettoyage de l'effet pour éviter les fuites de mémoire
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [isMobileMenuOpen]);

    // Ferme la sidebar si on clique en dehors
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (isMobileMenuOpen && !event.target.closest('.sidebar') && !event.target.closest('.hamburger')) {
                closeSidebar();
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
                {/* Logo */}
                <div className="logo">
                    <img src={logo} alt="Logo" className="logo-img" />
                </div>

                {/* Navigation pour les grands écrans */}
                <nav className="nav">
                    <ul className="nav-list">
                        <li className="nav-item">
                            <a href="#about" className="nav-link">About</a>
                        </li>
                        <li className="nav-item">
                            <a href="#experience" className="nav-link">Experience</a>
                        </li>
                        <li className="nav-item">
                            <a href="#projects" className="nav-link">Projects</a>
                        </li>
                        <li className="nav-item">
                            <a href="#contact" className="nav-link">Contact</a>
                        </li>
                        <li className="nav-item">
                            <a href="/cv.pdf" className="nav-link resume-button" download>Resume</a>
                        </li>
                    </ul>
                </nav>

                {/* Menu mobile */}
                <div className="mobile-controls">
                    <div className={`hamburger ${isMobileMenuOpen ? 'active' : ''}`} onClick={toggleMobileMenu}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>

                {/* Sidebar pour mobile */}
                <div className={`sidebar ${isMobileMenuOpen ? 'open' : ''}`}>
                    <ul className="sidebar-list">
                        <li className="nav-item">
                            <Link to="/" className="nav-link" onClick={toggleMobileMenu}>Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/projects" className="nav-link" onClick={toggleMobileMenu}>Projects</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/about" className="nav-link" onClick={toggleMobileMenu}>About</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/contact" className="nav-link" onClick={toggleMobileMenu}>Contact</Link>
                        </li>
                        <li className="nav-item">
                            <a href="/cv.pdf" className="nav-link resume-button" download onClick={toggleMobileMenu}>Resume</a>
                        </li>
                    </ul>
                </div>
            </div>
        </header>
    );
}

export default Header;
