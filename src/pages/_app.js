import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import { SWRConfig } from 'swr';
import Footer from '~/src/components/Footer';
import Header from '~/src/components/Header';
import DiscordWidget from '~/src/components/DiscordWidget';

function MyApp({ Component, pageProps }) {
  return (
    <SWRConfig value={{ dedupingInterval: 5000 }}>
      {pageProps.statusCode !== 404 && <Header />}
      <Component {...pageProps} />
      {pageProps.statusCode !== 404 && <Footer />}
      <DiscordWidget />
    </SWRConfig>
  );
}

export default MyApp;
