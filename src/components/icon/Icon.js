import React from 'react';
import PropTypes from 'prop-types';

import './style.css';
export default class Icon extends React.Component {
    render() {
        return (
            <img src={this.props.src} className="task__icon" alt="complete task icon"></img>
        );
    };
};

Icon.propTypes = {
    src: PropTypes.string,
};