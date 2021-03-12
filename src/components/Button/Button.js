import React from 'react';
import './Button.css';

const Button = ({text}) => {
    return (
        <button className="btn"><span className="btn-text">{text}</span></button>
    );
}

export default Button;