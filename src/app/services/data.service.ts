import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class DataService {
  public items: any = [];

  constructor() {
    this.names= [
    {id:1,title:"0-X to %(Calibration)"},
    {id:2,title:"0-20mA (Instrumentation)"},
    {id:3,title:"0-25mA (Instrumentation)"},
    {id:4,title:"3-15 PSI (Instrumentation)"},
    {id:5,title:"4-20mA (Instrumentation)"},
    {id:6,title:"Area"},
    {id:7,title:"Digital Storage"},
    {id:8,title:"ELectric Current"},
    {id:9,title:"Energy"},
    {id:10,title:"Force"},
    {id:11,title:"Fuel COnsumption"},
    {id:12,title:"Length"},
    {id:13,title:"Mass"},
    {id:14,title:"Power"},
    {id:15,title:"Pressure"},
    {id:16,title:"Speed"},
    {id:17,title:"Temperature"},
    {id:18,title:"Time"},
    {id:19,title:"Volume"},
    {id:20,title:"Currency"}
];

  }

  filterItems(searchTerm) {
    return this.names.filter(item => {
      return item.title.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1;
    });
  }
}
