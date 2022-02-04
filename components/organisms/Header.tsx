import React from 'react';
import HeaderNavigation from '../molecules/header/HeaderNavigation';
import Logo from '../molecules/header/Logo';
import styles from './header.module.scss';

export const Header = () => {
    return (
        <header className={ styles.header }>
            <Logo/>
            <HeaderNavigation/>
        </header>
    );
};
