import React, { FC } from 'react';
import SlideLabel from '@/components/atoms/slide-label/SlideLabel';
import styles from './slide-label-group.module.scss';

type Props = {
    positionSetter: (idx: number) => void,
    numberOfSlideLabels: number,
    activePosition: number
}

const SlideLabelGroup: FC<Props> = ({ positionSetter, numberOfSlideLabels, activePosition }) => {
    const onSlideLabelClick = (idx: number) => () => {
        positionSetter(idx);
    };

    return (
        <div className={ styles['slide-label-group'] }>
            {
                Array.from({ length: numberOfSlideLabels }).map((_, idx) => (
                    <SlideLabel 
                        onClick={ onSlideLabelClick(idx) } 
                        active={ idx === activePosition } 
                        key={ idx } 
                        aria-label={ 
                            `select ${idx + 1}${(idx + 1) % 10 === 1 ? 'st' : (idx + 1) % 10 === 2 ? 'nd' : (idx + 1) % 10 === 3 ? 'rd' : 'th'} slide on carousel` 
                        }
                    />
                ))
            }
        </div>
    );
}; 

export default SlideLabelGroup;
