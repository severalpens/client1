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
  constructor(private activatedRoute: ActivatedRoute,  private dbService: DbService, private router: Router, private formsModule: FormsModule) {
  }

  ngOnInit(){
    this.routesubscription = this.activatedRoute.paramMap.subscribe(params => {
    this.userid = params.get('id');
    });
    }
  ngOnDestroy(){
    this.routesubscription.unsubscribe();
    }
  async login(){
    let result = await this.dbService.login(this.username, this.password);
    if(result.valid){
      this.router.navigateByUrl('/account')
    }
    else{
      this.showError = true;
    }
    console.log(`LoginComponent.login(): ${result}`);
  }

}
