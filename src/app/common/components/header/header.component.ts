import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  title:string=`{ Dev-Finder }`
  isMenuOpen!:boolean;
  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  openMenu(){
    this.isMenuOpen = this.isMenuOpen ? false : true;
    
  }
  closeMenuByEvents(event:any){
    if(event.target.tagName=='A'){ 
      this.isMenuOpen=false;
    }

  }
  addPost(){
    this.router.navigate(['home/add-post'],{ state: { pageTitle: "Add Job Post" } })
  }

}
