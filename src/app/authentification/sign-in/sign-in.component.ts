import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  registrationForm: FormGroup = new FormGroup({
    userName : new FormControl(''),
    password: new FormControl(''),
    confirmPassword : new FormControl('')
  });

  constructor() { }

  ngOnInit(): void {
  }

}
