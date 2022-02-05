import React from 'react';
import HeaderLink from '@/components/atoms/links/HeaderLink';
import styles from './header-navigation.module.scss';

const HeaderNavigation = () => {
    return(
        <nav className={ styles['header-navigation'] }>
            <ul>
                <li>
                    <HeaderLink href={ '/catalog' }>Catalog</HeaderLink>
                </li>
                <li>
                    <HeaderLink href={ '/inspiration' }>Inspirations</HeaderLink>
                </li>
                <li>
                    <HeaderLink href={ '/about-us' }>About Us</HeaderLink>
                </li>
                <li>
                    <HeaderLink href={ '/contact' }>Contact</HeaderLink>
                </li>
            </ul>
        </nav>
    );
};

export default HeaderNavigation;