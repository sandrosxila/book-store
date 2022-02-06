import React from 'react';
import styles from './button.module.scss';

type Props = {
    size?: 'small' | 'normal' | 'big',
}

const Button: React.FC<Props> = ({ children, size = 'normal' }) => {

    const sizeClass = {
        'small': styles['button-small'],
        'normal': styles['button-normal'],
        'big': styles['button-big']
    };

    return (
        <button className={ `${styles.button} ${sizeClass[size]}` }>
            { children }
        </button>
    );
};

export default Button;
