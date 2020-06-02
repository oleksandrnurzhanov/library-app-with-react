import React from 'react';
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
import Users from "../Users";
import Profile from "../Profile";
import styles from './App.module.scss';
import { ROUTER_URLS } from "../../RoutesEnums";

const App = () => <Router>
    <div className={styles.app}>
        <Nav />
        <Container className={styles.Main} maxWidth="md">
            <Switch>
                <Route path={ROUTER_URLS_MAP[ROUTER_URLS.SignIn]} component={SignIn} />
                <Route path={ROUTER_URLS_MAP[ROUTER_URLS.SignUp]} component={SignUp} />
                {/*TODO refactor this case with array map */}
                <PrivateRoute path={ROUTER_URLS_MAP[ROUTER_URLS.Home]} exact component={Home} />
                <PrivateRoute path={ROUTER_URLS_MAP[ROUTER_URLS.Categories]} component={Categories} />
                <PrivateRoute path={ROUTER_URLS_MAP[ROUTER_URLS.Users]} component={Users} />
                <PrivateRoute path={ROUTER_URLS_MAP[ROUTER_URLS.Profile]} component={Profile} />
                <Route path={ROUTER_URLS_MAP[ROUTER_URLS.NotFound]} component={Error} />
            </Switch>
        </Container>
        <Footer />
    </div>
</Router>;

export default App;
