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

  pageHeading='Add Job Post'
  editPostObj:any;
  constructor(private fb:FormBuilder,private http:HttpClient,private router:Router) { }

  jobPost=this.fb.group({
    role:['',[Validators.required]],
    companyName:['',[Validators.required]],
    salary:['',[Validators.required]],
    experience:['',[Validators.required]],
    skills:['',[Validators.required]],
  })
  ngOnInit(): void {
    const previousUrl = history.state.pageTitle ?? null;
    this.editPostObj=history.state.editObj??null;
    if (!previousUrl) {
      this.router.navigate(['home'])
    }else{
      this.pageHeading=history.state.pageTitle
      this.jobPost.patchValue(this.editPostObj)
    } 
  }
  onSubmit(){
    if(this.jobPost.valid && this.pageHeading.includes("Edit")){
      this.editPost()
    }
    if(this.jobPost.valid){
      let body={
        role:this.jobPost.get('role')?.value,
        companyName:this.jobPost.get('companyName')?.value,
        salary:this.jobPost.get('salary')?.value,
        experience:this.jobPost.get('experience')?.value,
        skills:this.jobPost.get('skills')?.value.toString().split(','),
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
  editPost(){ 
    let body={
      id:this.editPostObj.id,
      role:this.jobPost.get('role')?.value,
      companyName:this.jobPost.get('companyName')?.value,
      salary:this.jobPost.get('salary')?.value,
      experience:this.jobPost.get('experience')?.value,
      skills:this.jobPost.get('skills')?.value.toString().split(','),
    }
    return new Promise((resolve,reject)=>{
      this.http.put(environment.apiEndPoints.updateJobPost,body).subscribe(data=>{
        this.router.navigateByUrl("/").then(()=>{
          this.router.navigate(['home']);
        })
        resolve(data)
      })
    })
  }

}
