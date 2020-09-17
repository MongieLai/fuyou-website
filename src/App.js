import React from 'react';
import './App.css';
import TopImg from './images/LOGO.png'
import { Navbar, NavDropdown, Container, Col, Row } from 'react-bootstrap'
import { HashRouter as Router, Route } from 'react-router-dom'
import Nav from './components/Nav'
import Carousel from './components/Carousel'
import Footer from './components/Footer'
import Home from './components/Home'
import styled from 'styled-components'
import wechat from './images/weixin.jpg'
const FixWechat = styled.img`
  width:120px;
  position: fixed;
  right: 10px;
  top: 100px;
  z-index: 999;
`
function App() {
  return (
    <div>
      <Router>
        <FixWechat src={wechat} art="weixin" />
        <Container>
          <Row>
            <Col>
              <img style={{ marginBottom: 20, marginTop: 20 }} src={TopImg}></img>
            </Col>
          </Row>
          <Nav></Nav>
          <Carousel />
          <Route path='/home' component={Home} />
          <Route path='/link' component={Home} />
        </Container>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
