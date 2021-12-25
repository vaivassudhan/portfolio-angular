import { Component, OnInit } from '@angular/core';
import * as THREE from 'three';
@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  constructor() { }
  public navlist =["Projects"];
  public navselected = [true,false,false];
  
  ngOnInit(): void {
  }
  change(i: number){
    // make navselected array all value false
    for(let j=0;j<this.navselected.length;j++){
      this.navselected[j]=false;
    }
    this.navselected[i]=true;
    
  }
}
