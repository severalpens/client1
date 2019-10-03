import { Component, OnInit } from '@angular/core';
import { NgClass } from '@angular/common';
import { FormGroup, FormControl, FormBuilder, NgForm, FormsModule  } from '@angular/forms';
import { DbService } from 'src/app/services/db.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  showError: boolean;
  invalidName: boolean;
  registerForm: FormGroup;
  dbService: DbService;
  constructor(private activatedRoute: ActivatedRoute,   dbService: DbService, private router: Router, private formsModule: FormsModule) {
    this.dbService = dbService;

  }

  ngOnInit(){}

    onSubmit(f: NgForm) {
      // if(f.valid && f.value.password1 === f.value.password2 && this.dbService.nameCheck(f.value.username)){
      //   this.validateAndRegister(f)
      // }else{
      //   this.showError = true;
      // }
    }

    async validateAndRegister(frm: NgForm){
      // var validName = await this.dbService.nameCheck(frm.value.username);
      // if(!validName){
      //   this.invalidName = true;
      // }else{
      //   this.register(frm);
      // }
    }


  async register(f: NgForm){
  //   let result = await this.dbService.register(f.value.username, f.value.password1);
  //   if(result.valid){
  //     this.router.navigateByUrl('/account')
  //   }
  //   else{
  //     this.showError = true;
  //   }
  //   console.log(`LoginComponent.login(): ${result}`);
   }

}
