import { Component, OnInit,Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ViewServiceService } from '../services/view-service.service';
import { DetailsComponent } from '../details/details.component';



@Component({
  selector: 'app-view-details',
  templateUrl: './view-details.component.html',
  styleUrls: ['./view-details.component.css']
})
export class ViewDetailsComponent implements OnInit {
data: any = {};
  constructor(
  	private route: ActivatedRoute,
  	private serv: ViewServiceService
  	) { 
  	this.data = this.route.snapshot.queryParams;
  }



  ngOnInit() {
//   	.then(function(response) {
//   var objectURL = URL.createObjectURL(response);
//   myImage.src = objectURL;
// });
  	(document.getElementById('myImg') as HTMLImageElement).src = this.data.fileURL;
  }

  dataSubmit() { 	 
  	fetch(this.data.fileURL)
  	.then(function(response) {
  const file = response.blob();
  const data = Object.assign({}, this.data, {file});
  const f = new FormData();
const k = Object.keys(data).forEach(key => f.append(key, data[key]));
  	 this.serv.createUser(k)
  console.log(k)
});
  	
  }

}
