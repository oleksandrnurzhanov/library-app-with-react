import React from 'react';
import BooksBreadcrumbs from "../../shared/components/BooksBreadcrumbs";
import styles from './Categories.module.scss';
import {
    Button,
    Divider,
    List,
    ListItem,
    ListItemText
} from "@material-ui/core";
import AddIcon from '@material-ui/icons/Add';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import { User } from "../Auth/AuthInterfaces";
import { useSelector } from "react-redux";
import { selectUser } from "../Auth/AuthSelectors";
import _ from "lodash";
import { LocalStorageUtils } from "../../shared/utils/LocalStorageUtils";

const Categories = () => {
    // TODO refactor this case
    const userFromState: User = useSelector(selectUser);
    const user: User = !_.isEmpty(LocalStorageUtils.getItem('user'))
        ? LocalStorageUtils.getItem('user')
        : userFromState;

    // TODO change to receiving via API
    const categories = [
        "Adventures",
        "Business",
        "Fantasy",
        "Fiction",
        "Science",
    ];
    // For now it's ok but we will have to create a separate component called Category for rendering list items
    const listItems = categories.map((category: string, index: number) =>
        <div key={index}>
            <ListItem button>
                <ListItemText primary={category} />
                { !_.isEmpty(user) && user.isAdmin && <Button color="primary" startIcon={<EditIcon />} /> }
                { !_.isEmpty(user) && user.isAdmin && <Button color="secondary" startIcon={<DeleteIcon />} /> }
            </ListItem>
            <Divider />
        </div>
    );

    return (
        <div className={styles.categories}>
            <BooksBreadcrumbs pageName="Categories" />
            { !_.isEmpty(user) && user.isAdmin && <Button color="primary" startIcon={<AddIcon />}>Create category</Button> }
            <Divider />
            <List component="nav" aria-label="categories">
                {listItems}
            </List>
        </div>
    )
};

export default Categories;
