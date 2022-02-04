import React from 'react';
import Link from 'next/link';
import OldLibraryBuilding from '@/components/atoms/icons/OldLibraryBuilding';
import styles from './logo.module.scss';

const Logo = () => {
    return (
        <Link href={ '/' }>
            <a className={ styles.logo }>
                <OldLibraryBuilding/>
            </a>
        </Link>
    );
};

export default Logo;
