import { Component, OnInit, Input } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { User } from '../../shared/interfaces/User';
import { RegistrationService } from 'src/app/shared/services/registration.service';

@Component({
  selector: 'app-credit-card',
  templateUrl: './credit-card.component.html',
  styleUrls: ['./credit-card.component.css']
})
export class CreditCardComponent implements OnInit {

  form: FormGroup;
  // mask for fields
  numberMask = {
    generateMask: () =>  '**** **** **** ****'
  }
  dateMask = {
    generateMask: () =>  '**/**'
  }
  cvcMask = {
    generateMask: () =>  '***'
  }
  cardTypes: string[] = ['Дебетовая', 'Кредитная'];

  constructor (
    private router: Router,
    private registrationService: RegistrationService
  ) { }

  ngOnInit() {
    // if come back from result page
    if (this.registrationService.userData.numberCard) {
      this.setCardDataToForm(this.registrationService.userData);
    } else {
      // set empty form
      this.form = new FormGroup({
        numberCard: new FormControl(null, [Validators.required]),
        dateCard: new FormControl(null, [Validators.required]),
        codeCard: new FormControl(null, [Validators.required]),
        typeCard: new FormControl(null, [Validators.required])
      })
    }
  }

  // set form data
  setCardDataToForm(user: User) {
    this.form = new FormGroup({
      numberCard: new FormControl(user.numberCard, [Validators.required]),
      dateCard: new FormControl(user.dateCard, [Validators.required]),
      codeCard: new FormControl(user.codeCard, [Validators.required]),
      typeCard: new FormControl(user.typeCard, [Validators.required])
    })
  }

  onSubmit() {
    // store data in service
    this.registrationService.setCardFromForm(this.form);
    // to next step
    this.router.navigate(['/registration', 'result']);
  }

}
