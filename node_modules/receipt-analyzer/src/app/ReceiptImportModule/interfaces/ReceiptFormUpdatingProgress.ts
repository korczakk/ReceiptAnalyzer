export class ReceiptFormUpdatingProgress {

    updatingStore = false;
    updatingShoppingDate = false;
    updatingTotalAmount = false;
    updatingReceiptItems = false;

    setAllToTrue() {
        this.updatingStore = true;
        this.updatingShoppingDate = true;
        this.updatingTotalAmount = true;
        this.updatingReceiptItems = true;
    }
}