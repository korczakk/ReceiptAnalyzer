import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReceiptImportComponent } from './receipt-import/receipt-import.component';
import { HistoryComponent } from './history/history.component';
import { DictionariesComponent } from './dictionaries/dictionaries.component';
import { ImageFileService } from './Services/image-file.service';
import { OcrService } from './Services/ocr.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    ReceiptImportComponent, 
    HistoryComponent, 
    DictionariesComponent],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers: [
    ImageFileService,
    OcrService
  ]
})
export class ReceiptImportModule { }
