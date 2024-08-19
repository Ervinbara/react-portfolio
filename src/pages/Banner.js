import React from 'react';
import '../css/Banner.css';

function Banner() {
    return (
        <section id="banner" className="banner">
            {/* <div className="geometric-shapes">
                <div className="shape"></div>
                <div className="shape"></div>
                <div className="shape"></div>
                <div className="shape"></div>
                <div className="shape"></div>
            </div> */}
            <div className="banner-content">
                <h1 className="banner-title">I'm Ervin</h1>
                <p className="banner-subtitle">Software Engineer, Front-End & App Developer</p>
            </div>
            <div className="scroll-icon">
                <span></span>
            </div>
        </section>
    );
}

export default Banner;
