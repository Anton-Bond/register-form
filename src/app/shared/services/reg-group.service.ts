import { Injectable } from '@angular/core';

import { User } from '../interfaces/User';

@Injectable({
  providedIn: 'root'
})
export class RegGroupService {

  // for store users
  private users: User[] = [];

  // for personal data
  get usersGroup(): User[] {
    return this.users;
  }

  set usersGroup(users: User[]) {
    this.users = users;
  }

  // set group data to service
  setUsersGroupData(file: Blob): boolean {
    // split string from file to array
    let fileReader = new FileReader();
    fileReader.onload = (e) => {
      const list = fileReader.result.toString().split('\n');
      for (let i = 0; i < list.length; i++) {
        const userLine = list[i].split(',');
        if (userLine.length === 17) {
          this.users.push({
            name: userLine[0],
            surname: userLine[1],
            patronymic: userLine[2],
            birthday: userLine[3],
            gender: userLine[4],
            country: userLine[5],
            address: userLine[6],
            mSurname: userLine[7],
            codeWord: userLine[8],
            about: userLine[9],
            friendEmail: userLine[10],
            friendPhone: userLine[11],
            extraOpt: userLine[12],
            numberCard: userLine[13],
            dateCard: userLine[14],
            codeCard: userLine[15],
            typeCard: userLine[16]
          })
        } else {
          // data from file isn't correct
          return false;
        }
      }
    }
    fileReader.readAsText(file);
    // file is ok
    return true;
  }


}
