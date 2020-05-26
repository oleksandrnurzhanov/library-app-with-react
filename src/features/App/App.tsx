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
import { ROUTER_URLS_MAP } from "../../Routes";
import Home from "../Home";
import Categories from "../Categories";
import Books from "../Books";
import Users from "../Users";
import Profile from "../Profile";
import styles from './App.module.scss';
import { ROUTER_URLS } from "../../RoutesEnums";

// You should get rid of mapStateToProps everywhere in favor of useSelector()
// and useDispatch() instead of mapDispatchToProps()
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
                <Route path={ROUTER_URLS_MAP[ROUTER_URLS.SignIn]} component={SignIn} />
                <Route path={ROUTER_URLS_MAP[ROUTER_URLS.SignUp]} component={SignUp} />
                <PrivateRoute path={ROUTER_URLS_MAP[ROUTER_URLS.Home]} exact component={Home} user={props.user} />
                <PrivateRoute path={ROUTER_URLS_MAP[ROUTER_URLS.Categories]} component={Categories} user={props.user} />
                <PrivateRoute path={ROUTER_URLS_MAP[ROUTER_URLS.Books]} component={Books} user={props.user} />
                <PrivateRoute path={ROUTER_URLS_MAP[ROUTER_URLS.Users]} component={Users} user={props.user} />
                <PrivateRoute path={ROUTER_URLS_MAP[ROUTER_URLS.Profile]} component={Profile} user={props.user} />
                <Route path={ROUTER_URLS_MAP[ROUTER_URLS.NotFound]} component={Error} />
            </Switch>
        </Container>
        <Footer user={props.user} />
    </div>
</Router>;

export default connect(mapStateToProps)(App);
