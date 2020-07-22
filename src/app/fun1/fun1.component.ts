import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fun1',
  templateUrl: './fun1.component.html',
  styleUrls: ['./fun1.component.scss'],
})
export class Fun1Component implements OnInit {
  range= 0;
  rangeEnd=100;

  setQuantity1(value) {
    this.range = value;
    this.readData(this.range);
    
  }
  setQuantity2(value) {
    this.rangeEnd = value;
    this.readData(this.rangeEnd);
  }
  calculate(){
    this.range25 = (this.rangeEnd-this.range)/4;
    this.range50 = (this.rangeEnd-this.range)/2;
    this.range75 = 3*(this.rangeEnd-this.range)/4;
  }
  constructor() { }

  ngOnInit() {
    this.calculate();
  }

}
