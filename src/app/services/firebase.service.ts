import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { AngularFirestore } from "@angular/fire/compat/firestore";
import { from } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class FirebaseService {



  constructor(private fireAuth: AngularFireAuth, private router:Router,  private firestore: AngularFirestore) {}
    
  //login method
    login(email : string, password: string){
      this.fireAuth.signInWithEmailAndPassword(email,password).then((res:any)=>{
        console.log(res);
        localStorage.setItem('token',res.user.multiFactor.user.accessToken);
        localStorage.setItem('UID', res.user.multiFactor.user.uid);
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
        localStorage.removeItem('UID');
        this.router.navigate(['/signIn']);
      }, err=>{
        alert(err.message);
      })
    }

    loggedIn(){
      return !!localStorage.getItem('token');
    }

    getData(): any {
      return this.firestore
     .collection("to-do")
     .valueChanges();
   }

    addData(value:any) {
      return from (this.firestore
              .collection("to-do")
              .add(value))
      };

  
}
