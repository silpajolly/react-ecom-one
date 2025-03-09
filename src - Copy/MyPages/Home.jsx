import React from 'react';
import Carousel from '../Components/Carousel';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";

function Home() {

  return (
    <>
      
      <div>        
        <Carousel demoid ="demo" 
        heading={<h1>Heading-One</h1>} 
        headingtwo={<h1>Heading-two</h1>} 
        headingthree={<h1>Heading-three</h1>} 
        />        
      </div>
    </>

  )
}

export default Home