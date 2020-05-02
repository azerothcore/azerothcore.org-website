import React from 'react';
import { Switch, Route, useLocation, useHistory } from 'react-router-dom';
import Post from '../components/Post';
import _NotFoundPage from './_NotFoundPage';
import _LoadingPage from './_LoadingPage';

function getPath(path) {
  if (process.env.BACKEND_URL) {
    return path.replace(`/${process.env.BACKEND_URL}`, '');
  }
  return path;
}

export default () => {
  const history = useHistory();
  const location = useLocation();
  const adaptedPath =
    typeof window !== 'undefined' ? getPath(window.location.pathname) : '';
  if (typeof window !== 'undefined') {
    console.log(adaptedPath);
    console.log(window.location.pathname);
    console.log(location.pathname);
  }
  if (typeof window !== 'undefined' && location.pathname !== adaptedPath) {
    history.push(adaptedPath);
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
