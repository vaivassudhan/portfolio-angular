import { animate, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
  // animations: [
  //   trigger('fade', [
  //     transition('void => *', [ 
  //       style({ opacity: 0 }),
  //       animate(2500, style({ opacity: 1 }))
  //     ])
  //   ])
  // ]
})
export class ProfileComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
