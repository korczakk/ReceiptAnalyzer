export class ReceiptFormUpdatingProgress {

    updatingStore;
    updatingShoppingDate ;
    updatingTotalAmount;
    updatingReceiptItems ;

    setAllToTrue() {
        this.updatingStore = true;
        this.updatingShoppingDate = true;
        this.updatingTotalAmount = true;
        this.updatingReceiptItems = true;
    }
}