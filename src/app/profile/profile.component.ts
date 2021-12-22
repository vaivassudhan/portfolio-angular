import { animate, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {

  public mySkills=[
    {"name":"Java","percentage":"90%"},
    {"name":"Python","percentage": "85%"},
    {"name":"JavaScript","percentage": "80%"},
    {"name":"MEAN Stack","percentage": "75%"},
    {"name":"MongoDB, MySQL","percentage": "80%"},
    {"name":"UI & UX","percentage": "75%"},
  ]
  public knowledge=["Cloud ","API","Networking (Core)","Internet of Things (IoT)","Blockchain"]
  constructor() { }

  ngOnInit(): void {
  }

}
