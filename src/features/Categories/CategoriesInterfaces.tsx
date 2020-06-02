export interface Category {
    name: string;
    id?: string;
}

export interface CategoryResponse {
    data: Category[],
    totalCount: number
}
