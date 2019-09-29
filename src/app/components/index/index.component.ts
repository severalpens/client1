import { Component, OnInit } from '@angular/core';
import { DbService } from 'src/app/services/db.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
  constructor(private dbService: DbService, private router: Router) {
   }

  ngOnInit() {
    localStorage.setItem('loggedIn','true');
    if(localStorage.getItem("loggedIn") == null || localStorage.getItem("loggedIn") == 'false'){
        localStorage.setItem('loggedIn','false');
        this.router.navigate(['/user' , true ]);
    }else{
      this.dbService.loggedIn = true;
      this.router.navigateByUrl('/account');
    }
  }

}
