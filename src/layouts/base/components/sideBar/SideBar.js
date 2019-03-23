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
                    <ul className='options_list'>
                        <li className='options_list__item options_list__to-do'>
                            <NavLink exact
                                className='options_list__link'
                                to={("/")}
                                activeClassName={'options_list__link-active'}>
                                To do
                        </NavLink>
                    </li>
                    <li className='options_list__item options_list__done'>
                        <NavLink
                            className='options_list__link'
                            to={("/done")}
                            activeClassName={'options_list__link-active'}>
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
