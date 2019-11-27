import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form1',
  templateUrl: './form1.component.html',
  styleUrls: ['./form1.component.css']
})
export class Form1Component implements OnInit {

  constructor() { }

  OnSubmit(form: any): void {
    console.log("Your value:", form);
  }

  ngOnInit() {
  }

}
