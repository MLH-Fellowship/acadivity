import React from 'react';
import './HeroSection.css';
import Button from 'react-bootstrap/Button';

function HeroSection() {
    return (
        <div className='hero-container'>
            <h1>Welcome to Acadivity</h1>
            <p>DON'T BE BUSY, BE PRODUCTIVE.</p>
            <div clasName='hero-btns'>
            <Button variant="primary" size="lg">
                Get Started
            </Button>{' '}

            </div>
        </div>
    )
}

export default HeroSection
