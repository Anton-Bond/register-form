import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { RegistrationService } from '../../shared/services/registration.service';
import { OptionsService } from '../../shared/services/options.service';

@Component({
  selector: 'app-personal-data',
  templateUrl: './personal-data.component.html',
  styleUrls: ['./personal-data.component.css']
})
export class PersonalDataComponent implements OnInit {

  phoneMask = {
    generateMask: () =>  '+375 ** ***-**-**'
  }

  form: FormGroup;
  gender: string[] = ['Мужской', 'Женский'];
  isMale: boolean = true;
  countries: string[] = ['Беларусь', 'Россия', 'Украина', 'Польша', 'Литва'];
  belFlag: boolean = false;

  // it depends on gender
  exptraOptons: string[];

  constructor (
    private router: Router,
    private registrationService: RegistrationService,
    private optionsService: OptionsService
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
        email: new FormControl(null, [Validators.required, Validators.email]),
        friendPhone: new FormControl(null, [Validators.required]),
        extraOpt: new FormControl(null, [Validators.required])
      })
    }
    this.forMale();
  }

  onSubmit() {
    // store data in service
    this.registrationService.personalForm = this.form;
    // to next step
    this.router.navigate(['/registration', 'credit-card']);

  }

  forMale() {
    this.phoneMask = { generateMask: () =>  '+375 ** ***-**-**' };
    this.form.patchValue({friendPhone: '+375 '});
    this.exptraOptons = this.optionsService.footballTeams;
  }

  forFemale() {
    this.phoneMask = { generateMask: () =>  '+*** ** ***-**-**' };
    this.form.patchValue({friendPhone: '+'});
    this.form.controls.friendPhone.valueChanges.subscribe((val) => {
      this.belFlag = /^\+375/.test(val);
    });
    this.exptraOptons = this.optionsService.panBrands;
  }

  chengeGender () {
    this.isMale = this.form.value.gender === this.gender[0];
    this.isMale ? this.forMale() : this.forFemale();
  }

  set () {
    this.form.setValue({
      name: 'Петр',
      surname: 'Петрович',
      patronymic: 'Петров',
      date: '6/27/2020',
      gender: 'Мужской',
      country: 'Беларусь',
      address: 'Гомель ул.Советская',
      mSurname: 'Содорова',
      codeWord: 'Банк',
      about: 'из рекламы',
      friendPhone: '+375 29 123-45-67',
      extraOpt: 'Металург',
      email: 'petrov@mail.loc'
    })
  }


  // f(item) {
  //   console.log('from selected: ', item)
  // }

  // getSelectedItem(item){
  //   console.log(item)
  //   // for(let i=0; i<this.exptraOptons.length; i++){
  //   //   if(item === this.exptraOptons[i]){
  //   //     this.selectedItem.emit(this.dropDownList[i]);
  //   //   }
  //   // }
  // }
}
