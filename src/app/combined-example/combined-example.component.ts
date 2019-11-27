import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-combined-example',
  templateUrl: './combined-example.component.html',
  styleUrls: ['./combined-example.component.css']
})
export class CombinedExampleComponent implements OnInit {

  constructor() { }

  cities=["Chennai","Bangalore","Mumbai"]

  ngOnInit() {
  }

}
