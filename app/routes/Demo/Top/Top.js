import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import _ from "lodash";
import Chart from "react-apexcharts";
import {
    Container,
    Col,
    Row,
    Button,
} from "components";
import { windows } from "@owczar/dashboard-style--airframe/js-modules/colors";
const images = {
    'd01': require('./../../../images/demo/d01.jpg'),
    'm01': require('./../../../images/demo/m01.jpg'),
    'l03': require('./../../../images/demo/l03.jpg'),
    'm02': require('./../../../images/demo/m02.jpg'),
    'l01': require('./../../../images/demo/l01.jpg'),
}
const Element = (src, title) => {
    return <>
        <Col xs='3'>
            <img alt="dsdsd" src={src} style={{ width: '100%', aspectRatio: '1/1' }}></img>
            <div style={{ position: 'relative', zIndex: 1 }}>{title}</div>
        </Col>
    </>

}
const ServiceCreate = (props) => {
    const elementList = [
        {
            title: 'ABC',
            src: images.d01
        },
        {
            title: 'ABC',
            src: images.l01
        },
        {
            title: 'ABC',
            src: images.l03
        },
        {
            title: 'ABC',
            src: images.m01
        },
        {
            title: 'ABC',
            src: images.m02
        },
        {
            title: 'ABC',
            src: images.d01
        },
        {
            title: 'ABC',
            src: images.d01
        },
        {
            title: 'ABC',
            src: images.d01
        },
    ]
    const charts = {
        options: {
            // chart: {
            //     id: "basic-bar"
            // },
            xaxis: {
                categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998]
            },
            theme: {
                mode: 'dark',
                // color: '#255aee'
            },
            markers: {
                size: 5,
            }
        },
        series: [
            {
                name: "series-1",
                data: [100, 90, 80, 70, 60, 50, 40, 30]
            },
            {
                name: "series-2",
                data: [100, 85, 75, 65, 55, 45, 35, 25]
            }
        ]
    }

    return (
        <div style={{ textAlign: 'center' }}>
            <Row xs='12'>
                <img src={images.d01} style={{ width: '40%', aspectRatio: '1/1' }}></img>
                <div style={{ width: '59.5%' }}>
                    <Chart
                        options={charts.options}
                        series={charts.series}
                        type="line"
                        width="100%"
                        height='100%'
                    />
                </div>
            </Row>
            <Row xs='12' style={{ marginTop: '20px' }}>
                <Col xs='3'>
                    AAA
                    <br />
                    AAAAA
                    <br />
                    AAAAAAA
                    <br />
                    AAAAA
                    <br />
                    AAA
                </Col>
                <Col xs='3'>
                    AAA
                    <br />
                    AAAAA
                    <br />
                    AAAAAAA
                    <br />
                    AAAAA
                    <br />
                    AAA
                </Col>
                <Col xs='3'>
                    AAA
                    <br />
                    AAAAA
                    <br />
                    AAAAAAA
                    <br />
                    AAAAA
                    <br />
                    AAA
                </Col>
                <Col xs='3'>
                    AAA
                    <br />
                    AAAAA
                    <br />
                    AAAAAAA
                    <br />
                    AAAAA
                    <br />
                    AAA
                </Col>
            </Row>
            <Row xs='12' style={{ marginTop: '20px' }}>
                <Col xs='1'>
                </Col>
                <Col xs='10'>
                    <Row xs='12'>
                        {elementList.map(e => Element(e.src, e.title))}
                    </Row>
                </Col>
            </Row>
        </div>
    )
}
export default ServiceCreate;