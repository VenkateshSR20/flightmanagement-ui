import { Component, OnInit } from '@angular/core';
import { FlightService } from '../flight.service';

@Component({
  selector: 'app-flights',
  templateUrl: './flights.component.html',
  styleUrls: ['./flights.component.css'],
 // providers :[FlightService]
})
export class FlightsComponent implements OnInit {
  flights : any = [];
  flight : any={flightName:null};
  submitted = false;
  constructor(private flightService:FlightService) { }

  ngOnInit() {
    //this.flightService.getFlights().subscribe(
      //(res) => {
        //console.log(res)
        //this.flights = res;
      //});
      this.getFlight();
  }

  getFlight(){
    this.flightService.getFlights().subscribe(
      (res) => {
        console.log(res)
        this.flights = res;
      });
  }
  
  save() {
    this.flightService.createFlight(this.flight)
      .subscribe(data => this.getFlight(), error => console.log(error));

  }

  onsubmit() {
    this.submitted = true;
    this.save();
  }

}
