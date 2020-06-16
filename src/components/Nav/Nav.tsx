import React from 'react';
import styles from './Nav.module.scss';
import Container from '@material-ui/core/Container';
import { Link, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import Button from "@material-ui/core/Button";
import { signOut } from "../../features/Auth/AuthSlice";
import { ROUTER_URLS_MAP } from '../../Routes';
import _ from 'lodash';
import { ROUTER_URLS } from "../../RoutesEnums";
import { User } from "../../features/Auth/AuthInterfaces";
import { selectUser } from "../../features/Auth/AuthSelectors";
import { LocalStorageUtils } from "../../shared/utils/LocalStorageUtils";

const Nav = () => {
    const history = useHistory();
    const dispatch = useDispatch();
    const userFromState: User = useSelector(selectUser);
    const user: User = !_.isEmpty(LocalStorageUtils.getItem('user'))
        ? LocalStorageUtils.getItem('user')
        : userFromState;
    const routes: ROUTER_URLS[] = [
        ROUTER_URLS.Categories,
        ROUTER_URLS.Users,
        ROUTER_URLS.Profile
    ]
    const routeItems = routes.map((route: ROUTER_URLS, index: number) =>
        <li className={styles.navLink} key={index}>
            <Link to={ROUTER_URLS_MAP[route]}>
                <span>{route}</span>
            </Link>
        </li>
    );

    const logOut = () => {
        dispatch(signOut() as any).then(() => {
            history.push(ROUTER_URLS_MAP[ROUTER_URLS.SignIn]);
        });
    };

    if (_.isEmpty(user)) return null;

    return (
        <div className={styles.navWrapper}>
            <Container maxWidth="md">
                <nav className={styles.nav}>
                    <Link className={styles.navLogoLink} to={ROUTER_URLS_MAP[ROUTER_URLS.Home]}>
                        <h1>
                            Library App
                        </h1>
                    </Link>
                    <ul className={styles.navLinks}>
                        {routeItems}
                        <li className={styles.navLink}>|</li>
                        <li className={styles.navLink}>
                            <Button
                                variant="outlined"
                                onClick={logOut}>Sign out</Button>
                        </li>
                    </ul>
                </nav>
            </Container>
        </div>
    )
};

export default Nav;
