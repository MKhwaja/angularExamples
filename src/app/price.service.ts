// import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root'
// })
export class PriceService {

  constructor() { }
  calculatePrice(price: number): number {
    return (Number(price) + 30);
  }
}
