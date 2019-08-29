import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule} from '@angular/forms';
import { ReceiptImportMainComponent } from './components/receipt-import-main/receipt-import-main.component';
import { HistoryComponent } from './components/history/history.component';
import { DictionariesComponent } from './components/dictionaries/dictionaries.component';
import { ImageFileService } from './Services/image-file.service';
import { HttpClientModule } from '@angular/common/http';
import { ReceiptProcessorService } from './Services/receipt-processor.service';
import { ImagePreviewComponent } from './components/image-preview/image-preview.component';
import { RecognizedTextComponent } from './components/recognized-text/recognized-text.component';
import { ReceiptFormComponent } from './components/receipt-form/receipt-form.component';
import { AzureOcrServiceMock } from './Mocks/AzureOcrServiceMock';
import { AzureOcrServiceBase } from './interfaces/AzureOcrServiceBase';
import { AzureOcrService } from './Services/azure-ocr.service';
import { ReceiptDataService } from './Services/receipt-data.service';
import { DictionariesService } from './Services/dictionaries.service';
import { SpellCheckingService } from './Services/spell-checking.service';
import { ProductCategorizationService } from './Services/product-categorization.service';

@NgModule({
  declarations: [
    ReceiptImportMainComponent,
    HistoryComponent,
    DictionariesComponent, 
    ImagePreviewComponent, 
    RecognizedTextComponent, 
    ReceiptFormComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [
    ImageFileService,
    { provide: AzureOcrServiceBase, useClass: AzureOcrServiceMock },
    ReceiptProcessorService,
    ReceiptDataService,
    DictionariesService,
    SpellCheckingService,
    ProductCategorizationService
  ]
})
export class ReceiptImportModule { }
