import React from 'react';
import styles from './App.module.scss';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom';
import Container from '@material-ui/core/Container';
import Nav from './components/Nav/Nav';
import Footer from './components/Footer/Footer';
import Error from './components/Error/Error'
import SignIn from "./features/auth/containers/SignIn/SignIn";
import SignUp from './features/auth/containers/SignUp/SignUp';
import { PrivateRoute } from "./features/auth/containers/PrivateRoute/PrivateRoute";
import { ROUTER_URLS } from "./Routes";
/**
 * All features should export the Component by default
 * Example will be shown with Categories screen
 */
import Home from "./features/home/Home";
import Categories from "./features/Categories";
import Books from "./features/books/Books";
import Users from "./features/users/Users";
import Profile from "./features/profile/Profile";

const App = () => {
    return ( // Return can be skipped here
        <Router>
            <div className={styles.App}> {/* I think we should use camelCase for classes, just have seen it being more widely used */}
                <Nav/>
                <Container className={styles.Main} maxWidth="md">
                    <Switch>
                        <Route path={ROUTER_URLS.SIGN_IN} component={SignIn} />
                        <Route path={ROUTER_URLS.SIGN_UP} component={SignUp} />
                        <PrivateRoute path={ROUTER_URLS.HOME} exact component={Home} />
                        <PrivateRoute path={ROUTER_URLS.CATEGORIES} component={Categories} />
                        <PrivateRoute path={ROUTER_URLS.BOOKS} component={Books} />
                        <PrivateRoute path={ROUTER_URLS.USERS} component={Users} />
                        <PrivateRoute path={ROUTER_URLS.PROFILE} component={Profile} />
                        <Route path={ROUTER_URLS.NOT_FOUND} component={Error} />
                    </Switch>
                </Container>
                <Footer/>
            </div>
        </Router>
    );
};

export default App;
