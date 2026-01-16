import React from 'react';
import './Certificates.css';

const Certificates = ({ data }) => {
    return (
        <section className="certificates-section">
            <h2>Certificados</h2>
            <div className="certificates-grid">
                {data.map((cert, index) => (
                    <div key={index} className="cert-item">
                        <div className="cert-info">
                            <h3>{cert.name}</h3>
                            <p>{cert.company}</p>
                        </div>
                        <div className="cert-year">
                            {cert.year}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Certificates;