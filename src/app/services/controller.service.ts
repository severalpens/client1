import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ControllerService {
 users: {
  super: "super1",
  admin: "admin1",
}

  constructor() { }
}
