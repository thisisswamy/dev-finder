import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Router } from '@angular/router';
import { state } from '@angular/animations';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {

  jobPostList: any[] = [];
  jobsCollection:any=[] 
  errorMessege!:boolean;
  hasDeleteClicked!:boolean;
  isContentLoaded:boolean=true;
  seletedPostObj:any;
  page:number=1;
  count:number=0;
  noPosts:number=6;
  
  searchText:string ="";
  constructor(private http:HttpClient,private router:Router) { }
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
        this.jobsCollection.reverse()
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
  
  deletePost(obj:any){
    this.hasDeleteClicked=true;
    this.seletedPostObj=obj;
  }
  editPost(obj:any){
   this.router.navigate(['home/edit-post'],{ state: { pageTitle: "Edit Job Post",editObj:obj}} )
  }

  deleteConsent(){
    return new Promise((resolve,reject)=>{
      this.http.delete(environment.apiEndPoints.deleteJobPost+this.seletedPostObj.id).subscribe(data=>{
        this.jobsCollection = this.jobsCollection.filter((data:any)=> data.id !=this.seletedPostObj.id);
        this.hasDeleteClicked=false;
        resolve(data)
      })
    })
  }
  cancelDelete(){
    this.hasDeleteClicked=false;
  }
  onPostDataChange(event:any){
    this.page=event;
    this.getAllPosts()
  }
  onPostsSizeChange(event:any){
    this.noPosts=event.target.value;
    this.page=1;
    this.getAllPosts()
  }
  

}
