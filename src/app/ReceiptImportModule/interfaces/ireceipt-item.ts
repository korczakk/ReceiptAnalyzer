import { IProductCategory } from '../../ReceiptImportModule/interfaces/iproduct-category';

export interface IReceiptItem {
    productName: string;
    productsQuantity: number;
    productPrice: number;
    productCategory: IProductCategory
}
