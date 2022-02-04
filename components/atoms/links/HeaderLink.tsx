import Link from 'next/link';
import React, { FC } from 'react';
import styles from './header-link.module.scss';

type Props = React.DetailedHTMLProps<React.AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement> & { 
    href: string;
};
const HeaderLink: FC<Props> = ({ children, className, href, ...props }) => {
    return (
        <Link href={ href }>
            <a { ...props } className={ `${className || ''} ${styles['header-link']}` }>
                { children }
            </a>
        </Link>
    );
};

export default HeaderLink;
