import { IStore } from './istore';
import { ReceiptItem } from './receipt-item';

export class Receipt {
    store: IStore;
    shoppingDate: string;
    totalAmount: number;
    items: ReceiptItem[];

    constructor() {
        this.items = [];
    }
}
