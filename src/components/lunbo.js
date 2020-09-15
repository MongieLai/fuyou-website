import React, { Component } from 'react'
import { Carousel } from 'react-bootstrap'

import ww from '../images/lunbo1.jpg'
export class lunbo extends Component {
    constructor(props) {
        super(props)
        this.state = {
            index: 0,
        }
    }


    handleSelect = (selectedIndex, e) => {
        this.setState({ index: selectedIndex });
    };

    render() {
        const index = 0
        const handleSelect = []
        return (
            <>
                <Carousel activeIndex={this.state.index} onSelect={this.handleSelect}>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={ww}
                            alt="First slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={ww}
                            alt="Second slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={ww}
                            alt="Third slide"
                        />
                    </Carousel.Item>
                </Carousel>
            </>
        )
    }
}

export default lunbo
