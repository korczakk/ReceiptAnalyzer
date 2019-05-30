import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReceiptImportComponent } from './components/receipt-import/receipt-import.component';
import { HistoryComponent } from './components/history/history.component';
import { DictionariesComponent } from './components/dictionaries/dictionaries.component';
import { ImageFileService } from './Services/image-file.service';
import { AzureOcrService } from './Services/azure-ocr.service';
import { HttpClientModule } from '@angular/common/http';
import { ReceiptProcessorService } from './Services/receipt-processor.service';
import { ImagePreviewComponent } from './components/image-preview/image-preview.component';
import { RecognizedTextComponent } from './components/recognized-text/recognized-text.component';
import { ReceiptFormComponent } from './components/receipt-form/receipt-form.component';
import { TextLineComponent } from './components/text-line/text-line.component';

@NgModule({
  declarations: [
    ReceiptImportComponent, 
    HistoryComponent, 
    DictionariesComponent, ImagePreviewComponent, RecognizedTextComponent, ReceiptFormComponent, TextLineComponent],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers: [
    ImageFileService,
    AzureOcrService,
    ReceiptProcessorService
  ]
})
export class ReceiptImportModule { }
