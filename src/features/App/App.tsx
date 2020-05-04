import React from 'react';
import styles from './App.module.scss';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom';
import Container from '@material-ui/core/Container';
import Nav from '../../components/Nav';
import Footer from '../../components/Footer';
import Error from '../../components/Error'
import SignIn from "../Auth/containers/SignIn";
import SignUp from '../Auth/containers/SignUp';
import PrivateRoute from "../Auth/containers/PrivateRoute";
import { ROUTER_URLS } from "../../routes";
import Home from "../Home";
import Categories from "../Categories";
import Books from "../Books";
import Users from "../Users";
import Profile from "../Profile";

const App = () => <Router>
    <div className={styles.app}>
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
</Router>;

export default App;
