import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { CategoriesComponent } from './categories/categories.component';
import { SliderComponent } from './slider/slider.component';


@NgModule({
  declarations: [
    HomeComponent,
    CategoriesComponent,
    SliderComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
