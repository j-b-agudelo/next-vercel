import { FC } from 'react';

import Head from 'next/head';
import styles from './MainLayout.module.css';
import { Navbar } from '../Navbar';

type Props = {
  children: any;
}

export const MainLayout: FC<Props> = ({ children }) => {
    return (
        <>
          <Head>
            <title>Home - Juan Bautista</title>
            <meta name="description" content="Home Page" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" href="/favicon.ico" />
          </Head>
    
          <Navbar />
    
          <main className={styles.main}>
    
            { children }   
           
          </main>
        </>
    )    
};



