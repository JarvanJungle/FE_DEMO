import React, { useEffect, useRef, useState } from "react";
import _ from "lodash";
import Chart from "react-apexcharts";
import {
    Container,
    Col,
    Row,
    Button,
} from "components";
const images = {
    'd01': require('./../../../images/demo/d01.jpg'),
    'm01': require('./../../../images/demo/m01.jpg'),
    'l03': require('./../../../images/demo/l03.jpg'),
    'm02': require('./../../../images/demo/m02.jpg'),
    'l01': require('./../../../images/demo/l01.jpg'),
}
const Element = (src, title, bottomTitle) => {
    const blackWhiteImage = 'https://oss-uat.hypersms.vn/hypersms/20221016/db168aff773340b98259ca59157eaed8openAPI.jpg'
    const fontSize = 20
    const ref = useRef()
    useEffect(() => {
        let canvas = ref.current
        let img = new Image()
        img.src = blackWhiteImage
        img.onload = () => {
            // canvas.width = canvas.clientWidth
            canvas.height = canvas.clientWidth
            let ctx = canvas.getContext('2d');
            // outside cover 
            ctx.fillStyle = "yellow";
            ctx.fillRect(0, 0, canvas.clientWidth, canvas.clientWidth)
            ctx.drawImage(img, 20, 20, canvas.clientWidth - 40, canvas.clientWidth - 40)
            // title
            const sentenceLength = title.length * fontSize
            ctx.font = fontSize.toString() + "px Arial";
            ctx.fillText(title, canvas.clientWidth / 2 - sentenceLength / 4, canvas.clientWidth / 2);
            // bottom rectangle
            const bottomSentenceLength = bottomTitle.length * fontSize
            ctx.fillStyle = "red";
            ctx.fillRect(canvas.clientWidth / 2 - bottomSentenceLength / 2, canvas.clientWidth / 2, bottomSentenceLength, 30)
            // bottom title
            ctx.font = fontSize.toString() + "px Arial";
            ctx.fillStyle = "yellow";
            ctx.fillText(bottomTitle, canvas.clientWidth / 2 - bottomSentenceLength / 4, canvas.clientWidth / 2 + fontSize);

        }
    }, [])
    return <Col xs='4'>
        <canvas ref={ref}></canvas>
    </Col>
}
const ServiceCreate = (props) => {
    const elementList = [
        {
            title: 'BODY RECORD',
            src: images.d01,
            bottomTitle: 'AAAAAAAAAA'
        },
        {
            title: 'MY EXERCISE',
            src: images.l01,
            bottomTitle: 'BBBBBBBBB'
        },
        {
            title: 'MY DAIARY',
            src: images.l03,
            bottomTitle: 'CCCCCCCCCC'
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
        <Container fluid style={{ textAlign: 'center', width: '80%' }}>
            <Row xs='12' style={{ paddingTop: '40px' }}>
                {elementList.map(e => Element(e.src, e.title, e.bottomTitle))}
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