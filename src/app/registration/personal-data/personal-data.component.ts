import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { RegistrationService } from 'src/app/shared/services/registration.service';

@Component({
  selector: 'app-personal-data',
  templateUrl: './personal-data.component.html',
  styleUrls: ['./personal-data.component.css']
})
export class PersonalDataComponent implements OnInit {

  form: FormGroup;


  constructor (
    private router: Router,
    private registrationService: RegistrationService
  ) { }

  ngOnInit() {
    if(this.registrationService.personalForm) {
      this.form = this.registrationService.personalForm;
    } else {
      this.form = new FormGroup({
        name: new FormControl(null, [Validators.required]),
        surname: new FormControl(null, [Validators.required]),
        patronymic: new FormControl(null, [Validators.required]),
        email: new FormControl(null, [Validators.required, Validators.email])
      })
    }
  }

  onSubmit() {
    // store data in service
    this.registrationService.personalForm = this.form;
    // to next step
    this.router.navigate(['/registration', 'credit-card']);

  }

}
