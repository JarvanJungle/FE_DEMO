import React, { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import _ from "lodash";
import Chart from "react-apexcharts";
import {
    Container,
    Col,
    Row,
} from "components";
import Item from "./Item";
const images = {
    d01: 'https://oss-uat.hypersms.vn/hypersms/20221016/ba11a6d049d442bfad538c5970f2b686openAPI.jpg',
    m01: 'https://oss-uat.hypersms.vn/hypersms/20221016/fb96e0aaf1a3419fb43bc4e8c8f66cb5openAPI.jpg',
    l03: 'https://oss-uat.hypersms.vn/hypersms/20221016/0ddd4de278d248d5903db1f280b7c4abopenAPI.jpg',
    m02: 'https://oss-uat.hypersms.vn/hypersms/20221016/df861d43170a4084aa84cb7ea019210aopenAPI.jpg',
    l01: 'https://oss-uat.hypersms.vn/hypersms/20221016/1f5974ffc64347278ab5862032a2096bopenAPI.jpg',
}

const LeftImage = (props) => {
    const { leftImageWidth } = props
    const ref = useRef()
    const fontSize = 20
    useEffect(() => {
        let canvas = ref.current
        let img = new Image()
        let src = require('./../../../images/demo/d01.jpg')
        img.src = src
        // width = canvas.width
        img.onload = () => {
            canvas.width = leftImageWidth * 40 / 100
            // canvas.height = leftImageWidth

            let ctx = canvas.getContext('2d');
            // ctx.drawImage(img, 0, 0)
            ctx.beginPath();
            ctx.arc(100, 75, 50, 0, 2 * Math.PI);
            ctx.stroke();
            ctx.font = fontSize.toString() + "px Arial";
            ctx.fillStyle = "white";
            // ctx.fillText(title, 0, canvas.width);
        }
    }, [])
    return <>
        <canvas ref={ref}></canvas>
    </>
}
const Top = () => {
    const myRef = useRef()
    // let [leftImageWidth, setLeftImageWidth] = useState()
    const elementList = [
        {
            title: 'ABCABCCC',
            src: images.d01
        },
        {
            title: 'XYAAAA',
            src: images.l01
        },
        {
            title: 'RRRTTTT',
            src: images.l03
        },
        {
            title: 'GGGFFFF',
            src: images.m01
        },
        {
            title: 'EE$$%%%',
            src: images.m02
        },
        {
            title: '4555UUU',
            src: images.d01
        },
        {
            title: 'IIII9990',
            src: images.d01
        },
        {
            title: '1234567',
            src: images.d01
        },
    ]
    const charts = {
        options: {
            xaxis: {
                categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998]
            },
            theme: {
                mode: 'dark',
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
    // useEffect(() => {
    //     setLeftImageWidth(myRef?.current?.clientWidth)
    // }, [myRef])

    return (
        <div style={{ textAlign: 'center' }}>
            <Row xs='12'>
                <img src={images.d01} style={{ width: '40%', aspectRatio: '1/1' }}></img>
                {/* <div style={{ width: '40%' }} ref={myRef}>
                    <LeftImage leftImageWidth={window.innerHeight} />
                </div> */}
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
                        {elementList.map(e => Item(e.src, e.title))}
                    </Row>
                </Col>
                <Col xs='1'>
                </Col>
            </Row>
        </div>
    )
}
export default Top;