import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RestaurantService } from '../../services/restaurant.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-restaurant-edit',
  templateUrl: './restaurant-edit.component.html',
  styleUrl: './restaurant-edit.component.scss'
})
export class RestaurantEditComponent implements OnInit{

  baseForm: any; 

  constructor(private fb: FormBuilder,
    private restaurantService: RestaurantService,
    private route: ActivatedRoute
  ){
    this.createForm();
  }

  ngOnInit(){
    this.route.params.subscribe((param)=>{
      if(param['id']){
        this.getById(param['id']);
      }
    })
  }

  createForm(){
    this.baseForm = this.fb.group({
      id: [''],
      name: ['', Validators.required],
      street: ['', Validators.required],
      city: ['', Validators.required],
      state: ['', Validators.required],
      country: ['', Validators.required],
      openFrom: ['', Validators.required],
      openTo: ['', Validators.required],
      joiningDate: ['', Validators.required],
      description: ['', Validators.required],
    })
  }

  onSubmit(){
    if(this.isFormValid()){
      if(this.baseForm && this.baseForm.value && !this.baseForm.value.id){
        this.saveRestaurant();
      }else{
        this.updateRestaurant();
      }
    }
  }

  saveRestaurant() {
    this.restaurantService.save(this.baseForm.value).subscribe((response) => {
      if (response) {
        this.baseForm.reset(response);
      }
    });
  }

  updateRestaurant() {
    this.restaurantService.update(this.baseForm.value).subscribe((response) => {
      if (response) {
        this.baseForm.reset(response);
      }
    });
  }

  isFormValid(){
    return this.baseForm?.valid;
  }

  getById(id:string){
    this.restaurantService.getById(parseInt(id)).subscribe((response)=>{
      this.baseForm.reset(response)
    })
  }
}
