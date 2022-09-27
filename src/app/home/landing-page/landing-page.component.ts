import { Component, OnInit } from '@angular/core';

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
        "Java","Python","JS"
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
  constructor() { }
  ngOnInit(): void {
  }
  applyToJob(obj:any){
    alert(`You have successfully applied to the role ${obj.role}`)
  }

}
