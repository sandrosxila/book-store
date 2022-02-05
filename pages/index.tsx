import Carousel from '@/components/organisms/carousel/Carousel';
import { Header } from '@/components/organisms/header/Header';
import type { NextPage } from 'next';
import Image from 'next/image';
import LibraryImage from '../public/assets/images/library.jpg';
import OldPrinterImage from '../public/assets/images/old-printer.jpg';
import NightCityImage from '../public/assets/images/night-city.jpg';

const Home: NextPage = () => {
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
        </div>
    );
};

export default Home;
