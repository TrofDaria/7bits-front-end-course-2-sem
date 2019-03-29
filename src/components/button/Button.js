import React from 'react';
import PropTypes from 'prop-types';

import './style.css';

export default class Button extends React.Component {
    constructor(props) {
        super(props);
        this.processButtonClick = this.processButtonClick.bind(this);
    }
    render() {
        const{taskId, iconClassName, className, disabled, type, value}=this.props;
        return (
            <button onClick={() => {
                this.processButtonClick(taskId)}}
                    className={`button ${className} ${iconClassName}`}
                    type={type}
                    disabled={disabled}
            >
                {value}
            </button>
        );
    };
    processButtonClick(id) {
        alert(id);
    };
};

Button.propTypes = {
    taskId: PropTypes.number,
    value: PropTypes.string,
    type: PropTypes.string,
    className: PropTypes.string,
    disabled: PropTypes.bool,
    iconClassName: PropTypes.string
};

Button.defaultProps = {
    value: '',
    type: 'button',
    className: '',
    disabled: false,
    iconClassName: ''
};