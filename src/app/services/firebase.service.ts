import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {


  constructor(private fireAuth: AngularFireAuth, private router:Router) {}
    
  //login method
    login(email : string, password: string){
      this.fireAuth.signInWithEmailAndPassword(email,password).then((res:any)=>{
        console.log(res);
        localStorage.setItem('token',res.user.multiFactor.user.accessToken);
        this.router.navigate(['dashboard']);
      }, err=>{
        alert(err.message);
        this.router.navigate(['/signIn']);
      })
    }

    //register method
    register(email:string, password:string){
      this.fireAuth.createUserWithEmailAndPassword(email, password).then((res:any)=>{
        alert('Successfully registrated');
        console.log(res);
        localStorage.setItem('token', res.user.multiFactor.user.accessToken);
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

    loggedIn(){
      return !!localStorage.getItem('token');
    }
  
}
