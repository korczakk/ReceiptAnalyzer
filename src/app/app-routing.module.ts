import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReceiptImportComponent } from './ReceiptImportModule/receipt-import/receipt-import.component';
import { HistoryComponent } from './ReceiptImportModule/history/history.component';
import { DictionariesComponent } from './ReceiptImportModule/dictionaries/dictionaries.component';

const routes: Routes = [
  {path: "import-receipt", component: ReceiptImportComponent},
  {path: "history", component: HistoryComponent},
  {path: "dictionaries", component: DictionariesComponent},
  {path: "", redirectTo: "/import-paragonu", pathMatch: "full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
