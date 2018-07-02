import { Component, OnInit, Output,EventEmitter } from '@angular/core';
import { FormGroup, Validators, FormControl, FormBuilder } from "@angular/forms";


@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  myForm = new FormGroup({});
  	@Output() dataSubmit = new EventEmitter();
	editform:any;
  constructor(private fb: FormBuilder) {

  this.myForm = this.fb.group({
      email: ['', Validators.required],
      name: ['', Validators.required ] ,
      mobile: ['', Validators.required ] ,
      description: ['', Validators.required ] ,
      // file: ['', Validators.required ]
    }) 
   }

  ngOnInit() {
  }

  userEditNow(){
  	this.dataSubmit.emit(this.myForm);
  	this.editform = this.myForm;
    // this.viewServ.editUser(this.myForm);
    console.log(this.myForm)
  }
}
