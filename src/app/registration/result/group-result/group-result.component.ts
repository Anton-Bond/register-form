import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { RegGroupService } from '../../../shared/services/reg-group.service';
import { RegistrationService } from '../../../shared/services/registration.service';
import { UserService } from '../../../shared/services/user.service';
import { User } from '../../../shared/interfaces/User';

@Component({
  selector: 'app-group-result',
  templateUrl: './group-result.component.html',
  styleUrls: ['./group-result.component.css']
})
export class GroupResultComponent implements OnInit {

  user: User;
  users: User[];

  constructor(
    private regGroupService: RegGroupService,
    private registrationService: RegistrationService,
    private userService: UserService,
    private router: Router,
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    // set from server
    this.users = this.regGroupService.usersGroup;
  }

  editUser(index: number) {
    this.registrationService.userData = this.users[index];
    this.router.navigate(
      ['registration', 'personal-data']
    );
  }

  onSubmit() {
    //send data to mock server
    this.userService.postUsers(this.users).subscribe(() => {
      // reset data
      this.registrationService.resetUser();
      this.regGroupService.usersGroup = [];
      localStorage.clear();
      alert('Ваши данные успешно отправлены!');
      this.router.navigate(['/']);
    });

  }

}
