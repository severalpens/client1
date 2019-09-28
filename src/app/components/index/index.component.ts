import { Component, OnInit } from '@angular/core';
import { DbService } from 'src/app/services/db.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
  dbService: DbService
  constructor(dbService: DbService) {
    this.dbService = dbService;
   }

  ngOnInit() {
    let svcLoggedIn =  this.dbService.loggedIn;
    let stgLoggedIn = localStorage.getItem("loggedIn");
    if(stgLoggedIn == null){
        localStorage.setItem('loggedIn',svcLoggedIn.toString());
    }
  }

}
