import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ControllerService } from 'src/app/services/controller.service';
import { FormsModule } from '@angular/forms';
import { Member } from 'src/app/models/member';
import { NgClass } from '@angular/common';
import { FormGroup, FormControl, FormBuilder, NgForm  } from '@angular/forms';
import { DbService } from 'src/app/services/db.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-member',
  templateUrl: './member.component.html',
  styleUrls: ['./member.component.css']
})
export class MemberComponent implements OnInit {
  controllerService: ControllerService;
  currentSiteMember: String;
  constructor(private activatedRoute: ActivatedRoute,   controllerService: ControllerService, private router: Router, private formsModule: FormsModule) {
    this.controllerService = controllerService;
  }

  ngOnInit() {
    this.currentSiteMember = this.controllerService.currentSiteMember.name;
  }

}
