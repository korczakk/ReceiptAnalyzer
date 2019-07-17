import { IProductCategory } from './iproduct-category';

export class ReceiptItem {
    rowKey: number;
    productName: string;
    productsQuantity: number;
    productPrice: number;
    productCategory: IProductCategory
}
