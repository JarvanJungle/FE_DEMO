import React from 'react';
import PropTypes from 'prop-types';

const LayoutFooter = (props) => {
    const navbar = React.Children.only(props.children);

    return (
        <div >
            {props.children}
            {/* {
                React.cloneElement(navbar, { fixed: null })
            } */}
        </div>
    );
};

LayoutFooter.propTypes = {
    children: PropTypes.node
};
LayoutFooter.layoutPartName = "footer";

export {
    LayoutFooter
};
