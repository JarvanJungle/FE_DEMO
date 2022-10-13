import React from "react";
import PropTypes from "prop-types";
import { useLocation } from "react-router";
import classNames from "classnames";

const LayoutContent = (props) => {
    const location = useLocation();
    return (
        <div style={{ width: '100%' }}>
            {props.children}
        </div>
    );
};

LayoutContent.propTypes = {
    children: PropTypes.node
};
LayoutContent.layoutPartName = "content";

export {
    LayoutContent
};
