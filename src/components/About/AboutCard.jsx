import React from 'react';
import './About.css';

const AboutCard = ({icon, title, subtitle}) => {
    return (
        <>
            <div className="icon-container">
                {icon}
            </div>
            <h3>{title}</h3>
            <p>{subtitle}</p>
        </>
    );
};

export default AboutCard;