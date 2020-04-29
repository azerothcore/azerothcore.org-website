import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import { SWRConfig } from 'swr';
import { Switch, Route } from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/Header';
import DiscordWidget from '../components/DiscordWidget';
import withReactRouter from '../utils/with-react-router';
import Post from '../components/Post';

function MyApp({ Component, pageProps }) {
  return (
    <SWRConfig value={{ dedupingInterval: 5000 }}>
      <Header />
      <Switch>
        <Route path="/blog/:slug" component={Post} />
        <Route path="/">
          <Component {...pageProps} />
          <DiscordWidget />
        </Route>
      </Switch>
      <Footer />
    </SWRConfig>
  );
}

export default withReactRouter(MyApp);
