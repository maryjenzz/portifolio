import React from 'react';
import './Projects.css';

const Projects = ({ title, data }) => {
    return (
        <section className="projects-container">
            <h2 className="section-title">{title}</h2>
            <div className="projects-grid">
                {data.map((proj, index) => (
                    <div key={index} className="project-card">
                        <div className="project-thumbnail">
                            <img src={import.meta.env.BASE_URL + proj.image} alt={proj.name} />
                            <div className="project-overlay">
                                <a href={proj.link} target="_blank" rel="nonreferrer" className='view-button'>Ver Projeto</a>
                            </div>
                        </div>
                        <div className="project-info">
                            <h3>{proj.name}</h3>
                            <p>{proj.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Projects;