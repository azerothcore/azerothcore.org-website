import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import { SWRConfig } from 'swr';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import DiscordWidget from '@/components/DiscordWidget';
import withReactRouter from '@/utils/with-react-router';

import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css' // Import the CSS
config.autoAddCss = false // Tell Font Awesome to skip adding the CSS automatically since it's being imported above
 

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
