import { Component, OnInit } from '@angular/core';
import * as THREE from 'three';
@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  toRotate: any;
  el: any;
  loopNum!: number;
  period!: number;
  txt!: string;
  isDeleting!: boolean;

  constructor() { }

  ngOnInit(): void {
  }

}
