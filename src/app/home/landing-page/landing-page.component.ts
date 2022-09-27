import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {

  jobPostList:any[]=[
    {
      role:'Developer',
      firm:"Tcs",
      experience:'1+ yrs',
      skills:[
        "Java","Python","JS","HTML",
        
      ]
    },
    {
      role:'Tester',
      firm:"CTS",
      experience:'2+ yrs',
      skills:[
        "Java","Python","JS"
      ]
    },
    {
      role:'DevOps',
      firm:"Wipro",
      experience:'1+ yrs',
      skills:[
        "Java","Python","JS"
      ]
    },
    {
      role:'Data Scientist',
      firm:"Oracle",
      experience:'1+ yrs',
      skills:[
        "Java","Python","JS"
      ]
    },
    {
      role:'Spring Developer',
      firm:"NCR",
      experience:'1+ yrs',
      skills:[
        "Java","Python","JS"
      ]
    },
    {
      role:'Cloud Developer',
      firm:"AWS",
      experience:'1+ yrs',
      skills:[
        "Java","Python","JS"
      ]
    },
  ]
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
        resolve(data);
      },
      err=>{
        console.log(err);
        
      })
    })
  }

}
