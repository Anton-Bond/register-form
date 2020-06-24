import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { RegistrationService } from 'src/app/shared/services/registration.service';

import { MaskDirective } from '../../shared/directives/mask.directive';

@Component({
  selector: 'app-personal-data',
  templateUrl: './personal-data.component.html',
  styleUrls: ['./personal-data.component.css']
})
export class PersonalDataComponent implements OnInit {

  phoneMask = {
    generateMask: () =>  '+375 99 999-99-99'
  }

  form: FormGroup;
  gender: string[] = ['Мужской', 'Женский'];
  countries: string[] = ['Беларусь', 'Россия', 'Украина', 'Польша', 'Литва'];

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
        date: new FormControl(null, [Validators.required]),
        gender: new FormControl(this.gender[0], [Validators.required]),
        country: new FormControl(null, [Validators.required]),
        address: new FormControl(null, [Validators.required]),
        mSurname: new FormControl(null, [Validators.required]),
        codeWord: new FormControl(null, [Validators.required]),
        about: new FormControl(null, [Validators.required]),
        friendPhone: new FormControl('+375 ', [Validators.required]),
        extraOpt: new FormControl(null, [Validators.required]),
        email: new FormControl(null, [Validators.required, Validators.email])
      })
    }
  }


  isMale(): boolean {
    return this.form.value.gender === this.gender[0];
  }

  onSubmit() {
    // store data in service
    this.registrationService.personalForm = this.form;
    // to next step
    this.router.navigate(['/registration', 'credit-card']);

  }

  show() {
    const v = this.form.value
    console.log(v.country)
  }

}
