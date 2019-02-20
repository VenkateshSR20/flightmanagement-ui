import { Component, OnInit } from '@angular/core';
//import { FlightService } from '../flight.service';
import { FlightService } from '../flight.service';

@Component({
  selector: 'app-flights',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
 // providers :[UserService]
})
export class UsersComponent implements OnInit {
  users : any = [];
  user : any ={userName:null};
  submitted = false;
  constructor(private userService:FlightService) { }

  ngOnInit() {
    this.getUser();
  }

  getUser(){
    this.userService.getUsers().subscribe(
      (res) => {
        console.log(res)
        this.users = res;
      });
  }
  
  save() {
    //console.log(this.user)
    this.userService.createUser(this.user)
      .subscribe(data => this.getUser(), error => console.log(error));
   // this.users = new this.users();
  }

  onSubmit() {
    this.submitted = true;
    this.save();
  }
}
