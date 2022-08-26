import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FirebaseService } from 'src/app/services/firebase.service';


@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  editForm:any
  card : any

  constructor(private db :FirebaseService, private router: Router) { }

  ngOnInit(): void {
    this.getSelectedCard();
    this.editForm = new FormGroup ({
      status: new FormControl (this.card.status, [Validators.required]),
      subject : new FormControl (this.card.subject, [Validators.required]),
      date : new FormControl (this.card.date, [Validators.required]),
      text : new FormControl (this.card.text, [Validators.required]),
      type: new FormControl (this.card.type, [Validators.required])
    });
  }
  getSelectedCard(){
   this.card = this.db.getSelected();
  }

  update(){
    this.db.update(this.editForm.value, this.card.id).then((elemUpdated:any)=>{
      this.router.navigate(['/dashboard']);
    });

  };
}
