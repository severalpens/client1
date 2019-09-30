import { Component, OnInit } from '@angular/core';
import { NgClass } from '@angular/common';
import { FormGroup, FormControl, FormBuilder, NgForm, FormsModule  } from '@angular/forms';
import { DbService } from 'src/app/services/db.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username = "super";
  password = "super1";
  showError: boolean;
  userid: string;
  routesubscription: Subscription;
  dbService: DbService;
  constructor(private activatedRoute: ActivatedRoute,   dbService: DbService, private router: Router, private formsModule: FormsModule) {
    this.dbService = dbService;

  }

  ngOnInit(){
      this.routesubscription = this.activatedRoute.paramMap.subscribe(params => {});
    }
  ngOnDestroy(){
    this.routesubscription.unsubscribe();
    }
  async login(){
    let result = await this.dbService.login(this.username, this.password);
    if(result.valid){
      localStorage.setItem("loggedInUser",result.username);
      this.router.navigateByUrl('/account')
    }
    else{
      this.showError = true;
    }
  }

}
