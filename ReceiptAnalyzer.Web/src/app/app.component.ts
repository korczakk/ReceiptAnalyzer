import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title = 'ReceiptAnalyzer';
  
  public env =  process.env.WEBSITE_NODE_DEFAULT_VERSION;
}
