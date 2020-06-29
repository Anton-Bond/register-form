import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pick-registration',
  templateUrl: './pick-registration.component.html',
  styleUrls: ['./pick-registration.component.css']
})
export class PickRegistrationComponent implements OnInit {

  // choose registration by default
  registration = 'personal';
  constructor( private router: Router ) { }

  ngOnInit() {
  }

  onSubmit() {
    if (this.registration === 'group') {
      this.router.navigate(
        ['registration', 'result']
      );
    } else {
      this.router.navigate(
        ['registration', 'personal-data']
      );
    }
  };

  file:any;
  fileChanged(e) {
      this.file = e.target.files[0];
  }

  uploadDocument(file) {
    let fileReader = new FileReader();
    fileReader.onload = (e) => {
      console.log(fileReader.result);
    }
    fileReader.readAsText(this.file);
  }
  show() {
    let fileReader = new FileReader();
    fileReader.onload = (e) => {
      console.log(fileReader.result);
    }
    fileReader.readAsText(this.file);
  }

}
