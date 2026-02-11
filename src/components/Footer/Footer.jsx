import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-line"></div>
            <div className="footer-content">
                <div className="footer-column">
                    <span className="column-title">CONTATO</span>
                    <div className="footer-social-icons">
                        <a href="https://github.com/maryjenzz" target="_blank" rel="noreferrer" title="GitHub">
                            <i className="devicon-github-original"></i>
                        </a>
                        <a href="https://linkedin.com/in/mylenajenzura/" target="_blank" rel="noreferrer" title="LinkedIn">
                            <i className="devicon-linkedin-plain"></i>
                        </a>
                        <a href="mailto:mylenamari34@gmail.com" target="_blank" rel="noreferrer" title="Gmail">
                            <i className="ph ph-envelope"></i>
                        </a>
                    </div>
                </div>

                <div className="footer-credits">
                    <p>© 2026 / Mylena Jenzura</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;