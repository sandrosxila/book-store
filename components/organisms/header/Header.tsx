import React from 'react';
import HeaderNavigation from '../../molecules/header-navigation/HeaderNavigation';
import Logo from '../../molecules/logo/Logo';
import styles from './header.module.scss';

export const Header = () => {
    return (
        <header className={ styles.header }>
            <Logo/>
            <HeaderNavigation/>
        </header>
    );
};
