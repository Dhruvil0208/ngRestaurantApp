import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RestaurantListComponent } from './restaurant-list/restaurant-list.component';
import { RestaurantEditComponent } from './restaurant-edit/restaurant-edit.component';

const routes: Routes = [
  {path: '' , component: RestaurantListComponent},
  {path: 'restaurant/:id' , component: RestaurantEditComponent},
  {path: 'create' , component: RestaurantEditComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
