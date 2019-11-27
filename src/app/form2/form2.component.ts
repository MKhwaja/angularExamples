import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form2',
  templateUrl: './form2.component.html',
  styleUrls: ['./form2.component.css']
})
export class Form2Component implements OnInit {

  myForm: FormGroup;
  //sku="";

  constructor(fb:FormBuilder) {
    this.myForm = fb.group({
      'sku':['ABCD1234', Validators.required],
      'prod':['Laptop', Validators.required]
    })
   }

   onSubmit(value: string): void {
    console.log("Your value:", value);
  }

  ngOnInit() {
  }

}
