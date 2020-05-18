import React from 'react';
import { Breadcrumbs, Typography } from "@material-ui/core";
import { Link } from 'react-router-dom';
import styles from './BooksBreadcrumbs.module.scss';
import { ROUTER_URLS } from "../../../routes";

const BooksBreadcrumbs = ({ url, pageName }: any) => {
    return (
        <div className={styles.booksBreadcrumbs}>
            <Breadcrumbs aria-label="breadcrumb">
                <Link to={ROUTER_URLS.HOME}>Home</Link>
                <Typography color="textPrimary">{pageName}</Typography>
            </Breadcrumbs>
        </div>
    )
};

export default BooksBreadcrumbs;
