import { Component ,ViewChild,AfterViewInit} from '@angular/core';
import { DetailsComponent } from './details/details.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  formData: any;

  onData(data) {
  	this.formData = data;
  }

}
