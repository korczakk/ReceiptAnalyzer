import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './receipt-import.component.html',
  styleUrls: ['./receipt-import.component.css']
})
export class ReceiptImportComponent implements OnInit {

  public selectedImage;
  public fileName: string;

  constructor() { }

  ngOnInit() {
  }

  public createPreview(file): void {
    if (!file)
      return;

    if (file.type.indexOf('image') == -1)
      alert('Pliku musi być grafiką.');

    this.fileName = file.name;

    let reader = new FileReader();
    reader.readAsDataURL(file);

    reader.onload = (_event) => {
      this.selectedImage = reader.result;
    };
  }
}
