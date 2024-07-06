import { Injectable } from '@angular/core';
import { Restaurant } from '../shared/models/restaurant';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RestaurantService {

  restaurants: Array<Restaurant> =[
    {
      id:1,
      name:'Seven Eleven',
      street: 'G-1, Sunrise Park, Shahibaug',
      city:'Ahmedabad',
      state: 'Gujarat',
      country: 'India',
      openFrom: new Date("2024-07-06T05:30:00.141Z"),
      openTo: new Date("2024-07-06T14:30:00.166Z"),
      joiningDate: new Date("2023-12-31T18:30:00.000Z")
    },
    {
      id:2,
      name:'Shambhu`s Bar',
      street: '48/8, Bandra Kurla Complex, Bandra',
      city:'Mumbai',
      state: 'Maharashtra',
      country: 'India',
      openFrom: new Date("2024-07-06T05:30:00.141Z"),
      openTo: new Date("2024-07-06T14:30:00.166Z"),
      joiningDate: new Date("2023-12-31T18:30:00.000Z")
    },
    {
      id:3,
      name:'Waffle Joy',
      street: 'G-1, Sumel Complex, Shahpur',
      city:'Ahmedabad',
      state: 'Gujarat',
      country: 'India',
      openFrom: new Date("2024-07-06T05:30:00.141Z"),
      openTo: new Date("2024-07-06T14:30:00.166Z"),
      joiningDate: new Date("2023-12-31T18:30:00.000Z")
    },
    {
      id: 4,
      name: "Prabahth",
      street: "11/334, Sundar Nagar",
      city: "Sholapur",
      state: "Maharashtra",
      country: "India",
      openFrom: new Date("2024-07-06T05:30:00.141Z"),
      openTo: new Date("2024-07-06T14:30:00.166Z"),
      joiningDate: new Date("2023-12-31T18:30:00.000Z")
  }
]
  constructor() { }

  getList():Observable<any>{
    return of(this.restaurants);
  }

  delete(id: number){
    let index = this.restaurants.findIndex((oValue)=> oValue.id === id);
    this.restaurants.splice(index,1);
  }

  save(value: Restaurant){
    value['id'] = this.restaurants.length + 1;
    this.restaurants.push(value);
    return of(value);
  }

  getById(id: number){
    let data = this.restaurants.find((oValue: Restaurant)=> oValue.id === id);
    return of(data);
  }

  update(value: Restaurant){
    let id = this.restaurants.findIndex((oValue: Restaurant)=> oValue.id === value.id)
    Object.assign(this.restaurants[id], value);
    return of(this.restaurants[id]);
  }

  filter(text:string){
    if(text){
      let filterData = this.restaurants.filter((oValue: Restaurant)=> oValue.name.toUpperCase().includes(text.toUpperCase()));
      return of(filterData);
    }
    return of(this.restaurants);
  }

}
