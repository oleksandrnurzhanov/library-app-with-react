import React from 'react';
import styles from './Footer.module.scss';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import { useSelector } from "react-redux";
import { selectAuthorizedStatus } from "../../features/Auth/AuthSelectors";

const Footer = () => {
    const isAuthorized = useSelector(selectAuthorizedStatus);

    /* TODO I think this condition should be handled just like we handle private routes since it may change with time Then we will have to updated it in one place */
    if (!isAuthorized) return null;

    return (
        <footer className={styles.footer}>
            <Container maxWidth="md">
                <Typography variant="body2" align="center">
                    {/* The result of - Copyright © Library App 2020. */}
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
