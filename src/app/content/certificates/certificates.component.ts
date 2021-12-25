import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-certificates',
  templateUrl: './certificates.component.html',
  styleUrls: ['./certificates.component.css']
})
export class CertificatesComponent implements OnInit {
  Certificates = [
    {"title":"Version Control with Git","issue":"Atlassian","issuedate":"Nov 2021","image":"../../../../assets/img/atlassian.png"},
    {"title":"Angular 8","issue":"Google","issuedate":"Nov 2020","image":"../../../assets/img/trinity.jpg"},]
  constructor() { }

  ngOnInit(): void {
  }

}
