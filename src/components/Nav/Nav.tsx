import React from 'react';
import styles from './Nav.module.scss';

import Container from '@material-ui/core/Container';

import { Link } from 'react-router-dom';

const Nav = (props: any) => {
    if (!props.isAuthenticated) return null;

    return (
        <div className={styles.NavWrapper}>
            <Container maxWidth="md">
                <nav className={styles.Nav}>
                    <Link className={styles.NavLogoLink} to="/">
                        <h1>
                            Library App
                        </h1>
                    </Link>
                    <ul className={styles.NavLinks}>
                        <Link className={styles.NavLink} to="/categories">
                            <li>Categories</li>
                        </Link>
                        <Link className={styles.NavLink} to="/books">
                            <li>Books</li>
                        </Link>
                        <Link className={styles.NavLink} to="/users">
                            <li>Users</li>
                        </Link>
                        <li className={styles.NavLink}>|</li>
                        <Link className={styles.NavLink} to="/profile">
                            <li>Profile</li>
                        </Link>
                        <Link className={styles.NavLink} to="/sign-out">
                            <li>Sign out</li>
                        </Link>
                    </ul>
                </nav>
            </Container>
        </div>
    )
};

export default Nav;
