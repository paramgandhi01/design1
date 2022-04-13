import "./Carousel.css";
import React, { Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

class DemoCarousel extends Component {
  render() {
    return (
      <Carousel
      
        stopOnHover={true}
        infiniteLoop={true}
        autoPlay={true}
        emulateTouch={true}
        showStatus={false}
        showArrows={true}
        useKeyboardArrows={true}
        showThumbs={true}
        dynamicHeight={false}
      >
        <div className="img-first">
          <div className="in">
            <h2>100% Responsive Design</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing <br /> elit,
              sed do eiusmod tempor incididunt ut labore et <br /> dolore magna
              aliqua
            </p>
            <button className="carousel-btn">Get it now</button>
          </div>
          <div>
            <img src="./images/girl1.jpg" className="c-img" />
          </div>
        </div>

        <div className="img-second">
          <div className="in">
            <h2>Free E-commerce Template</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing <br /> elit,
              sed do eiusmod tempor incididunt ut labore et <br /> dolore magna
              aliqua
            </p>
            <button className="carousel-btn">Get it now</button>
          </div>
          <div>
            <img src="./images/girl2.jpg" className="c-img" />
          </div>
        </div>

        <div className="img-third">
          <div className="in">
            <h2>Free E-commerce Template</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing <br /> elit,
              sed do eiusmod tempor incididunt ut labore et <br /> dolore magna
              aliqua
            </p>
            <button className="carousel-btn">Get it now</button>
          </div>
          <div>
            <img src="./images/girl3.jpg" className="c-img" />
          </div>
        </div>
      </Carousel>
    );
  }
}
export default DemoCarousel;
