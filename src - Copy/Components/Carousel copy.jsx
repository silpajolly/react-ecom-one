import React from 'react'

                        
function Carousel({demoid,heading, headingtwo, headingthree }) {
    return (
        <>

            <div id={demoid} class="carousel slide" data-bs-ride="carousel">

                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#demo" data-bs-slide-to="0" className="active"></button>
                    <button type="button" data-bs-target="#demo" data-bs-slide-to="1"></button>
                    <button type="button" data-bs-target="#demo" data-bs-slide-to="2"></button>
                </div>

                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="https://www.w3schools.com/bootstrap5/ny.jpg" alt="Los Angeles" className="d-block" style={{ width: '100%' }} />
                        <div className="carousel-caption">
                        {heading}
                            <p>We had such a great time in LA!</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src="https://www.w3schools.com/bootstrap5/chicago.jpg" alt="Chicago" className="d-block" style={{ width: '100%' }} />
                        <div className="carousel-caption">
                        {headingtwo}
                            <p>Thank you, Chicago!</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src="https://www.w3schools.com/bootstrap5/la.jpg" alt="New York" className="d-block" style={{ width: '100%' }} />
                        <div className="carousel-caption">
                        {headingthree} 
                            <p>We love the Big Apple!</p>
                        </div>
                    </div>
                </div>

                <button className="carousel-control-prev" type="button" data-bs-target={`#${demoid}`} data-bs-slide="prev">
                    <span className="carousel-control-prev-icon"></span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target={`#${demoid}`} data-bs-slide="next">
                    <span className="carousel-control-next-icon"></span>
                </button>
            </div>
            
        </>
    )
}

export default Carousel