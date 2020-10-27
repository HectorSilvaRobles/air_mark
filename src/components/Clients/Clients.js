import React from 'react';
import Slider from 'react-slick'
import './clients.sass';

const settings = {
    className: "clients-slick",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 3,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
        {
            breakpoint: 1100,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              centerMode: false
            }
        },
        {
          breakpoint: 900,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            centerMode: false

          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 1,
            centerMode: false
          }
        },
        
      ]
  };


const Clients = () => {
    return (
        <div className='clients'>
            <div className='clients-header'>
                <h1>Our Clients</h1>
                <h2>Businesses and oraganizations we’ve worked with.</h2>
            </div>
            <div className='clients-body'>
                <Slider {...settings}>
                    <div className='clients-card'>
                        <div>
                            <div></div>
                        </div>
                    </div>
                    
                    <div className='clients-card'>
                        <div>
                            <div></div>
                        </div>
                    </div>
                    <div className='clients-card'>
                        <div>
                            <div></div>
                        </div>
                    </div>
                    <div className='clients-card'>
                        <div>
                            <div></div>
                        </div>
                    </div>
                    <div className='clients-card'>
                        <div>
                            <div></div>
                        </div>
                    </div>
                </Slider>
            </div>
        </div>
    )
}

export default Clients