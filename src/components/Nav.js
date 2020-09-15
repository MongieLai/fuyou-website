import React, { Component } from 'react'
import { Navbar, Nav, NavDropdown } from 'react-bootstrap'

import { NavLink } from 'react-router-dom'
class MyNav extends Component {
    constructor(props) {
        super(props)
        this.state = {
            MenuInfo: []
        }
    }

    componentDidMount = () => {
        this.homeA.click()
    }


    render() {
        return (
            <>
                <Navbar bg="primary" variant="dark" expand="lg">
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Link href='#/home' ref={ref => this.homeA = ref} className="navbar-default">首页</Nav.Link>
                            {/* <Nav.Link as={<NavLink to='/home' />}>首页</Nav.Link> */}
                            <Nav.Link href="#/link">医院概括</Nav.Link>
                            <NavDropdown title="专家科室" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                            </NavDropdown>

                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
                {/* 首页（固定不变）、医院概况、科室专家、新闻中心、护理园地、便民服务、健康教育、科研教学、党群建设、院务公开、联系我们 */}
            </>
        );
    }
}

export default MyNav;