import React from "react";
import Post from '../components/Post';
import { Switch, Route } from 'react-router-dom';
import _404 from "./_404"

export default () => {

    return <Switch>
        <Route exact path="/blog/:slug" component={Post} />
        <Route component={_404} />
    </Switch>
}