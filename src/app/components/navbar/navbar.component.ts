import { Component, OnInit } from '@angular/core';
import { NgClass } from '@angular/common';
import { FormGroup, FormControl, FormBuilder, NgForm, FormsModule  } from '@angular/forms';
import { DbService } from 'src/app/services/db.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  userid: string;
  routesubscription: Subscription;
  dbService: DbService
  constructor(private activatedRoute: ActivatedRoute,   dbService: DbService, private router: Router, private formsModule: FormsModule) {
    this.dbService = dbService;
  }

  ngOnInit(){
    this.routesubscription = this.activatedRoute.paramMap.subscribe(params => {
    this.userid = params.get('id');
    });
    }
  ngOnDestroy(){
    this.routesubscription.unsubscribe();
    }
}
