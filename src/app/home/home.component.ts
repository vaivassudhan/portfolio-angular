import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }
  public sidebarShow: boolean = false;

  ngOnInit(): void {
    var height = (document.getElementById('profile'))!.offsetHeight;
    console.log(height)
    // document.getElementById('content')!.style.height=height+100+"px";

  }
  
  sidebartog(){
    this.sidebarShow = !this.sidebarShow;
    if(this.sidebarShow){
      document.getElementById('content')!.style.zIndex = "-1";
    }
    else{
      document.getElementById('content')!.style.zIndex = "1";
    }
  }
  exit(){
    this.sidebarShow = false;
    document.getElementById('content')!.style.zIndex = "1";
  }

}
