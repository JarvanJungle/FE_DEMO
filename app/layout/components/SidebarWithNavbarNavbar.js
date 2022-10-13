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
const SidebarWithNavbarNavbar = ({ crumbs }) => {
    const dispatch = useDispatch();
    const history = useHistory();
    function redirectPage(item) {
        dispatch(updateCurrentCategoryMenu(item));
    }
    const switchPage = (page) => {
        switch (page) {
            case 'TOP':
                history.push('/top');
                break;
            case 'RECORD':
                history.push('/record');
                break;
            case 'COLUMN':
                history.push('/column');
                break;

            default:
                break;
        }
    }
    return (
        <ThemeConsumer>
            {() => (
                <>
                    <div style={{
                        textAlign: 'center', height: '50px', padding: '15px',
                        backgroundColor: 'black', color: 'white'
                    }}>
                        <Row xs='12' className="ml-auto">
                            <Col xs='2'>
                                <div style={{ fontSize: '18px', color: '#ed6608', float: 'right' }}>Healthy</div>
                            </Col>
                            <Col xs='8'>
                                <Row xs='12'>
                                    <Col xs='4'>
                                        <button style={{ backgroundColor: 'black', border: 'none', color: 'white' }}
                                            onClick={e => switchPage('TOP')}>
                                            <FaBook size={20} color={'#ed6608'} />
                                            <span style={{ marginLeft: '10px' }}>TOP</span>
                                        </button>
                                    </Col>
                                    <Col xs='4'>
                                        <button style={{ backgroundColor: 'black', border: 'none', color: 'white' }}
                                            onClick={e => switchPage('RECORD')}>
                                            <FaMedal size={20} color={'#ed6608'} />
                                            <span style={{ marginLeft: '10px' }}>RECORD</span>
                                        </button>
                                    </Col>
                                    <Col xs='4'>
                                        <button style={{ backgroundColor: 'black', border: 'none', color: 'white' }}
                                            onClick={e => switchPage('COLUMN')}>
                                            <TbMessageReport size={20} color={'#ed6608'} />
                                            <span style={{ marginLeft: '10px' }}> COLUMN</span>
                                            <span style={{
                                                marginLeft: '10px',
                                                backgroundColor: '#ed6608',
                                                borderRadius: '50%'
                                            }}>9+</span>
                                        </button>
                                    </Col>
                                </Row>
                            </Col>
                            <Col xs='2'>
                                <button style={{ backgroundColor: 'black', border: 'none', float: 'left' }}>
                                    <AiOutlineMenu size={20} color={'#ed6608'} />
                                </button>
                            </Col>
                        </Row>
                    </div>
                </>
            )}
        </ThemeConsumer>
    );
};

export default SidebarWithNavbarNavbar;
