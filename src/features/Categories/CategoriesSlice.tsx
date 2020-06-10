import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { LocalStorageUtils } from "../../shared/utils/LocalStorageUtils";
import { CategoriesAPI } from "./CategoriesAPI";
import {
    Category,
    CategoryResponse
} from "./CategoriesInterfaces";

export const getCategories = createAsyncThunk(
    'categories/getCategories',
    async () => await CategoriesAPI.getCategories()
)

export const createCategory = createAsyncThunk(
    'categories/createCategory',
    async (category: Category) => await CategoriesAPI.createCategory(category)
)

export const deleteCategory = createAsyncThunk(
    'categories/deleteCategory',
    async (categoryId: string) => await CategoriesAPI.deleteCategory(categoryId)
)

export const categoriesSlice = createSlice({
    name: 'categories',
    initialState: {
        categories: LocalStorageUtils.getItem('categories')
    },
    reducers: {},
    extraReducers: {
        [getCategories.fulfilled.toString()]: (state: any, action: { payload: CategoryResponse }) => {
            LocalStorageUtils.setItem('categories', action.payload.data);
        }
    }
});

export default categoriesSlice.reducer;
