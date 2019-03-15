import React from 'react';

import './style.css';

export default class Header extends React.Component {
    render() {
        return (
            <header className='header'>
                <div className='header__content'>
                    <a className='header__logo' href='/'>
                        <img className='logo' src="../images/logo_white.svg" alt="logo"/>
                    </a>
                    <h3 className='header__user-name'>Jonny</h3>
                </div>
            </header>
        );
    };
};