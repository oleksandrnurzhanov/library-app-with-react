import React from 'react';
import styles from './Nav.module.scss';
import Container from '@material-ui/core/Container';
import { Link, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import Button from "@material-ui/core/Button";
import { signOut } from "../../features/auth/authSlice";
import { ROUTER_URLS } from "../../Routes";
import { selectAuthorizedStatus } from "../../features/auth/authSelectors";

const Nav = () => {
    const history = useHistory();
    const isAuthorized = useSelector(selectAuthorizedStatus);
    const dispatch = useDispatch();

    let logOut = () => {
        dispatch(signOut());
        history.push(ROUTER_URLS.HOME);
    };

    if (!isAuthorized) return null;

    return (
        <div className={styles.NavWrapper}>
            <Container maxWidth="md">
                <nav className={styles.Nav}>
                    <Link className={styles.NavLogoLink} to={ROUTER_URLS.HOME}>
                        <h1>
                            Library App
                        </h1>
                    </Link>
                    <ul className={styles.NavLinks}>
                        <Link className={styles.NavLink} to={ROUTER_URLS.CATEGORIES}>
                            <li>Categories</li>
                        </Link>
                        <Link className={styles.NavLink} to={ROUTER_URLS.BOOKS}>
                            <li>Books</li>
                        </Link>
                        <Link className={styles.NavLink} to={ROUTER_URLS.USERS}>
                            <li>Users</li>
                        </Link>
                        <li className={styles.NavLink}>|</li>
                        <Link className={styles.NavLink} to={ROUTER_URLS.PROFILE}>
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
