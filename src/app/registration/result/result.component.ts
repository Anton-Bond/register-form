import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { RegistrationService } from '../../shared/services/registration.service';
import { User } from '../../shared/models/User';
import { DataInfo } from '../../shared/interfaces';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {
  // if isn't any data from service
  noData: boolean = true;
  user: User;

  userDataInfo: DataInfo[];
  cardDataInfo: DataInfo[];

  isUserShowInfo: boolean = false;
  isCardShowInfo: boolean = false;

  constructor(
    private registrationService: RegistrationService,
    private router: Router,
  ) { }

  ngOnInit() {
    const value = this.registrationService.personalForm.value;
    this.user = new User (
      value.name,
      value.surname,
      value.patronymic,
      value.date,
      value.gender,
      value.country,
      value.address,
      value.mSurname,
      value.codeWord,
      value.about,
      value.email,
      value.friendPhone,
      value.extraOpt
    );
    this.userDataInfo = [
      {name: 'Адрес, почтовый индекс', value: value.address},
      {name: 'Девичья фамилия матери', value: value.mSurname},
      {name: 'Кодовое слово в вашем банке', value: value.codeWord},
      {name: 'Как вы узнали о нашем сайте', value: value.about},
      {name: 'Email друга', value: value.email},
      {
        name: value.gender === 'Мужской' ? 'Номер телефона своей девушки' : 'Номер телефона своего парня',
        value: value.friendPhone
      },
      {
        name: value.gender === 'Мужской' ? 'Любимая футбольная команда' : 'Любимая фирма сковородки',
        value: value.extraOpt
      },
    ]

    const card = this.registrationService.cardForm.value;
    this.cardDataInfo = [
      {name: 'Номер карты:', value: card.number},
      {name: 'Месяц/год:', value: card.date},
      {name: 'CVC2 или CVV2:', value: card.code},
      {name: 'Тип карты:', value: card.typeCard},
    ];
  }

  onSubmit() {
    //send data to server
    const isSave = confirm('Ваши данные успешно отправлены. Сохранить данные на локальный диск?');

    // save to local disc
    if (isSave) {
      this.saveAsFile();
    }

    this.registrationService.cardForm = null;
    this.registrationService.personalForm = null;
    this.router.navigate(['/']);
  }

  showHideUserInfo() {
    this.isUserShowInfo = !this.isUserShowInfo
  }

  showHideCardInfo() {
    this.isCardShowInfo = !this.isCardShowInfo
  }


  saveAsFile(){
    // for storage data
    let fileCsv = '';
    // add user data
    for (let key in this.user) {
      fileCsv += this.user[key] + ',';
    }
    // add card data
    const card = this.cardDataInfo;
    for (let i = 0; i < card.length; i++) {
      fileCsv += card[i].value;
      if (i !== card.length-1) {
        fileCsv += ',';
      }
    }
    fileCsv += '\n';
    // save file as
    this.writeContents(fileCsv, 'personal-data'+'.csv', 'text/plain');
  }
  writeContents(content, fileName, contentType) {
    var a = document.createElement('a');
    var file = new Blob([content], {type: contentType});
    a.href = URL.createObjectURL(file);
    a.download = fileName;
    a.click();
  }

}
