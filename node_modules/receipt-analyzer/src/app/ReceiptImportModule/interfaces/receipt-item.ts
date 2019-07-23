import { IProductCategory } from './iproduct-category';

export class ReceiptItem {
    rowKey: string;
    productName: string = '';
    productsQuantity: number  = 0;
    productPrice: number = 0;
    productCategory: IProductCategory ;

    constructor() {
        const uuid = require('uuid/v1');
        this.rowKey = uuid();
    }
}
