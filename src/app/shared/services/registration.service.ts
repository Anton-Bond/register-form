import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { User } from '../interfaces/User';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  // for store personal data
  // with id=0 empty(default), when one person edit id=1
  private user: User = {
    name: '',
    surname: '',
    patronymic: '',
    birthday: '',
    gender: 'Мужской',
    country: '',
    address: '',
    mSurname: '',
    codeWord: '',
    about: '',
    friendEmail: '',
    friendPhone: '',
    extraOpt: '',
  };

  // for personal data
  get userData(): User {
    return this.user;
  }

  set userData(user: User) {
    this.user = user;
  }

  setUserFromForm(form: FormGroup) {
    // set birthday date to format mm/dd/yyyy
    const date = new Date(form.value.birthday.toString());
    const birthday = ((date.getMonth() > 8) ? (date.getMonth() + 1) : ('0' + (date.getMonth() + 1)))
      + '/' + ((date.getDate() > 9) ? date.getDate() : ('0' + date.getDate()))
      + '/' + date.getFullYear();

    this.user.name = form.value.name;
    this.user.surname = form.value.surname;
    this.user.patronymic = form.value.patronymic;
    this.user.birthday = birthday.toString();
    this.user.gender = form.value.gender;
    this.user.country = form.value.country;
    this.user.address = form.value.address;
    this.user.mSurname = form.value.mSurname;
    this.user.codeWord = form.value.codeWord;
    this.user.about = form.value.about;
    this.user.friendEmail = form.value.friendEmail;
    this.user.friendPhone = form.value.friendPhone;
    this.user.extraOpt = form.value.extraOpt;
  }

  setCardFromForm(form: FormGroup) {
    this.user.numberCard = form.value.numberCard;
    this.user.dateCard = form.value.dateCard;
    this.user.codeCard = form.value.codeCard;
    this.user.typeCard = form.value.typeCard;
  }

  // set by default
  resetUser() {
    this.userData = {
      name: '',
      surname: '',
      patronymic: '',
      birthday: '',
      gender: 'Мужской',
      country: '',
      address: '',
      mSurname: '',
      codeWord: '',
      about: '',
      friendEmail: '',
      friendPhone: '',
      extraOpt: '',
    }
  }

}
