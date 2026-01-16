import React from 'react';
import './Cover.css';

const Cover = () => {
    return (
        <section className="cover">
            <div className="cover-border">
                <div className="cover-content">
                    <h1>Mylena Jenzura</h1>
                    <h2>Web Developer</h2>
                </div>

                <div className="scroll-indicator">
                    <span>PORTFOLIO</span>
                    <div className="arrow">↓</div>
                </div>
            </div>
        </section>
    );
};

export default Cover;