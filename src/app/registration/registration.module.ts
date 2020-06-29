import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  MatDatepickerModule,
  MatNativeDateModule,
  MatInputModule
} from '@angular/material';

import { RegistrationRoutingModule } from './registration-routing.module';
import { PickRegistrationComponent } from './pick-registration/pick-registration.component';
import { PersonalDataComponent } from './personal-data/personal-data.component';
import { CreditCardComponent } from './credit-card/credit-card.component';
import { ResultComponent } from './result/result.component';
import { RegistrationComponent } from './registration.component';
import { PopupWindowComponent } from '../shared/components/popup-window/popup-window.component';

import { MaskDirective } from '../shared/directives/mask.directive';

@NgModule({
  declarations: [
    MaskDirective,

    RegistrationComponent,
    PickRegistrationComponent,
    PersonalDataComponent,
    CreditCardComponent,
    ResultComponent,
    PopupWindowComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RegistrationRoutingModule,
    MatNativeDateModule,
    MatInputModule,
    MatDatepickerModule
  ]
})
export class RegistrationModule { }
