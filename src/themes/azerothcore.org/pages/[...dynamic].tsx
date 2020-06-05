import React from 'react';
import { Switch, Route, useLocation } from 'react-router-dom';
import { useRouter as useNextRouter } from 'next/router';
import Post from '@/components/Post';
import Testimonial from '@/components/Testimonial';
import CatalogueItem from '@/components/CatalogueItem';
import _NotFoundPage from './_NotFoundPage';
import _LoadingPage from './_LoadingPage';

type RedirectProps = {
  url: string;
};

const RedirectHandle: React.FC<RedirectProps> = ({ url }) => (
  <>{typeof window !== 'undefined' && window.location.replace(url)}</>
);

const Dynamic: React.FC = () => {
  const location = useLocation();
  const nextRouter = useNextRouter();

  if (location.pathname !== nextRouter.asPath) {
    location.pathname = nextRouter.asPath;
  }

  // at build time the page uses /[...dynamic] path to generate the
  // static page for [...dynamic].js
  // in this case we must display a loading page instead
  return (
    <Switch>
      <Route exact path="/blog/:slug" component={Post} />
      <Route exact path="/testimonials/:slug" component={Testimonial} />
      <Route exact path="/catalogue/:slug" component={CatalogueItem} />
      {/*
        START REDIRECT ROUTES
      */}
      <Route
        exact
        path="/donators"
        render={(): JSX.Element => <RedirectHandle url="/donations" />}
      />
      {/*
        END REDIRECT ROUTES
      */}
      {/*
        START SPECIAL CASES
      */}
      <Route exact path="/[...dynamic]" component={_LoadingPage} />
      <Route component={_NotFoundPage} />
      {/*
        END SPECIAL CASES
      */}
    </Switch>
  );
};

export default Dynamic;
