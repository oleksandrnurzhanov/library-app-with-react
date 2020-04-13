import React from 'react';
import styles from './Footer.module.scss';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import { useSelector } from "react-redux";
import { selectAuthorizedStatus } from "../../features/auth/authSelectors";

const Footer = () => {
    const isAuthorized = useSelector(selectAuthorizedStatus);
    const isUserRemembered = localStorage.getItem('isUserRemembered');

    if (!isAuthorized) return null;

    return (
        <footer className={styles.Footer}>
            <Container maxWidth="md">
                <Typography variant="body2" align="center">
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
