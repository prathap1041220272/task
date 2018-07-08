import { Component, OnInit, Output,EventEmitter } from '@angular/core';
import { FormGroup, Validators, FormControl, FormBuilder } from "@angular/forms";
import { Router } from '@angular/router';


@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  myForm = new FormGroup({});
  	@Output() dataSubmit = new EventEmitter();
	editform:any;
  constructor(private fb: FormBuilder,private router:Router) {

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

  userEditNow() {
    // this.dataSubmit.emit(this.myForm);
    const file = (document.getElementById('file') as HTMLInputElement).files[0];
    const fileURL = URL.createObjectURL(file);
    const data = Object.assign({}, this.myForm.value, { fileURL })


    // console.log(data);
    return this.router.navigate(['/view'], { queryParams: data });
  }
}
