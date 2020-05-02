import React from "react";
import Post from '../components/Post';
import { Switch, Route, useLocation } from 'react-router-dom';
import _NotFoundPage from "./_NotFoundPage"
import _LoadingPage from "./_LoadingPage"

export default () => {
    // at build time the page uses /[...dynamic] path to generate the
    // static page for [...dynamic].js 
    // in this case we must display a loading page instead
    return <Switch>
        <Route exact path="/blog/:slug" component={Post} />
        <Route exact path="/[...dynamic]" component={_LoadingPage} />
        <Route component={_NotFoundPage} />
    </Switch>
}