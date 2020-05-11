import React from 'react';
import styles from './Nav.module.scss';
import Container from '@material-ui/core/Container';
import { Link, useHistory } from 'react-router-dom';
import { useDispatch } from "react-redux";
import Button from "@material-ui/core/Button";
import { signOut } from "../../features/Auth/AuthSlice";
import { ROUTER_URLS } from "../../routes";
import _ from 'lodash';

const Nav = (props: any) => {
    const history = useHistory();
    const dispatch = useDispatch();

    let logOut = () => {
        dispatch(signOut());
        history.push(ROUTER_URLS.SIGN_IN);
    };

    if (_.isEmpty(props.user)) return null;

    return (
        <div className={styles.navWrapper}>
            <Container maxWidth="md">
                <nav className={styles.nav}>
                    <Link className={styles.navLogoLink} to={ROUTER_URLS.HOME}>
                        <h1>
                            Library App
                        </h1>
                    </Link>
                    <ul className={styles.navLinks}>
                        {/* TODO I would add something like 'navLinkTitle' to each route we need here in the config and render it using Array.map */}
                        <Link className={styles.navLink} to={ROUTER_URLS.CATEGORIES}>
                            <li>Categories</li>
                        </Link>
                        <Link className={styles.navLink} to={ROUTER_URLS.BOOKS}>
                            <li>Books</li>
                        </Link>
                        <Link className={styles.navLink} to={ROUTER_URLS.USERS}>
                            <li>Users</li>
                        </Link>
                        <li className={styles.navLink}>|</li>
                        <Link className={styles.navLink} to={ROUTER_URLS.PROFILE}>
                            <li>Profile</li>
                        </Link>
                        <Button
                            variant="contained"
                            color="primary"
                            onClick={logOut}>Sign out</Button>
                    </ul>
                </nav>
            </Container>
        </div>
    )
};

export default Nav;
