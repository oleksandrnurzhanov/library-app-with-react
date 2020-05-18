import React from 'react';
import BooksBreadcrumbs from "../../shared/components/BooksBreadcrumbs";
import styles from './Categories.module.scss';
import {
    Divider,
    List,
    ListItem,
    ListItemText
} from "@material-ui/core";

const Categories = () => {
    const numbers = [1, 2, 3, 4, 5];
    const listItems = numbers.map((number) =>
        <div key={number}>
            <ListItem button>
                <ListItemText primary={number} />
            </ListItem>
            <Divider />
        </div>
    );

    return (
        <div className={styles.categories}>
            <BooksBreadcrumbs pageName="Categories" />
            <h3 className={styles.title}>Categories</h3>
            <Divider />
            <List component="nav" aria-label="categories">
                {listItems}
            </List>
        </div>
    )
};

export default Categories;
