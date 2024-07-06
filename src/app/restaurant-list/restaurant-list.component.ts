import { Component, OnInit, ViewChild, viewChild } from '@angular/core';
import { Restaurant } from '../../shared/models/restaurant';
import { RestaurantService } from '../../services/restaurant.service';
import { Router } from '@angular/router';
import { debounceTime, distinctUntilChanged, map, Subscription, switchMap } from 'rxjs';
import { NgForm, NgModel } from '@angular/forms';

@Component({
  selector: 'app-restaurant-list',
  templateUrl: './restaurant-list.component.html',
  styleUrl: './restaurant-list.component.scss'
})
export class RestaurantListComponent implements OnInit{

  search: string = '';

  restaurants: Array<Restaurant> = [];

  @ViewChild('searchForm') 
  searchFrom: NgForm | undefined;

  constructor(private restaurantService: RestaurantService,
    private router: Router,
  ){

  }

  ngOnInit(){
    this.getData();
  }


  getData(){
    this.restaurantService.getList().pipe(map((response)=>{
      if(response && response.length){
        return this.transformResponse(response);
      }
      return response;
    })).subscribe((response)=>{
      this.restaurants = response;
    })
  }

  deleteClickHandler(restaurant: Restaurant){
    if(restaurant && restaurant.id){
      this.restaurantService.delete(restaurant.id);
    }
  }

  editClickHandler(restaurant: Restaurant){
    this.router.navigate(['restaurant',restaurant.id]);
  }

  transformResponse(response: Array<Restaurant>){
    response.forEach((oValue: Restaurant)=>{
      oValue._$$openFrom = this.transformDateToTimeString(oValue.openFrom);
      oValue._$$openTo = this.transformDateToTimeString(oValue.openTo);
    })
    return response;
  }

  transformDateToTimeString(date: Date){
    let dateString = date.toLocaleTimeString();
    return dateString.slice(0,5) + ' ' + dateString.slice(-2);
  }

  modelChanged(){
    this.restaurantService.filter(this.search).pipe()
  }

  ngAfterViewInit(){
    const formValue = this.searchFrom?.valueChanges;
    formValue?.pipe(
      map(data => data['search']),
      debounceTime(200),
      distinctUntilChanged(),
      switchMap(data => this.restaurantService.filter(data)),
      map((response)=>{
        if(response && response.length){
          return this.transformResponse(response);
        }
        return response;
    })
    ).subscribe(response=>{
      this.restaurants = response;
    })
      
  }
}
