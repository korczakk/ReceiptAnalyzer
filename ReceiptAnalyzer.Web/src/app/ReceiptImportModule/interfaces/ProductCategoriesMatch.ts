export interface ProductCategoriesMatch {
    productName: string,
    groupedCategories: {
        categoryName: string,
        numberOfCategories: number
    }[]
}