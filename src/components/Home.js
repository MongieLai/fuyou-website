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
            <div >
                内容
            </div>
        )
    }
}

export default lunbo
