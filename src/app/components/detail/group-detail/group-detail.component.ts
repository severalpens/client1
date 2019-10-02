import { Component, OnInit } from '@angular/core';
import { DbService } from 'src/app/services/db.service';
import { ActivatedRoute } from '@angular/router';
import { Group } from 'src/app/models/group';

@Component({
  selector: 'app-group-detail',
  templateUrl: './group-detail.component.html',
  styleUrls: ['./group-detail.component.css']
})
export class GroupDetailComponent implements OnInit {
  group: Group;
  constructor(
    private dbService: DbService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.group = new Group();
  }

  submit(){
    this.dbService.postGroup(this.group).subscribe(x => this.group = x);

  }


}
