import React from "react";
import Post from '../components/Post';
import { Switch, Route } from 'react-router-dom';

export default () => {

    return <Switch>
        <Route exact path="/blog/:slug" component={Post} />
    </Switch>
}