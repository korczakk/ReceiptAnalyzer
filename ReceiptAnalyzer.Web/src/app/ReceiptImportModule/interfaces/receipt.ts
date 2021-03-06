import { IStore } from './istore';
import { ReceiptItem } from './receipt-item';

export class Receipt {
    rowKey: string;
    store: IStore = {} as IStore;
    shoppingDate: string = '';
    totalAmount: number = 0;
    items: ReceiptItem[];

    constructor() {
        this.items = new Array<ReceiptItem>();
    }
}
