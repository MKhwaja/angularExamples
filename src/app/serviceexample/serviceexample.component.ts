import { Component, OnInit } from '@angular/core';
import { PriceService } from '../price.service';

@Component({
  selector: 'app-serviceexample',
  templateUrl: './serviceexample.component.html',
  styleUrls: ['./serviceexample.component.css']
})
export class ServiceexampleComponent implements OnInit {

  ps: PriceService
  finalPrice: number

  constructor() { 
    this.ps = new PriceService();
  }

  OnFormSubmit(form: any): void {
    this.finalPrice = this.ps.calculatePrice(form.sal);
  }

  ngOnInit() {
  }

}
