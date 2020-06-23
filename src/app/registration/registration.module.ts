import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { RegistrationRoutingModule } from './registration-routing.module';
import { PickRegistrationComponent } from './pick-registration/pick-registration.component';
import { PersonalDataComponent } from './personal-data/personal-data.component';
import { CreditCardComponent } from './credit-card/credit-card.component';
import { ResultComponent } from './result/result.component';
import { RegistrationComponent } from './registration.component';

@NgModule({
  declarations: [
    RegistrationComponent,
    PickRegistrationComponent,
    PersonalDataComponent,
    CreditCardComponent,
    ResultComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RegistrationRoutingModule
  ]
})
export class RegistrationModule { }
