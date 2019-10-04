import { Component, OnInit } from '@angular/core';
import { NgClass } from '@angular/common';
import { FormGroup, FormControl, FormBuilder, NgForm, FormsModule  } from '@angular/forms';
import { DbService } from 'src/app/services/db.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ControllerService } from 'src/app/services/controller.service';
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
  error: boolean;
  constructor(private activatedRoute: ActivatedRoute, private  controllerService: ControllerService, private router: Router, private formsModule: FormsModule) {
  }

  ngOnInit(){
    }

  ngOnDestroy(){
    }

  login(){
    let result = this.controllerService.login(this.username, this.password);
    result.subscribe(
      (data:any) => {
        if(!data){
         this.error = true;
        }
      }
    )
  }

}
