import React from 'react';
import { Switch, Route, useLocation, useHistory } from 'react-router-dom';
import Post from '@/components/Post';
import _NotFoundPage from './_NotFoundPage';
import _LoadingPage from './_LoadingPage';

/**
 *
 * Function that returns the correct path that react router will use when using github pages without a custom domain
 *
 * @param {string} path the actual path
 * @returns {string} the new string that will be passed to react router
 */
function getPath(path: string): string {
  if (path.includes(process.env.BACKEND_URL)) {
    return path.replace(`${process.env.BACKEND_URL}`, '');
  }
  return path;
}

const Dynamic: React.FC = () => {
  const history = useHistory();
  const location = useLocation();
  const adaptedPath =
    typeof window !== 'undefined' ? getPath(window.location.pathname) : '';
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

export default Dynamic;
