import React from 'react';
import { FaLaptopCode, FaReact } from 'react-icons/fa'; // Import des icônes FontAwesome
import { SiFlutter } from 'react-icons/si'; // Icône Flutter
import '../css/Skills.css';

const skills = [
  {
    title: 'Software Development',
    icon: <FaLaptopCode />,
    description: 'Experienced in both functional and OOP: Dart, Python, Java, JavaScript, TypeScript.',
    color: '#ff0077', // Couleur du soulignement
  },
  {
    title: 'Frontend Dev React, NextJS',
    icon: <FaReact />,
    description: 'Passionate about UI/UX. Over 5 years of development experience in HTML, CSS, JS, React and NextJS.',
    color: '#007bff', // Couleur du soulignement
  },
  {
    title: 'Flutter Dev Android, iOS',
    icon: <SiFlutter />,
    description: 'Skilled in developing hybrid mobile apps and cross-platform solutions using Flutter.',
    color: '#ff6600', // Couleur du soulignement
  },
];

const Expertise = () => {
  return (
    <section id="expertise" className="expertise-section">
      <h2 className="expertise-title">My Expertise</h2>
      <div className="expertise-cards">
        {skills.map((skill, index) => (
          <div key={index} className="expertise-card">
            <div className="icon" style={{ color: skill.color }}>
              {skill.icon}
            </div>
            <h3 className="expertise-card-title">
              {skill.title}
              <span className="underline" style={{ backgroundColor: skill.color }}></span>
            </h3>
            <p className="expertise-description">{skill.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Expertise;
