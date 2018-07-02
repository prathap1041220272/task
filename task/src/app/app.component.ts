import { Component ,ViewChild,AfterViewInit} from '@angular/core';
import { DetailsComponent } from './details/details.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 @ViewChild (DetailsComponent) dataSubmit;
  formData: any;
  // parentdata:any;
  onData(data) {
  	this.formData = data;
  	console.log('child app',data)
  }
  // recivedata($event) {
  // 	this.parentdata = $event;
  // 	console.log('appdata',this.parentdata)
  // }
}
