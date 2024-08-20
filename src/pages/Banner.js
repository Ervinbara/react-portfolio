import React from 'react';
import '../css/Banner.css';

function Banner() {
    return (
        <section className="banner">
            <div className="banner-content">
                <h1 className="banner-title">Bara Ervin</h1>
                <p className="banner-subtitle">I am a Software Engineer, Front-End & App Developer.</p>
                <div className="banner-icons">
                    <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-github"></i>
                    </a>
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-linkedin"></i>
                    </a>
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-twitter"></i>
                    </a>
                </div>
            </div>
            <div className="scroll-icon">
                <span></span>
            </div>
        </section>
    );
}

export default Banner;
