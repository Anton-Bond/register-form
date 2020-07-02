import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { RegistrationService } from '../../../shared/services/registration.service';
import { UserService } from '../../../shared/services/user.service';
import { User } from '../../../shared/interfaces/User';
import { DataInfo } from '../../../shared/interfaces/data-info';

@Component({
  selector: 'app-personal-result',
  templateUrl: './personal-result.component.html',
  styleUrls: ['./personal-result.component.css']
})
export class PersonalResultComponent implements OnInit {

  user: User;

  userDataInfo: DataInfo[];
  cardDataInfo: DataInfo[];

  isUserShowInfo: boolean = false;
  isCardShowInfo: boolean = false;

  constructor(
    private registrationService: RegistrationService,
    private userService: UserService,
    private router: Router,
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.user = this.registrationService.userData;
    // for popup window
    this.userDataInfo = [
      {name: 'Адрес, почтовый индекс', value: this.user.address},
      {name: 'Девичья фамилия матери', value: this.user.mSurname},
      {name: 'Кодовое слово в вашем банке', value: this.user.codeWord},
      {name: 'Как вы узнали о нашем сайте', value: this.user.about},
      {name: 'Email друга', value: this.user.friendEmail},
      {
        name: this.user.gender === 'Мужской' ? 'Номер телефона своей девушки' : 'Номер телефона своего парня',
        value: this.user.friendPhone
      },
      {
        name: this.user.gender === 'Мужской' ? 'Любимая футбольная команда' : 'Любимая фирма сковородки',
        value: this.user.extraOpt
      },
    ]
    // for popup window
    this.cardDataInfo = [
      {name: 'Номер карты', value: this.user.numberCard},
      {name: 'Месяц/год', value: this.user.dateCard},
      {name: 'CVC2 или CVV2', value: this.user.codeCard},
      {name: 'Тип карты', value: this.user.typeCard},
    ];
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
    // delete last comma and id with comma
    fileCsv = fileCsv.slice(0, -1);
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

  onSubmit() {
    //send data to mock server
    this.userService.postUser(this.user).subscribe(() => {
      // save to local disc
      const isSave = confirm('Ваши данные успешно отправлены. Сохранить данные на локальный диск?');
      if (isSave) {
        this.saveAsFile();
      }
      localStorage.clear();
      // reset user
      this.registrationService.resetUser();
      this.router.navigate(['/']);
    });
  }

}
