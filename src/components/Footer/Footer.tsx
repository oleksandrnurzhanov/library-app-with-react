import React from 'react';
import styles from './Footer.module.scss';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import { useSelector } from "react-redux";
import { selectAuthorizedStatus } from "../../features/auth/authSelectors";

const Footer = () => {
    const isAuthorized = useSelector(selectAuthorizedStatus);
    // Redundant here
    const isUserRemembered = localStorage.getItem('isUserRemembered');

    // I think this condition should be handled just like we handle private routes since it may change with time
    // Then we will have to updated it in one place
    if (!isAuthorized) return null;

    return (
        <footer className={styles.Footer}>
            <Container maxWidth="md">
                <Typography variant="body2" align="center">
                    {/* It's not easy to understand what we will see at the first glance, so I would add a comment maybe with the result example */}
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
