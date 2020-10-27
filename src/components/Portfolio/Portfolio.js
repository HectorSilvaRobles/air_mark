import React from 'react';
import Slider from 'react-slick'
import work1 from '../../assets/work1.png'
import work2 from '../../assets/work2.png'
import work3 from '../../assets/work3.png'
import work4 from '../../assets/work4.png'
import work5 from '../../assets/work5.png'
import './portfolio.sass'

const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    className: 'portfolio-card',
    arrow: false,
    // autoplay: true,
    // autoplaySpeed: 2500
  };

const Portfolio = () => {
    return (
        <div className='portfolio'>
            <div className='portfolio-header'>
                <h1>Previous Work</h1>
                <h2>Check out the projects we've completed in the past.</h2>
            </div>
            <div className='portfolio-body'>
                <Slider {...settings}>
                    <div>
                        <div className='p-card'>
                            <div>
                                <img src={work1} />
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className='p-card'>
                            <div>
                                <img src={work2} />
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className='p-card'>
                            <div>
                                <img src={work3} />
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className='p-card'>
                            <div>
                                <img src={work4} />
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className='p-card'>
                            <div>
                                <img src={work5} />
                            </div>
                        </div>
                    </div>
                </Slider>
            </div>
        </div>
    )
}

export default Portfolio