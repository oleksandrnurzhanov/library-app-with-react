import React, { useState, useEffect } from 'react';
import BooksBreadcrumbs from "../../shared/components/BooksBreadcrumbs";
import styles from './Categories.module.scss';
import {
    Button,
    Divider,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    List,
    ListItem,
    ListItemText,
    TextField
} from "@material-ui/core";
import AddIcon from '@material-ui/icons/Add';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import { User } from "../Auth/AuthInterfaces";
import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "../Auth/AuthSelectors";
import _ from "lodash";
import { LocalStorageUtils } from "../../shared/utils/LocalStorageUtils";
import {
    getCategories,
    createCategory,
    deleteCategory,
} from "./CategoriesSlice";
import { Category, CategoryResponse } from "./CategoriesInterfaces";

const Categories = () => {
    const dispatch = useDispatch();
    const userFromState: User = useSelector(selectUser);
    const user: User = !_.isEmpty(LocalStorageUtils.getItem('user'))
        ? LocalStorageUtils.getItem('user')
        : userFromState;

    const [open, setOpen] = useState(false);
    const [categoryName, setCategoryName] = useState("");
    const [categories, setCategories] = useState([]);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
        console.log('created category', categoryName);
        dispatch(createCategory({ name: categoryName }) as any).then((res: any) => {
            console.log('res', res);
        });
    };

    const removeCategory = (id: any) => {
        const categoryId: string = id || '';
        dispatch(deleteCategory(categoryId) as any);
    }

    // TODO move to separate Category component
    const listItems = categories.map((category: Category, index: number) =>
        <div key={index}>
            <ListItem button>
                <ListItemText primary={category.name} />
                {/*TODO refactor this solution */}
                {/*!_.isEmpty(user) do this before showing anything for example on loading stage*/}
                { !_.isEmpty(user) && user.isAdmin && <Button color="primary" startIcon={<EditIcon />} /> }
                { !_.isEmpty(user) && user.isAdmin && <Button color="secondary" onClick={removeCategory(category.id)} startIcon={<DeleteIcon />} /> }
            </ListItem>
            <Divider />
        </div>
    );

    useEffect(() => {
        dispatch(getCategories() as any).then((res: { payload: CategoryResponse }) => {
            setCategories(res.payload.data as any);
        });
    });

    return (
        <div className={styles.categories}>
            <BooksBreadcrumbs pageName="Categories" />
            { !_.isEmpty(user) && user.isAdmin && <Button color="primary" startIcon={<AddIcon />} onClick={handleOpen}>Create category</Button> }
            <Dialog open={open}
                    onClose={handleClose}
                    aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">Create category</DialogTitle>
                <DialogContent>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="category"
                        label="Category Name"
                        type="text"
                        value={categoryName}
                        onChange={(e: any) => setCategoryName(e.target.value)}
                        fullWidth
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Cancel
                    </Button>
                    <Button onClick={handleClose} color="primary">
                        Create
                    </Button>
                </DialogActions>
            </Dialog>
            <Divider />
            <List component="nav" aria-label="categories">
                {listItems}
            </List>
        </div>
    )
};

export default Categories;
