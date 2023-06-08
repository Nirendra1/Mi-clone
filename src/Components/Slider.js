import React from "react";
import "../Styles/Slider.css";
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
const Slider = ( {start }) => {
    return (
        <>
            <div>
                <Carousel fade>
                    {start.map((index) => (
                                <Carousel.Item>
                                                                        <img
                                        className="d-block w-100"
                                        src={index}
                                        alt="First slide" />
                                </Carousel.Item>
                            
                    ))}
                </Carousel>
            </div>
        </>
    )
}
export default Slider;