import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from "../Pages/Home/Home.js";
import Blog from "../Pages/Blog/Blog.js"
class RoutePage extends Component {
    state = {}
    render() {
        return (
            <Router>
                <Switch>
                    <Route exact path='/' component={Home} />
                    <Route exact path='/blog' component={Blog} />
                </Switch>
            </Router>
        );
    }
}

export default RoutePage;