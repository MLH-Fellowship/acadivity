import React from 'react';
import Cards from '../Components/Cards';
import HeroSection from '../Components/HeroSection';
import Card from 'react-bootstrap/Card';
import './Home.css';
import NavbarLanding from '../Components/NavbarLanding';



function LandingPage() {
  return (
    <>
    <NavbarLanding/>
      <HeroSection />
      <div className='feature-heading' >
      <Card body>
        Features 
      </Card>
      </div>
      <Cards/>
      <div className='footer' >
      <Card body className='footer'>
        Copyright © Team 01
      </Card>
      </div>
    </>
  );
}

export default LandingPage;