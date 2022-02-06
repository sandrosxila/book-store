import React from 'react';
import Carousel from '@/components/organisms/carousel/Carousel';
import Header from '@/components/organisms/header/Header';
import Image from 'next/image';
import LibraryImage from '../../../public/assets/images/library.jpg';
import OldPrinterImage from '../../../public/assets/images/old-printer.jpg';
import NightCityImage from '../../../public/assets/images/night-city.jpg';
import GenreTiles from '@/components/organisms/genre-tiles/GenreTiles';

const Landing = () => {
    return (
        <div>
            <Header/>
            <Carousel>
                <Image 
                    src={ LibraryImage } 
                    alt="library image"
                    layout={ 'fill' }
                    objectFit={ 'cover' }
                    objectPosition={ 'bottom' }
                    priority
                />
                <Image 
                    src={ OldPrinterImage } 
                    alt="printer image"
                    layout={ 'fill' }
                    objectFit={ 'cover' }
                    priority
                />
                <Image 
                    src={ NightCityImage } 
                    alt="night city image"
                    layout={ 'fill' }
                    objectFit={ 'cover' }
                    priority
                />
            </Carousel>
            <GenreTiles/>
        </div>
    );
};

export default Landing;
