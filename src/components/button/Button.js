import React from 'react';
import PropTypes from 'prop-types';

import './style.css';

export default class Button extends React.Component {
    render() {
        const{taskId, iconClassName, className, disabled, type, value, onPress}=this.props;
        return (
            <button onClick={() => {
                onPress(taskId)}}
                    className={`button ${className} ${iconClassName}`}
                    type={type}
                    disabled={disabled}
            >
                {value}
            </button>
        );
    };
};

Button.propTypes = {
    taskId: PropTypes.number,
    value: PropTypes.string,
    type: PropTypes.string,
    className: PropTypes.string,
    disabled: PropTypes.bool,
    iconClassName: PropTypes.string,
    onPress: PropTypes.func
};

Button.defaultProps = {
    value: '',
    type: 'button',
    className: '',
    disabled: false,
    iconClassName: '',
    onPress: ()=>{}
};