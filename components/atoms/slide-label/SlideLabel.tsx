import React from 'react';
import styles from './slide-label.module.scss';

type Props = React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> & {
    active?: boolean;
}

const SlideLabel: React.FC<Props> = ({ active = false, ...props }) => {
    return <button { ...props } className={ `${styles['slide-label']} ${active ? styles.active : ''}` } ></button>;
};

export default SlideLabel;
