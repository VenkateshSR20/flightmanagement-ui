import { Component, OnInit } from '@angular/core';
import { FlightService } from '../flight.service';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {

  booking :any;
  constructor(private flightService : FlightService) { }

  ngOnInit() {
    this.booking = {
      userEntity : {userId:null},
      flightEntity: {id:null},
      travellingDate : null,
      financialInstrument : null,
      totalAmount : 0
    }
  }

  onSubmit(){
    this.flightService.saveBooking(this.booking,true)
    .subscribe(data =>console.log(), error => console.log(error));
  }
}
