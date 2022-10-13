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
        <Col xs='4'>
            {/* <img alt="dsdsd" src={src} style={{ width: '100%', aspectRatio: '1/1' }}></img> */}
            <div style={{ width: '200px', height: '200px', backgroundColor: 'yellow', margin: 'auto', paddingTop: '100px' }}>{title}</div>
        </Col>
    </>

}
const ServiceCreate = (props) => {
    const elementList = [
        {
            title: 'BODY RECORD',
            src: images.d01
        },
        {
            title: 'MY EXERCISE',
            src: images.l01
        },
        {
            title: 'MY DAIARY',
            src: images.l03
        }
    ]
    const charts = {
        options: {
            chart: {
                id: "basic-bar"
            },
            xaxis: {
                categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998]
            },
            theme: {
                mode: 'dark',
                // color: '#255aee'
            },
            title: {
                text: 'Body Record2021.05.21',
                align: 'left'
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
        <Container fluid style={{ textAlign: 'center', width: '80%' }}>
            <Row xs='12' style={{ paddingTop: '40px' }}>
                {elementList.map(e => Element(e.src, e.title))}
            </Row>
            <Row xs='12' style={{ paddingTop: '40px' }}>
                <Col xs='12'>
                    <Chart
                        options={charts.options}
                        series={charts.series}
                        type="line"
                        width="100%"
                        height={400}
                    // style={{ backgroundColor: 'black', color: 'yellow' }}
                    />
                </Col>
            </Row>
        </Container>
    )
}
export default ServiceCreate;