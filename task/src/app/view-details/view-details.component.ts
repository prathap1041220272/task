import { Component, OnInit,Input,ViewChild } from '@angular/core';
// import { ViewServiceService } from '../services/view-service.service';
import { DetailsComponent } from '../details/details.component';


@Component({
  selector: 'app-view-details',
  templateUrl: './view-details.component.html',
  styleUrls: ['./view-details.component.css']
})
export class ViewDetailsComponent implements OnInit {
// 	@ViewChild (DetailsComponent)
// 	private data12 : DetailsComponent;
// // public us: string;
@Input() public data;
  constructor() { 
  	// this.data12;
  	// console.log(this.data12)
  }

  ngOnInit() {
  }

}
