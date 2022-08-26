import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FirebaseService } from 'src/app/services/firebase.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() card: any;
  
  constructor(private router: Router, private db: FirebaseService) { }

  ngOnInit(): void {
  }

  goEdit(){
    this.db.setSelected(this.card);
    this.router.navigate(['/edit']);
  }

}
