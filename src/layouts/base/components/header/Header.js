import React from 'react';

import './style.css';

export default class Header extends React.Component {
    render() {
        return (
            <header className='header'>
                <div className='header__content'>
                    <a className='header__logo' href='/'>
                        <img className='logo' src="../logo_white.png" alt="logo"/>
                    </a>
                </div>
            </header>
        );
    };
};