import React from 'react';
import styles from './Footer.module.scss';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import _ from 'lodash';
import { User } from "../../features/Auth/AuthInterfaces";
import { useSelector } from "react-redux";
import { selectUser } from "../../features/Auth/AuthSelectors";
import { LocalStorageUtils } from "../../shared/utils/LocalStorageUtils";

const Footer = () => {
    const userFromState: User = useSelector(selectUser);
    const user: User = !_.isEmpty(LocalStorageUtils.getItem('user'))
        ? LocalStorageUtils.getItem('user')
        : userFromState;

    if (_.isEmpty(user)) return null;

    return (
        <footer className={styles.footer}>
            <Container maxWidth="md">
                <Typography variant="body2" align="center">
                    {/* The result is - Copyright © Library App 2020. */}
                    {'Copyright © '}
                    <Link color="inherit" href="https://material-ui.com/">
                        Library App
                    </Link>{' '}
                    {new Date().getFullYear()}
                    {'.'}
                </Typography>
            </Container>
        </footer>
    )
};

export default Footer;
