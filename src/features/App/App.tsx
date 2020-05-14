import React from 'react';
import { connect } from 'react-redux';
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
import styles from './App.module.scss';

const mapStateToProps = (state: any) => {
    const { auth } = state;

    return {
        user: auth.user
    }
};

const App = (props: any) => <Router>
    <div className={styles.app}>
        <Nav user={props.user} />
        <Container className={styles.Main} maxWidth="md">
            <Switch>
                <Route path={ROUTER_URLS.HOME} exact component={Home} />
                <Route path={ROUTER_URLS.SIGN_UP} component={SignUp} />
                <Route path={ROUTER_URLS.SIGN_IN} component={SignIn} />
                <PrivateRoute path={ROUTER_URLS.CATEGORIES} component={Categories} user={props.user} />
                <PrivateRoute path={ROUTER_URLS.BOOKS} component={Books} user={props.user} />
                <PrivateRoute path={ROUTER_URLS.USERS} component={Users} user={props.user} />
                <PrivateRoute path={ROUTER_URLS.PROFILE} component={Profile} user={props.user} />
                <Route path={ROUTER_URLS.NOT_FOUND} component={Error} />
            </Switch>
        </Container>
        <Footer user={props.user} />
    </div>
</Router>;

export default connect(mapStateToProps)(App);
