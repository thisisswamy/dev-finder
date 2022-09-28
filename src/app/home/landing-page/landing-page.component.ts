import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {

  jobPostList: any[] = [];
  jobsCollection:any=[] 
  errorMessege!:boolean;
  isContentLoaded:boolean=true;
  
  searchText:string ="";
  constructor(private http:HttpClient) { }
  ngOnInit(): void {
    this.getAllPosts()
  }
  applyToJob(obj:any){
    alert(`You have successfully applied to the role ${obj.role}`)
  }

  getAllPosts(){
    return new Promise<any>((resolve,reject)=>{
      this.http.get(environment.apiEndPoints.getAllPost).subscribe((data:any)=>{
        this.jobPostList=data;
        this.jobsCollection=data
        console.log(this.jobPostList);
        this.isContentLoaded=false;
        this.errorMessege=false;
        resolve(data);
      },
      err=>{
        this.isContentLoaded=false;
        this.errorMessege=true;
        console.log(err);
        
      })
    })
  }
  search(){
    this.jobsCollection=this.jobPostList.filter(t=>t.role.toLowerCase().includes(this.searchText.toLowerCase()));
  }

}
