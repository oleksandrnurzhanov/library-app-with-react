import React from 'react';
import './App.module.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

import Authorization from './containers/Authorization/Authorization';
import Registration from './containers/Registration/Registration';
import Home from './containers/Home/Home';
import Categories from './containers/Categories/Categories';
import Books from './containers/Books/Books';
import Profile from './containers/Profile/Profile';
import Users from './containers/Users/Users';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

const App = () => {
    return (
        <Router>
            <Header />
            <div>
                <nav>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/authorization">Login</Link></li>
                        <li><Link to="/registration">Register</Link></li>
                        <li><Link to="/categories">Categories</Link></li>
                        <li><Link to="/books">Books</Link></li>
                        <li><Link to="/profile">Profile</Link></li>
                        <li><Link to="/users">Users</Link></li>
                    </ul>
                </nav>
            </div>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/authorization" component={Authorization} />
                <Route path="/registration" component={Registration} />
                <Route path="/categories" component={Categories} />
                <Route path="/books" component={Books} />
                <Route path="/profile" component={Profile} />
                <Route path="/users" component={Users} />
            </Switch>
            <Footer />
        </Router>
    );
};

export default App;
