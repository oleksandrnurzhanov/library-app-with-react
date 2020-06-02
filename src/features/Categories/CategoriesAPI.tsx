import axios, { AxiosResponse } from "axios";
import { API_URLS } from "../../shared/constants/AppConstants";
import { Category, CategoryResponse } from "./CategoriesInterfaces";

export const CategoriesAPI = {
    getCategories: () => {
        return axios.get(API_URLS.CATEGORIES)
            .then((res: AxiosResponse<Category[]>): CategoryResponse => {
                return {
                    data: res.data,
                    totalCount: res.data.length
                }
            })
            .catch((error: any) => {
                console.log(error);
            });
    },
    getBooksByCategoryId: () => {
    },
    createCategory: (category: Category) => {
        return axios.post(API_URLS.CATEGORIES, category, {  headers: { accept: 'application/json' }})
            .then((res: AxiosResponse<Category>) => res)
            .catch((error: any) => {
                console.log(error);
            });
    },
    updateCategory: () => {
    },
    deleteCategory: () => {
    }
}
