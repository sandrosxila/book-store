import Carousel from '@/components/molecules/carousel/Carousel';
import { Header } from '@/components/organisms/Header';
import type { NextPage } from 'next';
import Image from 'next/image';

const Home: NextPage = () => {
    return (
        <div>
            <Header/>
            <Carousel>
                <Image 
                    src={ '/assets/images/library.jpg' } 
                    alt="library image"
                    layout={ 'fill' }
                    objectFit={ 'cover' }
                    objectPosition={ 'bottom' }
                />
                <Image 
                    src={ '/assets/images/old-printer.jpg' } 
                    alt="printer image"
                    layout={ 'fill' }
                    objectFit={ 'cover' }
                />
                <Image 
                    src={ '/assets/images/night-city.jpg' } 
                    alt="night city image"
                    layout={ 'fill' }
                    objectFit={ 'cover' }
                />
            </Carousel>
        </div>
    );
};

export default Home;
