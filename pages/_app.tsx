import { ReactElement, ReactNode } from 'react';
import { NextPage } from 'next';
import { AppProps } from 'next/app';
import '../styles/globals.css';




type NextPageWithLayout = NextPage & {
  getLayout?: ( page: ReactElement ) => ReactNode;
  //getLayout?: ( page: ReactElement ) => JSX.Element; ( Asi no se importa nada )
  //getLayout?: ( page: ReactElement ) => ReactElement;
}

type AppPropsWithLaout = AppProps & {
  Component: NextPageWithLayout
}

export default function App({ Component, pageProps }: AppPropsWithLaout ) {

    const getLayout = Component.getLayout || ((page) => page)

  //return <Component {...pageProps} />

  return getLayout( <Component {...pageProps} /> )
}
