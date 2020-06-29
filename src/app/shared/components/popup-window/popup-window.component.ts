import { Component, OnInit, Input } from '@angular/core';

import { DataInfo } from '../../interfaces/data-info';
@Component({
  selector: 'app-popup-window',
  templateUrl: './popup-window.component.html',
  styleUrls: ['./popup-window.component.css']
})
export class PopupWindowComponent implements OnInit {

  @Input() data: DataInfo[];

  constructor() { }

  ngOnInit() { }

}
