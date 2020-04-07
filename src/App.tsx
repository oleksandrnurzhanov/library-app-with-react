import React from 'react';
import styles from './App.module.scss';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Container from '@material-ui/core/Container';

import Nav from './components/Nav/Nav';
import Footer from './components/Footer/Footer';
import Error from './components/Error/Error'

import Home from './containers/Home/Home';
import Categories from './containers/Categories/Categories';
import Books from './containers/Books/Books';
import Users from './containers/Users/Users';
import Profile from './containers/Profile/Profile';
import SignIn from './containers/SignIn/SignIn';
import SignUp from './containers/SignUp/SignUp';

const App = () => {
    return (
        <Router>
            <div className={styles.App}>
                <Nav />
                <Container className={styles.Main} maxWidth="md">
                    <Switch>
                        <Route path="/sign-in" component={SignIn} />
                        <Route path="/sign-up" component={SignUp} />
                        <Route path="/" exact component={Home} />
                        <Route path="/categories" component={Categories} />
                        <Route path="/books" component={Books} />
                        <Route path="/users" component={Users} />
                        <Route path="/profile" component={Profile} />
                        <Route path="/sign-out" component={SignIn} />
                        <Route path="*" component={Error} />
                    </Switch>
                </Container>
                <Footer />
            </div>
        </Router>
    );
};

export default App;
