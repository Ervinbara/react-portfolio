import React, { useState } from 'react';
import '../css/Projects.css';

const projectData = [
  {
    id: 1,
    title: 'Flight Local (B2B Travel)',
    category: 'Web Development',
    image: 'https://via.placeholder.com/300',
  },
  {
    id: 2,
    title: 'AI Lab Granada',
    category: 'Web Development',
    image: 'https://via.placeholder.com/300',
  },
  {
    id: 3,
    title: 'Khora – Urban Thinkers',
    category: 'Web Development',
    image: 'https://via.placeholder.com/300',
  },
  {
    id: 4,
    title: 'Tryotel',
    category: 'Web Development',
    image: 'https://via.placeholder.com/300',
  },
  {
    id: 5,
    title: 'Tapy – Download. Connect. Share.',
    category: 'Web Development',
    image: 'https://via.placeholder.com/300',
  },
  // Ajoute plus de projets ici
];

const categories = ['All', 'Web Development', 'Data Visualization', 'Design'];

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const handleCategoryClick = (category) => {
    setActiveCategory(category);
  };

  const filteredProjects =
    activeCategory === 'All'
      ? projectData
      : projectData.filter((project) => project.category === activeCategory);

  return (
    <div id="projects" className="projects-container">
      {/* Section de filtre */}
      <div className="projects-filters">
        <span className="filter-label">Filter by:</span>
        {categories.map((category) => (
          <button
            key={category}
            className={`filter-button ${activeCategory === category ? 'active' : ''}`}
            onClick={() => handleCategoryClick(category)}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Grille des projets */}
      <div className="projects-grid">
        {filteredProjects.map((project) => (
          <div key={project.id} className="project-card">
            <img src={project.image} alt={project.title} />
            <div className="project-info">
              <h3>{project.title}</h3>
              <p>{project.category}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
