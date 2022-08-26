import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { AngularFirestore } from "@angular/fire/compat/firestore";
import { from, observable, Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  selectedCard :any;
  // id:any;

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

    //sign out method
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

    //get data method
    getData(): any {
      return new Observable(ob =>{
        this.firestore
        .collection("to-do")
        .valueChanges().subscribe(data=>{
          if(data){
            const toDoList = data.filter((item : any) => item.UID === localStorage.getItem('UID'))
            ob.next(toDoList)
          }
        }, er => ob.next(er))
      }) 
   }

    //add data method
    addData(value:any) {
      return from (this.firestore
              .collection("to-do")
              .add(value))
      };

  getSelected(){
    return this.selectedCard
  }

  setSelected(data:any){
    this.selectedCard = data;
  }

  // getAll(){
  //   return this.firestore.collection('to-do').snapshotChanges().subscribe(data => {
  //     data.map(e =>{
  //       return 
  //        e.payload.doc.id;
  //     })
  //   })
  // } 

  update( data: any, id?:string): Promise<void> {
    return this.firestore.collection('to-do').doc('7iaQWqoFgI8iQyQLe1eO').update(data);
  }
}
