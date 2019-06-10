import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReceiptImportMainComponent } from './ReceiptImportModule/components/receipt-import-main/receipt-import-main.component';
import { HistoryComponent } from './ReceiptImportModule/components/history/history.component';
import { DictionariesComponent } from './ReceiptImportModule/components/dictionaries/dictionaries.component';

const routes: Routes = [
  {path: "import-receipt", component: ReceiptImportMainComponent},
  {path: "history", component: HistoryComponent},
  {path: "dictionaries", component: DictionariesComponent},
  {path: "", redirectTo: "import-paragonu", pathMatch: "full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
