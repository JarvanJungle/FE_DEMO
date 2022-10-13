import React, { useEffect, useState } from "react";
import _ from "lodash";
import {
    Container,
    Col,
    Row,
    Button,
} from "components";
const images = {
    'c1': require('./../../../images/demo/column-1.jpg'),
    'c2': require('./../../../images/demo/column-2.jpg'),
    'c3': require('./../../../images/demo/column-3.jpg'),
    'c4': require('./../../../images/demo/column-4.jpg'),
    'c5': require('./../../../images/demo/column-5.jpg'),
    'c6': require('./../../../images/demo/column-6.jpg'),
    'c7': require('./../../../images/demo/column-7.jpg'),
    'c8': require('./../../../images/demo/column-8.jpg'),
}
const Element = (src, title) => {
    return <>
        <Col xs='3'>
            {/* <img alt="dsdsd" src={src} style={{ width: '100%', aspectRatio: '1/1' }}></img> */}
            <div style={{ margin: 'auto', width: '270px', height: '120px', backgroundColor: 'black' }}>
                
            
            <div style={{ paddingTop: '30px', color: 'yellow' }}>
                {title}
            </div>
            <div style={{ color: 'white' }}>_________________
                <br />
                AAAAAAAA
            </div>
            </div>
        </Col>
    </>

}
const ImageElement = (src, title) => {
    return <>
        <Col xs='3'>
            <img src={src} style={{ width: '300px', height: '200px' }}></img>
            <div style={{ margin: 'auto' }}>{title}</div>
        </Col>
    </>

}
const ServiceCreate = (props) => {
    const elementList = [
        {
            title: 'RECOMMENDED',
        },
        {
            title: 'RECOMMENDED',
        },
        {
            title: 'RECOMMENDED',
        },
        {
            title: 'RECOMMENDED',
        }
    ]
    const imageElementList = [
        {
            title: 'column-1.jpg',
            src: images.c1
        },
        {
            title: 'column-2.jpg',
            src: images.c2
        },
        {
            title: 'column-3.jpg',
            src: images.c3
        },
        {
            title: 'column-4.jpg',
            src: images.c4
        },
        {
            title: 'column-5.jpg',
            src: images.c5
        },
        {
            title: 'column-6.jpg',
            src: images.c6
        },
        {
            title: 'column-7.jpg',
            src: images.c7
        },
        {
            title: 'column-8.jpg',
            src: images.c8
        }, ,
        {
            title: 'column-7.jpg',
            src: images.c7
        },
        {
            title: 'column-8.jpg',
            src: images.c8
        }
    ]
    return (
        <Container fluid style={{ textAlign: 'center', width: '80%' }}>
            <Row xs='12' style={{ paddingTop: '40px' }}>
                {elementList.map(e => Element(e.src, e.title))}
            </Row>
            <Row xs='12' style={{ paddingTop: '40px' }}>
                {imageElementList.map(e => ImageElement(e.src, e.title))}
            </Row>
        </Container>
    )
}
export default ServiceCreate;