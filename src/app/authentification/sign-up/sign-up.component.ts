import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { FirebaseService } from 'src/app/services/firebase.service';


@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  registrationForm: any;


  constructor(private route:ActivatedRoute, private router:Router, private auth: FirebaseService ) { }

  ngOnInit(): void {
    this.registrationForm = new FormGroup({
      firstName : new FormControl('',Validators.required),
      lastName : new FormControl('',Validators.required),
      email : new FormControl('',[Validators.required,Validators.email]),
      password: new FormControl('',Validators.required),
      confirmPassword : new FormControl('',Validators.required)
    })
  }

  showSignIn(){

    this.router.navigate(['/signIn']);
  }

  register(){
    if (this.registrationForm.controls.email.required=='true' || this.registrationForm.controls.email.email=='true'){
      alert('Please enter your email');
      return;
    }
    if (this.registrationForm.controls.password.required=='true'){
      alert('Please enter your password');
      return;
    }
    this.auth.register(this.registrationForm.controls.email.value, this.registrationForm.controls.password.value);
    // this.auth.addData(this.registrationForm.value);
  }

}
