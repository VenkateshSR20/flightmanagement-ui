import { Component, OnInit } from '@angular/core';
import { FlightService } from '../flight.service';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {

  booking :any;
  users :any;
  flights :any;
  constructor(private flightService : FlightService) { }

  ngOnInit() {
    this.booking = {
      userEntity : {userId:null},
      flightEntity: {id:null},
      travellingDate : null,
      financialInstrument : null,
      totalAmount : 0
    }
    this.getUsers();
    this.getFlights();
  }

  onSubmit(){
    this.flightService.saveBooking(this.booking,true)
    .subscribe(data =>console.log(), error => console.log(error));
  }

  getUsers(){
    this.flightService.getUsers()
    .subscribe(data =>this.users=data, error => console.log(error));
  }

  getFlights(){
    this.flightService.getFlights()
    .subscribe(data =>this.flights=data, error => console.log(error));
  }
}
