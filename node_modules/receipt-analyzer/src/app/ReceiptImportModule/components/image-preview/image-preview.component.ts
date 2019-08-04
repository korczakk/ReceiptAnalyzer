import { Component, OnInit, Input } from "@angular/core";
import { ImageFileService } from "../../Services/image-file.service";
import JsImageZoom from "node_modules/js-image-zoom";
import { Observable, Subject } from "rxjs";
import { IImageSize } from '../../interfaces/IImageSize';

@Component({
  selector: "app-image-preview",
  templateUrl: "./image-preview.component.html",
  styleUrls: ["./image-preview.component.css"]
})
export class ImagePreviewComponent implements OnInit {
  private _imageFile: File;
  private imageBox: HTMLElement;

  get imageFile() {
    return this._imageFile;
  }
  @Input()
  set imageFile(value: File) {
    this._imageFile = value;
    this.createPreview(value);
  }

  constructor(private fileService: ImageFileService) {}

  ngOnInit() {
    this.imageBox = document.getElementById("imageBox");
  }

  public createPreview(file) {
    if (!file) return;

    this.imageBox.innerHTML = "";

    this.fileService.convertToDataUrl(file).subscribe(x => {

      this.getImageSize(x).subscribe((imageSize: IImageSize) => {

        let imageRatio = this.calculateImageRatio(imageSize.height, imageSize.width);

        var options = {
          width: imageSize.width / imageRatio,
          height: imageSize.height / imageRatio,
          img: x,
          zoomWidth: 600,
          offset: { vertical: 0, horizontal: 5 },
          zoomStyle: "z-index: 1000; border: 1px solid grey;"
        };

        new JsImageZoom(this.imageBox, options);
      });
    });
  }

  calculateImageRatio(imageHeight: number, imageWidth: number): number {
    let containerWidth = this.imageBox.offsetWidth;
    let containerHeight = this.imageBox.offsetHeight;

    let ratioY = imageHeight / containerHeight;
    let ratioX = imageWidth / containerWidth;

    if(imageHeight > containerHeight || imageWidth > containerWidth) {
      return ratioX > ratioY ? ratioX : ratioY;
    }
    else {
      return 1;
    }
  }

  getImageSize(file): Observable<IImageSize> {
    let image = new Image();
    let result = new Subject<IImageSize>();

    image.onload = () => {
      result.next({ width: image.width, height: image.height });
    };
    image.src = file;

    return result.asObservable();
  }
}
