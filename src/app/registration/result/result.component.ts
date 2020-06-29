import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {

  isGroup: boolean = false;

  constructor(
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.isGroup = localStorage.getItem('editMode') === 'group';
  }

}
