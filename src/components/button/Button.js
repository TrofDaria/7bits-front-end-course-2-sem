import React from 'react';
import PropTypes from 'prop-types';

import './style.css';

export default class Button extends React.Component {
    render() {
        return (
            <button className={`task__button ${this.props.iconClassName}`}></button>
        );
    };
};

Button.propTypes = {
    iconClassName: PropTypes.string,
};