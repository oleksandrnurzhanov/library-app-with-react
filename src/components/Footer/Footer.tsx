import React from 'react';
import styles from './Footer.module.scss';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import _ from 'lodash';

const Footer = (props: any) => {
    if (_.isEmpty(props.user)) return null;

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
