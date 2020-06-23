import { Component, OnInit } from '@angular/core';

import { RegistrationService } from '../../shared/services/registration.service';
import { User } from '../../shared/models/User';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {
  // if isn't any data from service
  noData: boolean = true;
  user: User;

  constructor(private registrationService: RegistrationService) { }

  ngOnInit() {
    if (this.registrationService.personalForm) {
      this.noData = false;
      const value = this.registrationService.personalForm.value;
      this.user = new User (value.name, value.surname, value.patronymic, value.email);
    } else {
      this.noData = true;
    }

  }

  onSubmit() {
    console.log(this.registrationService.personalForm.value);
  }

}
