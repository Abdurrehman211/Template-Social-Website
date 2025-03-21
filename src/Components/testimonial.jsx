import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import React, { useRef } from 'react';
import Slider from 'react-slick';
import './TestimonialCarousel.css';
import next from './images/next.png'; // Ensure path is correct
import circle from './images/circle.png';
const TestimonialCarousel = () => {
  const sliderRef = useRef(null);

  const testimonials = [
    {
        
      quote: "Exceptional service and creative solutions.",
      name: "Ethan Parker",
      image: "./images/ahmad.jpg", // Path to the image
    },
    {
      quote: "Professional and reliable, would recommend to anyone.",
      name: "Sarah Khan",
      image: "./images/sarah.jpg", // Path to the image
    },
    {
      quote: "Truly innovative and helpful throughout the project.",
      name: "John Doe",
      image: "./images/john.jpg", // Path to the image
    },
    {
      quote: "Great customer service and attention to detail.",
      name: "Jane Smith",
      image: "./images/jane.jpg", // Path to the image
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false, // Disable default arrows
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const handlePrevClick = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPrev();
    }
  };

  const handleNextClick = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext();
    }
  };

  return (
    <>
      <section id="Testimonials">
      <img src={circle} alt='circle' id="circle"/>
        <div className="container">
        
          <div className="row" id='Test-row'>
            <div className="col-lg-6 col-md-6 col-sm-12" id="Test-text">
              <h1>
                What Our <br />
                <span style={{ color: 'cornflowerblue' }}>Satisfied</span> Client Says
              </h1>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12" id="Test-btn">
              <button className="Pre" onClick={handlePrevClick}>
                <img src={next} alt="prev" id="pre-btn" />
              </button>
              <button className="next" onClick={handleNextClick}>
                <img src={next} alt="next" id="next" />
              </button>
            </div>
          </div>

          <div className="testimonial-carousel">
            <Slider ref={sliderRef} {...settings}>
              {testimonials.map((testimonial, index) => (
                <div key={index} className="testimonial">
                  <div className="testimonial-content">
                    <i className="fas fa-quote-left"></i>
                    <p>{testimonial.quote}</p>
                    <h4>- {testimonial.name}</h4>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </section>
    </>
  );
};

export default TestimonialCarousel;
