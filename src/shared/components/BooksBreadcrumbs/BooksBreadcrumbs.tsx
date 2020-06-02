import React from 'react';
import { Breadcrumbs, Typography } from "@material-ui/core";
import { Link } from 'react-router-dom';
import styles from './BooksBreadcrumbs.module.scss';
import { ROUTER_URLS_MAP } from "../../../Routes";
import { ROUTER_URLS } from "../../../RoutesEnums";

const BooksBreadcrumbs = ({ pageName }: any) => {
    return (
        <div className={styles.booksBreadcrumbs}>
            <Breadcrumbs aria-label="breadcrumb">
                <Link to={ROUTER_URLS_MAP[ROUTER_URLS.Home]}>Home</Link>
                <Typography color="textPrimary">{pageName}</Typography>
            </Breadcrumbs>
        </div>
    )
};

export default BooksBreadcrumbs;
