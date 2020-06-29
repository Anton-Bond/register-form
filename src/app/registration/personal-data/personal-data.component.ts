import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { User } from '../../shared/interfaces/User';
import { RegistrationService } from '../../shared/services/registration.service';
import { OptionsService } from '../../shared/services/options.service';

@Component({
  selector: 'app-personal-data',
  templateUrl: './personal-data.component.html',
  styleUrls: ['./personal-data.component.css']
})
export class PersonalDataComponent implements OnInit {

  form: FormGroup;
  gender: string[] = ['Мужской', 'Женский'];
  // form by defauly
  isMale: boolean;
  countries: string[] = ['Беларусь', 'Россия', 'Украина', 'Польша', 'Литва'];
  // for input phone number for female gender
  belFlag: boolean = false;
  phoneMask = {
    generateMask: () =>  ''
  };


  // it depends on gender
  exptraOptons: string[];

  constructor (
    private router: Router,
    private registrationService: RegistrationService,
    private optionsService: OptionsService,
  ) { }

  ngOnInit() {
    const user = this.registrationService.userData
    this.setUserDataToForm(user);
    // choice of option
    if (user.gender === this.gender[0]) {
      this.forMale();
    } else {
      this.forFemale();
    }

  }

  // set form data
  setUserDataToForm(user: User) {
    this.form = new FormGroup({
      name: new FormControl(user.name, [Validators.required]),
      surname: new FormControl(user.surname, [Validators.required]),
      patronymic: new FormControl(user.patronymic, [Validators.required]),
      birthday: new FormControl(new Date(user.birthday), [Validators.required]),
      gender: new FormControl(user.gender, [Validators.required]),
      country: new FormControl(user.country, [Validators.required]),
      address: new FormControl(user.address, [Validators.required]),
      mSurname: new FormControl(user.mSurname, [Validators.required]),
      codeWord: new FormControl(user.codeWord, [Validators.required]),
      about: new FormControl(user.about, [Validators.required]),
      friendEmail: new FormControl(user.friendEmail, [Validators.required, Validators.email]),
      friendPhone: new FormControl(user.friendPhone, [Validators.required]),
      extraOpt: new FormControl(user.extraOpt, [Validators.required])
    })
  }

  // settings form male gender by default
  forMale() {
    this.isMale = true;
    this.phoneMask = { generateMask: () =>  '+375 ** ***-**-**' };
    if (this.form.value.friendPhone === '') {
      this.form.patchValue({friendPhone: '+375 '});
    }
    this.exptraOptons = this.optionsService.footballTeams;
  }

  // settings form female gender by default
  forFemale() {
    this.isMale = false;
    this.phoneMask = { generateMask: () =>  '+*** ** ***-**-**' };
    if (this.form.value.friendPhone === '') {
      this.form.patchValue({friendPhone: '+'});
    }
    this.form.controls.friendPhone.valueChanges.subscribe((val) => {
      this.belFlag = /^\+375/.test(val);
    });
    this.exptraOptons = this.optionsService.panBrands;
  }

  // from gender radio button
  chengeGender () {
    this.isMale = this.form.value.gender === this.gender[0];
    this.isMale ? this.forMale() : this.forFemale();
  }

  onSubmit() {
    // store data in service
    this.registrationService.setUserFromForm(this.form);
    // to next step
    this.router.navigate(['/registration', 'credit-card']);
  }

}
