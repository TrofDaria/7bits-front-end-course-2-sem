import React from 'react';
import PropTypes from 'prop-types';
import {NavLink} from 'react-router-dom';

import './style.css';

export default class SideBar extends React.Component {
    render() {
        const {className} = this.props;

        return (
            <aside className={`side-bar${className ? ` ${className}` : ''}`}>
                <nav className='side-bar__menu'>
                    <ul className='options-list'>
                        <li className='options-list__item options-list__item_to-do'>
                            <NavLink exact
                                     className='options-list__link'
                                     to={"/"}
                                     activeClassName={'options-list__link_active'}>
                                To do
                            </NavLink>
                        </li>
                        <li className='options-list__item options-list__item_done'>
                            <NavLink
                                className='options-list__link'
                                to={"/done"}
                                activeClassName={'options-list__link_active'}>
                                Done
                            </NavLink>
                        </li>
                    </ul>
                </nav>
            </aside>
        )
            ;
    };
};

SideBar.propTypes = {
    className: PropTypes.string
};

SideBar.defaultProps = {
    className: ''
};
