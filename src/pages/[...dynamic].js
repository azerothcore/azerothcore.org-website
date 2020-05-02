import React from "react";
import Post from '../components/Post';
import { Switch, Route, useLocation } from 'react-router-dom';
import _NotFoundPage from "./_NotFoundPage"
import _LoadingPage from "./_LoadingPage"

export default () => {
    let location = useLocation()

    return <Switch>
        <Route exact path="/blog/:slug" component={Post} />
        <Route component={location.pathname === "/[...dynamic]" ? _LoadingPage : _NotFoundPage} />
    </Switch>
}