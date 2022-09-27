import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { JobPostComponent } from './job-post/job-post.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    LandingPageComponent,
    JobPostComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    FormsModule
  ]
})
export class HomeModule { }
