import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { SignInComponent } from '../sign-in/sign-in.component';


@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  registrationForm: FormGroup = new FormGroup({
    firstName : new FormControl('',Validators.required),
    lastName : new FormControl('',Validators.required),
    email : new FormControl('',(Validators.required,Validators.email)),
    password: new FormControl('',Validators.required),
    confirmPassword : new FormControl('',Validators.required)
  });

  name = new FormControl('');

  constructor(private route:ActivatedRoute, private router:Router) { }

  ngOnInit(): void {
  }

  showSignIn(){

    this.router.navigate(['signIn']);
  }

}