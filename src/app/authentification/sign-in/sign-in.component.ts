import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, ParamMap, Router} from '@angular/router';

@Component({
  selector: 'sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  logInForm: FormGroup  = new FormGroup({
    uName : new FormControl('', Validators.required),
    pwd: new FormControl('',Validators.required)
  });

  submitted = false;

  constructor(private route:ActivatedRoute, private router:Router) { }

  ngOnInit(): void {
  }

  submit() {
    console.log(this.logInForm.value);
  }
  
  showSignUp(){
    this.router.navigate(['signUp']);
  }
}