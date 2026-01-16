import React from 'react';
import './Home.css';

const Home = () => {
    const skills = [
        { name: 'HTML5', icon: 'devicon-html5-plain' },
        { name: 'CSS3', icon: 'devicon-css3-plain' },
        { name: 'JavaScript', icon: 'devicon-javascript-plain' },
        { name: 'React', icon: 'devicon-react-original' },
        { name: 'Vite', icon: 'devicon-vite-original' },
        { name: 'Git', icon: 'devicon-git-plain' },
        { name: 'Node.js', icon: 'devicon-nodejs-plain' },
        { name: 'npm', icon: 'devicon-npm-original-wordmark' },
        { name: 'MySQL', icon: 'devicon-mysql-original' }
    ];

    return (
        <section className="home">
            <div className="home-container">
                <div className="bio-section">
                    <p className="status-tag">Analista e Desenvolvedora de Sistemas</p>
                    <p className="bio-text">
                        Desenvolvedora Front-end focada em criar experiências digitais
                        minimalistas e eficientes.
                        <br />
                        Atualmente aprofundando conhecimentos
                        em ecossistemas JavaScript e aplicações em React.
                    </p>
                </div>

                <div className="tools-section">
                    <h3>Ferramentas & Tecnologias</h3>
                    <div className="skills-grid">
                        {skills.map(skill => (
                            <div key={skill.name} className="skill-card">
                                <i className={skill.icon}></i>
                                <span>{skill.name}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Home;