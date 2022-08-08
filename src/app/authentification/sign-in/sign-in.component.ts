import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, ParamMap, Router} from '@angular/router';
import { FirebaseService } from 'src/app/services/firebase.service';

@Component({
  selector: 'sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  logInForm : any

  constructor(private route:ActivatedRoute, private router:Router, private auth: FirebaseService) { }

  ngOnInit(): void {
    this.logInForm  = new FormGroup({
      eMail : new FormControl('', [Validators.required, Validators.email]),
      pwd: new FormControl('',Validators.required)
    });
  }

  /*submit() {
    console.log(this.logInForm);
  }*/

  submit(){
    if (this.logInForm.controls.eMail.required=='true' || this.logInForm.controls.eMail.email=='true'){
      alert('Please enter your email');
      return;
    }
    if (this.logInForm.controls.pwd.required=='true'){
      alert('Please enter your password');
      return;
    }
    this.auth.login(this.logInForm.controls.eMail.value, this.logInForm.controls.pwd.value);
  }
  
  showSignUp(){
    this.router.navigate(['signUp']);
  }
}