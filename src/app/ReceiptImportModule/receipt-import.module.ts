import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReceiptImportComponent } from './receipt-import/receipt-import.component';
import { HistoryComponent } from './history/history.component';
import { DictionariesComponent } from './dictionaries/dictionaries.component';

@NgModule({
  declarations: [
    ReceiptImportComponent, 
    HistoryComponent, 
    DictionariesComponent],
  imports: [
    CommonModule
  ]
})
export class ReceiptImportModule { }
