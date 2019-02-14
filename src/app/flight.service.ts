import { Injectable } from '@angular/core';
import { HttpClient } from  '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FlightService {

  constructor(private http:HttpClient) { }

  getFlights(){
    return this.http.get('http://localhost:8080/flight/');
  }
  //getBooking, getCancelling - no need of new service
}
