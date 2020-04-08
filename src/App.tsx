import React from 'react';
import styles from './App.module.scss';
import {BrowserRouter as Router, Switch, Route, Redirect, useHistory} from 'react-router-dom';
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
    const fakeAuth = {
        isAuthenticated: false,
        authenticate(cb: any) {
            fakeAuth.isAuthenticated = true;
            setTimeout(cb, 100);
        },
        signout(cb: any) {
            fakeAuth.isAuthenticated = false;
            setTimeout(cb, 100);
        }
    };

    return (
        <Router>
            <div className={styles.App}>
                <Nav isAuthenticated={fakeAuth.isAuthenticated} />
                <Container className={styles.Main} maxWidth="md">
                    <Switch>
                        <Route path="/" exact>
                            {!fakeAuth.isAuthenticated ? <Redirect to="/sign-in" /> : <Home />}
                        </Route>
                        <Route path="/sign-in" component={SignIn} />
                        <Route path="/sign-up" component={SignUp} />
                        <Route path="/categories" component={Categories} />
                        <Route path="/books" component={Books} />
                        <Route path="/users" component={Users} />
                        <Route path="/profile" component={Profile} />
                        <Route path="*" component={Error} />
                    </Switch>
                </Container>
                <Footer isAuthenticated={fakeAuth.isAuthenticated} />
            </div>
        </Router>
    );
};

export default App;
