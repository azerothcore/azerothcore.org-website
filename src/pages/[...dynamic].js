import React from 'react';
import { Switch, Route, useLocation, useHistory } from 'react-router-dom';
import Post from '../components/Post';
import _NotFoundPage from './_NotFoundPage';
import _LoadingPage from './_LoadingPage';

export default () => {
  const history = useHistory();
  const location = useLocation();
  if (typeof window !== 'undefined') {
    console.log(location);
    console.log(window.location.pathname);
    console.log(location.pathname);
  }

  if (
    typeof window !== 'undefined' &&
    location.pathname !== window.location.pathname
  ) {
    history.push(window.location.pathname);
  }
  // at build time the page uses /[...dynamic] path to generate the
  // static page for [...dynamic].js
  // in this case we must display a loading page instead
  return (
    <Switch>
      <Route exact path="/blog/:slug" component={Post} />
      <Route exact path="/[...dynamic]" component={_LoadingPage} />
      <Route component={_NotFoundPage} />
    </Switch>
  );
};
