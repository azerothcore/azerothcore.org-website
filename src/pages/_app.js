import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import { SWRConfig } from 'swr';
import Footer from '../components/Footer';
import Header from '../components/Header';
import DiscordWidget from '../components/DiscordWidget';
import withReactRouter from '../utils/with-react-router';

function MyApp({ Component, pageProps }) {
  return (
    <SWRConfig value={{ dedupingInterval: 5000 }}>
      <Header />
      <Component {...pageProps} />
      <Footer />
      <DiscordWidget />
    </SWRConfig>
  );
}

export default withReactRouter(MyApp);
