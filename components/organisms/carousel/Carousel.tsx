import SlideLabelGroup from '@/components/molecules/slide-label-group/SlideLabelGroup';
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

    return (
        <div className={ styles.carousel }>
            <div className={ styles['carousel-items'] } style={ carouselStyles } role={ 'listbox' }>
                {
                    carouselItems.map((child, idx) => (
                        <div 
                            key={ idx }
                            className={ styles['carousel-item'] } 
                            role={ 'option' } 
                            aria-label={ `carousel item ${idx + 1}` } 
                            aria-selected={ idx === carouselPosition }
                        >
                            { child }
                        </div>
                    ))
                }
            </div>
            <SlideLabelGroup positionSetter={ setCarouselPosition } numberOfSlideLabels={ carouselItems.length } activePosition={ carouselPosition }/>
        </div>
    );
};

export default Carousel;
