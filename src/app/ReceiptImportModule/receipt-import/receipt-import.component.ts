import { Component, OnInit } from '@angular/core';
import { ImageFileService } from '../Services/image-file.service';

@Component({
  templateUrl: './receipt-import.component.html',
  styleUrls: ['./receipt-import.component.css']
})
export class ReceiptImportComponent implements OnInit {

  public selectedImage;
  public file: File;

  constructor(private fileService: ImageFileService) { }

  ngOnInit() {
  }

  public onFileSelected(file): void {
    if (!file)
      return;

    let errorMessage = this.fileService.validateImageFile(file);
    if (errorMessage != '')  
    {
      alert(errorMessage);
      return;
    }

    this.file = file;

    this.fileService.convertToDataUrl(file).subscribe(x => {
      this.selectedImage = x;
    });
  }
}
