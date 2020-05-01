import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import { SWRConfig } from 'swr';
import { Switch, Route, Redirect } from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/Header';
import DiscordWidget from '../components/DiscordWidget';
import withReactRouter from '../utils/with-react-router';
import Post from '../components/Post';
import Index from './index';
import Blog from './blog';

function MyApp({ Component, pageProps }) {
  return (
    <SWRConfig value={{ dedupingInterval: 5000 }}>
      <Header />
      <Switch>
        <Route exact path="/" component={Index} />
        <Route exact path="/blog" component={Blog} />
        <Route exact path="/blog/:slug" component={Post} />
      </Switch>
      <Footer />
      <DiscordWidget />
    </SWRConfig>
  );
}

export default withReactRouter(MyApp);
