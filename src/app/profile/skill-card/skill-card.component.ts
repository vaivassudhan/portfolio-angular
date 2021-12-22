import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skill-card',
  templateUrl: './skill-card.component.html',
  styleUrls: ['./skill-card.component.css']
})
export class SkillCardComponent implements OnInit {

  constructor() { }
  public mySkills=[
    {"name":"Java","percentage":"90%"},
    {"name":"Python","percentage": "85%"},
    {"name":"JavaScript","percentage": "80%"},
    {"name":"MEAN Stack","percentage": "75%"},
    {"name":"MongoDB, MySQL","percentage": "80%"},
    {"name":"UI & UX","percentage": "75%"},
  ]
  public knowledge=["Cloud ","API","Networking (Core)","Internet of Things (IoT)","Blockchain"]
  ngOnInit(): void {
  }

}
