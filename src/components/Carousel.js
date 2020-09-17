import React, { Component } from 'react'
import { Carousel } from 'react-bootstrap'

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
                            src={require('../images/lunbo1.jpg')}
                            alt="First slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={require('../images/lunbo2.jpg')}
                            alt="Second slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={require('../images/lunbo3.jpg')}
                            alt="Third slide"
                        />
                    </Carousel.Item>
                </Carousel>
            </>
        )
    }
}

export default lunbo
