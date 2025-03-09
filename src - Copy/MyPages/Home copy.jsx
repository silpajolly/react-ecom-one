import React from 'react';
import Carousel from '../Components/Carousel';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";

function Home() {
  // const CarouselDataOne = [
  //   {
  //     image: "https://www.w3schools.com/bootstrap5/ny.jpg",
  //     heading: "Heading-one",
  //     description: "Para-one",
  //   },
  //   {
  //     image: "https://www.w3schools.com/bootstrap5/ny.jpg",
  //     heading: "Heading-two",
  //     description: "Para-two",
  //   },
  //   {
  //     image: "https://www.w3schools.com/bootstrap5/ny.jpg",
  //     heading: "Heading-three",
  //     description: "Para-three",
  //   }
  // ]



  return (
    <>
      <div>Home</div>
      <div>
        
        <Carousel demoid ="demo" 
        heading={<h1>Heading-One</h1>} 
        headingtwo={<h1>Heading-two</h1>} 
        headingthree={<h1>Heading-three</h1>} 
        />
        <h1>New Carousel below</h1>
<div className="prodct">
<div className="cc">
        <Carousel  demoid ="demoTwo" 
          heading={<h3>AAA -Heading-One</h3>} 
          headingtwo={<h3>BBB -Heading-two</h3>} 
          headingthree={<h3>CCC -Heading-three</h3>} 
        />

        </div>


        <div className="cc">
        <Carousel  demoid ="demoTwo" 
          heading={<h3>AAA -Heading-One</h3>} 
          headingtwo={<h3>BBB -Heading-two</h3>} 
          headingthree={<h3>CCC -Heading-three</h3>} 
        />

        </div>

        <div className="cc">
        <Carousel  demoid ="demoTwo" 
          heading={<h3>AAA -Heading-One</h3>} 
          headingtwo={<h3>BBB -Heading-two</h3>} 
          headingthree={<h3>CCC -Heading-three</h3>} 
        />

        </div>

</div>
       
        

      </div>
    </>

  )
}

export default Home