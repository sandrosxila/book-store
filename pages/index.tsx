import Landing from '@/components/templates/landing/Landing';
import type { NextPage } from 'next';
import Head from 'next/head'; 

const Home: NextPage = () => {
    return (
        <>
            <Head>
                Book Store
            </Head>
            <Landing/>
        </>
    );
};

export default Home;
