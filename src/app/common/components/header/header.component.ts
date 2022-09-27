import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  title:string=`{ Dev-Finder }`
  isMenuOpen!:boolean;
  constructor() { }

  ngOnInit(): void {
  }
  openMenu(){
    this.isMenuOpen = this.isMenuOpen ? false : true;
    console.log(this.isMenuOpen);
    

  }
  closeMenu(){
    
  }

}
