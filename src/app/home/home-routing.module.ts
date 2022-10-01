import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { JobPostComponent } from './job-post/job-post.component';

const routes: Routes = [
  {
    path:'',component:LandingPageComponent
  },
  {
    path:'add-post',component:JobPostComponent
  },
  {
    path:'edit-post',component:JobPostComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
