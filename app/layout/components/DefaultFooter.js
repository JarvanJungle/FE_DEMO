import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { FEATURE_ROUTE_BASED } from "helper/constantsDefined";
import { setToLS } from "helper/utilities";
import { useDispatch } from "react-redux";
import { updateCurrentCategoryMenu } from "actions/permissionActions";
import { FaBook, FaMedal } from 'react-icons/fa';
import { TbMessageReport } from 'react-icons/tb';
import { AiOutlineMenu } from 'react-icons/ai';

import {
    Navbar,
    Nav,
    NavItem,
    SidebarTrigger,
    ThemeConsumer,
    Row,
    Col,
    Button
} from "../../components";
import NavbarTopMenuToggle from "./topMenuButtons/NavbarTopMenuToggle";
import classes from "./SidebarWithNavbarNavbar.scss";
import { useHistory } from "react-router";
const DefaultFooter = ({ crumbs }) => {
    const information = ['AAAA', 'BBBB', 'CCCC', 'DDDD', 'EEEE', 'FFFF']
    return (
        <ThemeConsumer>
            {() => (
                <>
                    <div style={{
                        textAlign: 'center', bottom: 0, height: '150px', width: '100%', padding: '15px',
                        backgroundColor: 'black', color: 'white', marginTop: '40px', overflow: 'hidden'
                    }}>
                        <Row xs='12'>
                            <Col xs='1'></Col>
                            <Col xs='8'>
                                <Row xs='12' style={{ height: '100%' }}>
                                    {information.map(e => {
                                        return <Col xs='2' style={{ paddingTop: '45px' }}>{e}</Col>
                                    })}
                                </Row>
                            </Col>
                            <Col xs='4'></Col>
                        </Row>
                    </div>
                </>
            )}
        </ThemeConsumer>
    );
};

export default DefaultFooter;
