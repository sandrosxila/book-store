import React, { FC } from 'react';
import styles from './titled-section.module.scss';

type Props = React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
    title: string;
}

const TitledSection: FC<Props> = ({ title, children, className, ...props }) => {
    return (
        <section { ...props } className={ `${styles.section} ${className || ''}` }>
            <h2 className={ styles['section-header'] }>{ title }</h2>
            <div className = { styles['section-content'] }>{ children }</div>
        </section>
    );
};

export default TitledSection;
