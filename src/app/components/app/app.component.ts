import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder  } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'chat';
  constructor(private router: Router) {
  }

  ngOnInit() {
  }

  }
