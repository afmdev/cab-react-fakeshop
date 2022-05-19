import React from 'react'
import { Carousel } from 'react-bootstrap'

function ImageCarousel() {

    return (
        <div className="ImageCarousel">
            <Carousel>
                <Carousel.Item interval={10000}>
                <img
                    className="d-block w-100"
                    src="./img1.jpg"
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={10000}>
                <img
                    className="d-block w-100"
                    src="./img2.jpg"
                    alt="Second slide"
                />
                <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="./img3.jpg"
                    alt="Third slide"
                />
                <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
        
    )
}

    //   src="https://picsum.photos/5000/500"

export default ImageCarousel