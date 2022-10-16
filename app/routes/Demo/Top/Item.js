import React, { useEffect, useState, useRef } from "react";
import _ from "lodash";
import {
    Col
} from "components";
const Item = (src, title) => {
    const fontSize = 20
    let draw = (canvas) => {
        let img = new Image()
        // let src = require('./../../../images/demo/d01.jpg')
        img.src = src
        img.onload = () => {
            canvas.width = canvas.clientWidth
            canvas.height = canvas.clientWidth
            let ctx = canvas.getContext('2d');
            ctx.drawImage(img, 0, 0)
            ctx.fillStyle = "yellow";
            ctx.fillRect(0, canvas.clientWidth - fontSize, title.length * fontSize, 30)
            ctx.font = fontSize.toString() + "px Arial";
            ctx.fillStyle = "red";
            ctx.fillText(title, 0, canvas.clientWidth);
        }
    }
    let ref = useRef();
    useEffect(() => {
        let canvas = ref.current
        draw(canvas)
    }, [])
    return <>
        <Col xs='3'>
            <canvas
                ref={ref}
            >
            </canvas>
        </Col>
    </>
}
export default Item;