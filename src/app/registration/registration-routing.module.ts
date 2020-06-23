import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PersonalDataComponent } from './personal-data/personal-data.component';
import { PickRegistrationComponent } from './pick-registration/pick-registration.component';
import { CreditCardComponent } from './credit-card/credit-card.component';
import { ResultComponent } from './result/result.component';
import { RegistrationComponent } from './registration.component';


const rroutes: Routes = [
  { path: '', redirectTo: 'pick-registr', pathMatch: 'full' },
  { path: 'pick-registr', component: PickRegistrationComponent },
  { path: 'registration', component: RegistrationComponent, children: [
    { path: 'personal-data', component: PersonalDataComponent },
    { path: 'credit-card', component: CreditCardComponent },
    { path: 'result', component: ResultComponent }
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(rroutes)],
  exports: [RouterModule]
})
export class RegistrationRoutingModule { }
