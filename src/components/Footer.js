import React, { Component } from 'react'
import { Container, Col, Row } from 'react-bootstrap'
import styled from 'styled-components'
import ww from '../images/guangdong.png'
import logo from '../images/LOGO-2.png';
import weixin from '../images/weixin.png';
import zhifubao from '../images/zhifubao.png';

const Footer = styled.div`
    margin-top:24px;
    width:100%;
    padding-top:16px;
    padding-bottom:16px;
    background:#61aafb;
    color:white;
    font-size:12px;

    .gongan{
        display:flex;
        align-items:center;
        justify-content:center;
    }
    p{
        font-size:14px;
    }
    .qr-code-wrapper{
        display:flex;
        align-items:flex-end;
        height:100%;
        > div{
            width:50%;
            text-align:center;
        }
    }
`
export class lunbo extends Component {
    render() {
        return (
            <Footer >
                <Container>
                    <Row>
                        <Col md={6}>
                            导航信息
                        </Col>
                        <Col md={6}>
                            <img style={{ width: '60%' }} src={logo}></img>
                            <p>地址：南院区(院本部)地处珠海市香洲区南屏南琴路3366号</p>
                            <p style={{ marginLeft: '3em' }}>北院区地处广东省珠海市香洲柠溪路543号</p>
                            <div>
                                <Row>
                                    <Col>
                                        <p>邮编：519001</p>
                                        <p>电话：0756-2313115 2313124</p>
                                        <p>传真：0756-2313000</p>
                                        <p>网址：www.fuyou.cn</p>
                                        <p>电邮地址：zhfyybgs@zhuhai.gov.cn</p>
                                    </Col>
                                    <Col>
                                        <div className='qr-code-wrapper'>
                                            <div>
                                                <img src={weixin} />
                                                <span>微信公众号</span>
                                            </div>
                                            <div>
                                                <img src={zhifubao} />
                                                <span>支付宝生活号</span>
                                            </div>
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col >
                            <div className='gongan'>
                                <img src={ww}></img>
                                <span>粤公网安备 44040202001103号</span>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </Footer>
        )
    }
}

export default lunbo
