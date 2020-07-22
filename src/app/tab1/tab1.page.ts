import { Component } from '@angular/core';
import {FilterPipePipe} from '../filter-pipe.pipe'
import { DataService } from '../services/data.service';
import { FormControl } from "@angular/forms";
import { debounceTime } from "rxjs/operators";

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  searchTerm: string = '';
    searchControl: FormControl;
    items: any;
    searching: any = false;
  names= [
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



  constructor(private dataService: DataService) {
    this.searchControl = new FormControl();
  }

  ionViewDidLoad() {

    this.setFilteredItems();

    this.searchControl.valueChanges.debounceTime(700).subscribe(search => {

        this.searching = false;
        this.setFilteredItems();

    });


}
onSearchInput(){
  this.searching = true;
}
  setFilteredItems() {
    this.names = this.dataService.filterItems(this.searchTerm);
  }
}
