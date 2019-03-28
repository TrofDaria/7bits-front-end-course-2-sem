import React from 'react';
import PropTypes from 'prop-types';

import './style.css';

export default class Button extends React.Component {
    constructor(props) {
        super(props);
        this.processButtonClick = this.processButtonClick.bind(this);
    }
    render() {
        return (
            <button onClick={() => {
                this.processButtonClick(this.props.taskId)
            }}
                    className={`task__button ${this.props.iconClassName}`}>
            </button>
        );
    };
    processButtonClick(id) {
        alert(id);
    };
};

Button.propTypes = {
    taskId: PropTypes.number,
    iconClassName: PropTypes.string
};