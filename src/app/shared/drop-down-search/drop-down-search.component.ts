import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-drop-down-search',
  templateUrl: './drop-down-search.component.html',
  styleUrls: ['./drop-down-search.component.css']
})
export class DropDownSearchComponent implements OnInit {

  @Input() dropDownList = [];
  @Output() selectedItem = new EventEmitter<any>();
  constructor() { }

  ngOnInit() {
  }

  getSelectedItem(item){
    for(let i=0; i<this.dropDownList.length; i++){
      if(item === this.dropDownList[i].itemName){
        this.selectedItem.emit(this.dropDownList[i]);
      }
    }
  }

}
