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
  getUsers(){
    return this.http.get('http://localhost:8080/user/');
  }
  //getBooking, getCancelling - no need of new service
  getBooking(){
    return this.http.get('http://localhost:8080/getBooking/');
  }
  getCancelling(){
    return this.http.get('http://localhost:8080/getCancelling/');
  }
  createUser(user){
    return this.http.post('http://localhost:8080/user/create',user);
  }
  createFlight(flight){
    return this.http.post('http://localhost:8080/flight/create',flight);
  }
}
