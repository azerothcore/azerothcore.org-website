import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import { SWRConfig } from 'swr';
import Footer from '../components/Footer';
import Header from '../components/Header';
import DiscordWidget from '../components/DiscordWidget';
import withReactRouter from '../utils/with-react-router';

// Workaround to use React Router with Next.js router
// TODO: improve logic
function ReactRoute(NJSProps, RRComponent) {
  return (props) => <>{NJSProps.Component.displayName === "ErrorPage" && <RRComponent {...props}></RRComponent> || <NJSProps.Component {...NJSProps.pageProps} />}</>
}

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
