import { Component, OnInit } from '@angular/core';
import { NgClass } from '@angular/common';
import { FormGroup, FormControl, FormBuilder, NgForm, FormsModule  } from '@angular/forms';
import { DbService } from 'src/app/services/db.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Hero } from '../../classes/classes';
@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {
  dbService: DbService;
  heroes: Hero[] = [];
  constructor( private activatedRoute: ActivatedRoute,   dbService: DbService, private router: Router, private formsModule: FormsModule) {
    this.dbService = dbService;
  }



  ngOnInit(): void {
    this.dbService.getHeroes()
      .subscribe(heroes => this.heroes = heroes.slice(1, 5));
  }

  gotoDetail(hero: Hero): void {
    const link = ['/detail', hero.id];
    this.router.navigate(link);
  }

}
