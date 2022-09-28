import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Router } from '@angular/router';

@Component({
  selector: 'app-job-post',
  templateUrl: './job-post.component.html',
  styleUrls: ['./job-post.component.scss']
})
export class JobPostComponent implements OnInit {

  constructor(private fb:FormBuilder,private http:HttpClient,private router:Router) { }

  jobPost=this.fb.group({
    role:['',[Validators.required]],
    companyName:['',[Validators.required]],
    salary:['',[Validators.required]],
    experience:['',[Validators.required]],
    skills:['',[Validators.required]],
  })
  ngOnInit(): void {
  }
  onSubmit(){
    if(this.jobPost.valid){
      let body={
        role:this.jobPost.get('role')?.value,
        companyName:this.jobPost.get('companyName')?.value,
        salary:this.jobPost.get('salary')?.value,
        experience:this.jobPost.get('experience')?.value,
        skills:this.jobPost.get('skills')?.value.split(","),
      }     
      return new Promise<any>((resolve,reject)=>{
        this.http.post(environment.apiEndPoints.addJobPost,body).subscribe(
            data=>{
              console.log("success fully added post");
              this.router.navigateByUrl("/").then(()=>{
                this.router.navigate(['home']);
              })
              resolve(data)
            
            },
            err=>{
              console.log(err);
              
            }
          )
      })
      console.log(body);
    }
    else{
      alert("Please fill form to proceed")
      return;
    }
    
  }
  onCancel(){
    this.router.navigateByUrl("/").then(()=>{
      this.router.navigate(['home']);
    })
  }

}
