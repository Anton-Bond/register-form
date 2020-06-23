import { Component, OnInit, Input } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { RegistrationService } from 'src/app/shared/services/registration.service';

@Component({
  selector: 'app-credit-card',
  templateUrl: './credit-card.component.html',
  styleUrls: ['./credit-card.component.css']
})
export class CreditCardComponent implements OnInit {

  form: FormGroup;

  constructor (
    private router: Router,
    private registrationService: RegistrationService
  ) { }

  ngOnInit() {
    if (this.registrationService.cardForm) {
      this.form = this.registrationService.cardForm;
    } else {
      this.form = new FormGroup({
        number: new FormControl(null, [Validators.required]),
        date: new FormControl(null, [Validators.required]),
        code: new FormControl(null, [Validators.required]),
        type: new FormControl(null, [Validators.required])
      })
    }
  }

  onSubmit() {
    // store data in service
    this.registrationService.cardForm = this.form;
    // to next step
    this.router.navigate(['/registration', 'result']);
  }

}
