import SlideLabel from '@/components/atoms/slide-label/SlideLabel';
import React, { useEffect, useRef, useState } from 'react';
import styles from './carousel.module.scss';

const Carousel: React.FC = ({ children }) => {

    const [carouselPosition, setCarouselPosition] = useState(0);

    const timer = useRef<NodeJS.Timer | null>(null);

    const carouselItems = React.Children.toArray(children);

    useEffect(() => {
        timer.current = setInterval(() => {
            setCarouselPosition(prevCarouselPosition => (prevCarouselPosition + 1) % (carouselItems.length || 1));
        }, 3000);
        return () => {
            if (timer.current) {
                clearInterval(timer.current);
            }
        };
    }, [carouselItems]);

    const carouselStyles: React.CSSProperties = {
        transform: `translateX(${carouselPosition * -100}%)`
    };

    const onSlideLabelClick = (idx: number) => () => {
        setCarouselPosition(idx);
    };

    return (
        <div className={ styles.carousel }>
            <div className={ styles['carousel-items'] } style={ carouselStyles }>
                {
                    carouselItems.map((child, idx) => (
                        <div className={ styles['carousel-item'] } key={ idx }>
                            { child }
                        </div>
                    ))
                }
            </div>
            <div className={ styles['carousel-slide-label-group'] }>
                {
                    Array.from({ length: carouselItems.length }).map((_, idx) => (
                        <SlideLabel onClick={ onSlideLabelClick(idx) } active={ idx === carouselPosition } key={ idx }/>
                    ))
                }
            </div>
        </div>
    );
};

export default Carousel;
