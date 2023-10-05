import React, { Component } from "react";
import Carousel from 'react-bootstrap/Carousel';

import dogs1 from '../assets/dogs1.jpg';
import dogs2 from '../assets/dogs2.jpg';
import dogs3 from '../assets/dogs3.jpg';
import dogs4 from '../assets/dogs4.jpg';
import dogs5 from '../assets/dogs5.jpg';

import cats1 from '../assets/cat1.jpg';
import cats2 from '../assets/cat2.jpg';
import cats3 from '../assets/cat3.jpg';
import cats4 from '../assets/cat4.jpg';

export default class CaruselBox extends Component {
    render() {
        return (
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100 h-10"
                        src={dogs1}
                        alt="Dogs"
                    />
                </Carousel.Item>

                <Carousel.Item>
                    <img
                        className="d-block w-100 h-10"
                        src={cats3}
                        alt="Dogs 2"
                    />
                   
                </Carousel.Item>

                <Carousel.Item>
                    <img
                        className="d-block w-100 h-10"
                        src={dogs5}
                        alt="Dogs 2"
                    />
                   
                </Carousel.Item>

                <Carousel.Item>
                    <img
                        className="d-block w-100 h-10"
                        src={dogs3}
                        alt="Dogs 2"
                    />
                  
                </Carousel.Item>

                <Carousel.Item>
                    <img
                        className="d-block w-100 h-10"
                        src={cats4}
                        alt="Dogs 2"
                    />
                   
                </Carousel.Item>
            </Carousel>
        )
    }
}