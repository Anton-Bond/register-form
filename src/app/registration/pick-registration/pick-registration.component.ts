import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { RegGroupService } from '../../shared/services/reg-group.service';

@Component({
  selector: 'app-pick-registration',
  templateUrl: './pick-registration.component.html',
  styleUrls: ['./pick-registration.component.css']
})
export class PickRegistrationComponent implements OnInit {

  // choose registration by default
  registration = 'personal';
  // for group data
  file: Blob = null;

  constructor(
    private regGroupService: RegGroupService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  onSubmit() {
    // group edit mode
    if (this.registration === 'group') {
      // if choose file
      if (this.file) {
        const isCorrectData: boolean = this.regGroupService.setUsersGroupData(this.file);
        if (isCorrectData) {
          localStorage.setItem('editMode', 'group');
          this.router.navigate(['registration', 'result'])
        } else {
          alert('Неверный формат данных!');
        }
      } else {
        alert('Выберите файл!');
      }
    } else {
      // personal edit mode
      localStorage.setItem('editMode', 'person');
      this.router.navigate(
        ['registration', 'personal-data']
      );
    }
  };

  // choose file
  fileChanged(e) {
    this.registration = 'group';
    this.file = e.target.files[0];
  }

}
