import React, { useState, useEffect } from 'react';
import './Projects.css';

const Projects = ({ title, data }) => {
    const [repoLinks, setRepoLinks] = useState({});
    const githubUser = "maryjenzz";

    useEffect(() => {
        const fetchRepos = async () => {
            for (const proj of data) {
                if (proj.repoName && !repoLinks[proj.repoName]) {
                    try {
                        const response = await fetch(`https://api.github.com/repos/${githubUser}/${proj.repoName}`);
                        if (response.ok) {
                            const repoData = await response.json();
                            setRepoLinks(prev => ({
                                ...prev,
                                [proj.repoName]: repoData.html_url
                            }));
                        }
                    } catch (err) {
                        console.error("Erro ao conectar com a API:", err);
                    }
                }
            }
        };

        fetchRepos();
    }, [data]);

    return (
        <section className="projects-container">
            <h2 className="section-title">{title}</h2>
            <div className="projects-grid">
                {data.map((proj, index) => (
                    <div key={index} className="project-card">
                        <div className="project-thumbnail">
                            <img src={import.meta.env.BASE_URL + proj.image} alt={proj.name} />
                            <div className="project-overlay">
                                <a href={proj.link} target="_blank" rel="noreferrer" className='view-button'>Ver Projeto</a>
                            </div>
                        </div>
                        <div className="project-info">
                            <h3>{proj.name}</h3>
                            <p>{proj.description}</p>
                        </div>
                        {proj.repoName && (
                            <a
                                href={repoLinks[proj.repoName] || `https://github.com/${githubUser}/${proj.repoName}`}
                                target="_blank"
                                rel="noreferrer"
                                className='github-api-button'
                            >
                                GitHub
                            </a>
                        )}
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Projects;