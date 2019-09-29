import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, NgForm, FormsModule  } from '@angular/forms';
import { DbService } from 'src/app/services/db.service';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username = "super";
  password = "super1";

  constructor(private dbService: DbService, private router: Router, private formsModule: FormsModule) {

  }

  ngOnInit() {
  }

  login(){
    let result = this.dbService.login(this.username, this.password);
    console.log(`LoginComponent.login(): ${result}`);
  }

}
