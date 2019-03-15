import React from 'react';
import PropTypes from 'prop-types';

import './style.css';

export default class SideBar extends React.Component {
    render() {
        const {className} = this.props;

        return (
            <aside className={`side-bar${className ? ` ${className}` : ''}`}>
                <ul className='options_list'>
                    <li className='options_list__item options_list__to-do'>
                        <a className='options_list__item-link' href='/'>To do</a>
                    </li>
                    <li className='options_list__item options_list__done'>
                        <a className='options_list__item-link' href='/'>Done</a>
                    </li>
                </ul>
            </aside>
        );
    };
};

SideBar.propTypes = {
    className: PropTypes.string
};

SideBar.defaultProps = {
    className: ''
};
