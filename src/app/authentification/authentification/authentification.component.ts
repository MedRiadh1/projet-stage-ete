import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router} from '@angular/router';

@Component({
  selector: 'app-authentification',
  templateUrl: './authentification.component.html',
  styleUrls: ['./authentification.component.css']
})
export class AuthentificationComponent implements OnInit {

  constructor(private route:ActivatedRoute, private router:Router) { }

  ngOnInit(): void {
  }
}
