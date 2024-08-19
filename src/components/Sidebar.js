import React from 'react';
import { Link } from 'react-router-dom';
import '../css/Sidebar.css'; // Assure-toi que le fichier CSS est bien importé

function Sidebar({ isOpen, toggleSidebar }) {
    return (
        <div className={`sidebar ${isOpen ? 'active' : ''}`}>
            <button onClick={toggleSidebar} className="close-btn">
                &times;
            </button>
            <ul>
                <li><Link to="/" onClick={toggleSidebar}>Skills</Link></li>
                <li><Link to="/projects" onClick={toggleSidebar}>Projects</Link></li>
                <li><Link to="/about" onClick={toggleSidebar}>About</Link></li>
                <li><Link to="/contact" onClick={toggleSidebar}>Contact</Link></li>
            </ul>
        </div>
    );
}

export default Sidebar;
