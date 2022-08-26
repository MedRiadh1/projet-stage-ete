import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FirebaseService } from 'src/app/services/firebase.service';


@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent implements OnInit {

  addForm : any;
  UID = String(localStorage.getItem('UID'));

  constructor(private router:Router, private db:FirebaseService) { }

  ngOnInit(): void {
    this.addForm = new FormGroup ({
      subject : new FormControl ('', [Validators.required]),
      date : new FormControl ('', [Validators.required]),
      text : new FormControl ('', [Validators.required]),
      type: new FormControl ('', [Validators.required])
    });
  }

  submit(){
    const payload = {
      UID: this.UID,
      // date:this.addForm.controls.date.value,
      // subject:this.addForm.controls.subject.value,
      // text:this.addForm.controls.text.value 
      ...this.addForm.value,
      status : 'new'
    };
    this.db.addData(payload).subscribe((res:any)=>{
      console.log(res);
    });
    this.router.navigate(['dashboard']);
  }

}
