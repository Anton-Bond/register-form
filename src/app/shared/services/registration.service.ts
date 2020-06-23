import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  // for store personal data
  private pForm: FormGroup;
  // for store card data
  private cForm: FormGroup;

  // for personal data
  get personalForm(): FormGroup {
    return this.pForm;
  }

  set personalForm(form: FormGroup) {
    this.pForm = form;
  }

  // for card data
  get cardForm(): FormGroup {
    return this.cForm;
  }

  set cardForm(form: FormGroup) {
    this.cForm = form;
  }
}
