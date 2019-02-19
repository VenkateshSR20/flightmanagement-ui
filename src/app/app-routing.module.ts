import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FlightsComponent } from './flights/flights.component';
import { UsersComponent } from './user/users.component';

const routes: Routes = [
  {
    path :'flights',//this component we need to load
    component : FlightsComponent
  },
  {
    path : 'users',
    component : UsersComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
