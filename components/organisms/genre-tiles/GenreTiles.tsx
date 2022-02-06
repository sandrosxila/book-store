import React from 'react';
import Image from 'next/image';
import TitledSection from '@/components/atoms/section/TitledSection';
import styles from './genre-tiles.module.scss';
import DocumentaryImage from '../../../public/assets/images/documentary.jpg';
import NovelImage from '../../../public/assets/images/novel.jpg';
import PhilosophyImage from '../../../public/assets/images/philosophy.jpg';
import ScienceImage from '../../../public/assets/images/science.jpg';

const GenreTiles = () => {
    return (
        <TitledSection title={ 'Shop By Genre' } id={ 'shop-by-genre' }>
            <div className={ styles['genre-tiles'] }>
                <div className={ styles['genre-tile-0'] }>
                    <div className={ styles['genre-image-box'] }>
                        <h3 className={ styles['genre-title'] } >
                            Novel
                        </h3>
                        <div className={ styles['genre-image'] }>
                            <Image 
                                src={ NovelImage }
                                alt="novel image"
                                layout={ 'fill' }
                                objectFit={ 'cover' }
                                objectPosition={ 'center' }
                                priority
                            />
                        </div>
                    </div>
                </div>
                <div className={ styles['genre-tile-1'] }>
                    <div className={ styles['genre-image-box'] }>
                        <h3 className={ styles['genre-title'] } >
                            Science
                        </h3>
                        <div className={ styles['genre-image'] }>
                            <Image 
                                src={ ScienceImage } 
                                alt= { 'science image' } 
                                layout={ 'fill' } 
                                objectFit={ 'cover' } 
                                objectPosition={ 'center' } 
                                priority
                            />
                        </div>
                    </div>
                </div>
                <div className={ styles['genre-tile-2'] }>
                    <div className={ styles['genre-image-box'] }>
                        <h3 className={ styles['genre-title'] } >
                            Documentary
                        </h3>
                        <div className={ styles['genre-image'] }>
                            <Image 
                                src={ DocumentaryImage } 
                                alt= { 'documentary image' } 
                                layout={ 'fill' } 
                                objectFit={ 'cover' } 
                                objectPosition={ 'center' } 
                                priority
                            />
                        </div>
                    </div>
                </div>
                <div className={ styles['genre-tile-3'] }>
                    <div className={ styles['genre-image-box'] }>
                        <h3 className={ styles['genre-title'] } >
                            Philosophy
                        </h3>
                        <div className={ styles['genre-image'] }>
                            <Image 
                                src={ PhilosophyImage } 
                                alt= { 'philosophy image' } 
                                layout={ 'fill' } 
                                objectFit={ 'cover' } 
                                objectPosition={ 'center' } 
                                priority
                            />
                        </div>
                    </div>
                </div>
            </div>
        </TitledSection>
    );
};

export default GenreTiles;
