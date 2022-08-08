import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Route, Router } from '@angular/router';
import { stringLength } from '@firebase/util';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {


  constructor(private fireAuth: AngularFireAuth, private router:Router) {}
    
  //login method
    login(email : string, password: string){
      this.fireAuth.signInWithEmailAndPassword(email,password).then(()=>{
        localStorage.setItem('token','true');
      }, err=>{
        alert(err.message);
        this.router.navigate(['/signIn']);
      })
    }

    //register method
    register(email:string, password:string){
      this.fireAuth.createUserWithEmailAndPassword(email, password).then(()=>{
        alert('Successfully registrated');
        this.router.navigate(['/signIn']);
      }, err=>{
        alert(err.message);
        this.router.navigate(['signUp']);
      })
    }

    //sign out
    logOut(){
      this.fireAuth.signOut().then(()=>{
        localStorage.removeItem('token');
        this.router.navigate(['/signIn']);
      }, err=>{
        alert(err.message);
      })
    }
  
}
