import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-if-validation',
  templateUrl: './if-validation.component.html',
  styleUrls: ['./if-validation.component.css']
})
export class IfValidationComponent implements OnInit {

  constructor() { }

  data = {
    'age' : '19'
  }
  ngOnInit() {
  }

}
