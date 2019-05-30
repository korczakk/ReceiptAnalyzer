import { Component, OnInit, Input } from '@angular/core';
import { ImageFileService } from '../../Services/image-file.service';

@Component({
  selector: 'app-image-preview',
  templateUrl: './image-preview.component.html',
  styleUrls: ['./image-preview.component.css']
})
export class ImagePreviewComponent implements OnInit {

  public selectedImage;
  private _imageFile: File;

  get imageFile() {
    return this._imageFile;
  }
  @Input()
  set imageFile(value: File) {
    this._imageFile = value;
    this.createPreview(value);
  }

  constructor(private fileService: ImageFileService) { }

  ngOnInit() {
  }

  public createPreview(file) {
    if (!file) return;

    this.fileService.convertToDataUrl(file).subscribe(x => {
      this.selectedImage = x;
    });
  }
}
