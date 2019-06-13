import { IStore } from '../../ReceiptImportModule/interfaces/istore';
import { IReceiptItem } from '../../ReceiptImportModule/interfaces/ireceipt-item';

export interface IReceipt {
    store: IStore;
    shoppingDate: Date;
    totalAmount: number;
    items: IReceiptItem[];
}
