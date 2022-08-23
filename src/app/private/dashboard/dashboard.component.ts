import { Component, OnInit } from '@angular/core';
import { FirebaseService } from 'src/app/services/firebase.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  data:any;

  constructor(private auth: FirebaseService) { }

  ngOnInit(): void {
    this.getData();
  }

  logOut(){
    this.auth.logOut();
  }

  getData(){
    this.auth.getData().subscribe((todolist:any)=>{
      console.log('dataaaaaaaaaaaa',todolist);
      this.data=todolist;
    });

  }

}
