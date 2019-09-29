import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder  } from '@angular/forms';
import { DbService } from 'src/app/services/db.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'chat';
  constructor(private dbService: DbService, private router: Router) {
  }

  ngOnInit() {
    if(sessionStorage.getItem("loggedIn") == null || sessionStorage.getItem("loggedIn") == 'false'){
        sessionStorage.setItem('loggedIn','false');
        this.router.navigate(['/login']);
    }else{
      this.dbService.loggedIn = true;
      this.router.navigateByUrl('/account');
    }
  }

  }
