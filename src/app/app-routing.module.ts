import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FlightsComponent } from './flights/flights.component';
import { UsersComponent } from './user/users.component';
import { BookingComponent } from './booking/booking.component';

const routes: Routes = [
  {
    path :'flights',//this component we need to load
    component : FlightsComponent
  },
  {
    path : 'users',
    component : UsersComponent
  },
  {
    path : 'booking',
    component : BookingComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
