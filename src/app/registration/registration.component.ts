import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
  userAddForm: FormGroup = new FormGroup({
    name: new FormControl(''),
    address: new FormControl(''),
    country: new FormControl(''),
    subscription: new FormControl(true)
  });

  constructor() { }

  ngOnInit(): void {
  }

  submit() {
    console.log(this.userAddForm);
  }

}
