import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  constructor() { }
  public Projects = [
    {
      "title":"R&D Portal",
      "description":"A Centralized portal to manage and record research projects, Publications and fundings of professors in Sona college.",
      "images":[
        {"class":"html-logo","src":"../../../assets/img/html.png"},
        {"class":"css-logo","src":"../../../assets/img/css.png"},
        {"class":"angular-logo","src":"../../../assets/img/angular.png"},
        {"class":"node-logo","src":"../../../assets/img/node1.png"},
        {"class":"mongodb-logo","src":"../../../assets/img/mongodb.png"},
        {"class":"aws-logo","src":"../../../assets/img/aws.png"}
      ],
      "link":"researchportal.sonatech.ac.in"
    },
    {
      "title":"Sahaayata",
      "description":"Web portal and mobile app to simplify the greivance redressal of employees of the Southern Railway Salem division.",
      "images":[
        {"class":"html-logo","src":"../../../assets/img/html.png"},
        {"class":"css-logo","src":"../../../assets/img/css.png"},
        {"class":"angular-logo","src":"../../../assets/img/angular.png"},
        {"class":"node-logo","src":"../../../assets/img/node1.png"},
        {"class":"mongodb-logo","src":"../../../assets/img/mongodb.png"},
      ],
      "link":"researchportal.sonatech.ac.in"
    },
    {
      "title":"Ideathon - Covicare",
      "description":"A mobile app to support and aid the self-quarantining patients by helping analyze healthy home quarantine routine.",
      "images":[
        {"class":"html-logo","src":"../../../assets/img/html.png"},
        {"class":"css-logo","src":"../../../assets/img/css.png"},
        {"class":"angular-logo","src":"../../../assets/img/angular.png"},
        {"class":"node-logo","src":"../../../assets/img/node1.png"},
        {"class":"mongodb-logo","src":"../../../assets/img/mongodb.png"},
      ],
      "link":"researchportal.sonatech.ac.in"
    },
    {
      "title":"R&D Portal",
      "description":"A Centralized portal to manage and record research projects, Publications and fundings of professors in Sona college.",
      "images":[
        {"class":"html-logo","src":"../../../assets/img/html.png"},
        {"class":"css-logo","src":"../../../assets/img/css.png"},
        {"class":"angular-logo","src":"../../../assets/img/angular.png"},
        {"class":"node-logo","src":"../../../assets/img/node1.png"},
        {"class":"mongodb-logo","src":"../../../assets/img/mongodb.png"},
        {"class":"aws-logo","src":"../../../assets/img/aws.png"}
      ],
      "link":"researchportal.sonatech.ac.in"
    },
    {
      "title":"Sahaayata",
      "description":"Web portal and mobile app to simplify the greivance redressal of employees of the Southern Railway Salem division.",
      "images":[
        {"class":"html-logo","src":"../../../assets/img/html.png"},
        {"class":"css-logo","src":"../../../assets/img/css.png"},
        {"class":"angular-logo","src":"../../../assets/img/angular.png"},
        {"class":"node-logo","src":"../../../assets/img/node1.png"},
        {"class":"mongodb-logo","src":"../../../assets/img/mongodb.png"},
      ],
      "link":"researchportal.sonatech.ac.in"
    },
    {
      "title":"Ideathon - Covicare",
      "description":"A mobile app to support and aid the self-quarantining patients by helping analyze healthy home quarantine routine.",
      "images":[
        {"class":"html-logo","src":"../../../assets/img/html.png"},
        {"class":"css-logo","src":"../../../assets/img/css.png"},
        {"class":"angular-logo","src":"../../../assets/img/angular.png"},
        {"class":"node-logo","src":"../../../assets/img/node1.png"},
        {"class":"mongodb-logo","src":"../../../assets/img/mongodb.png"},
      ],
      "link":"researchportal.sonatech.ac.in"
    },
    {
      "title":"R&D Portal",
      "description":"A Centralized portal to manage and record research projects, Publications and fundings of professors in Sona college.",
      "images":[
        {"class":"html-logo","src":"../../../assets/img/html.png"},
        {"class":"css-logo","src":"../../../assets/img/css.png"},
        {"class":"angular-logo","src":"../../../assets/img/angular.png"},
        {"class":"node-logo","src":"../../../assets/img/node1.png"},
        {"class":"mongodb-logo","src":"../../../assets/img/mongodb.png"},
        {"class":"aws-logo","src":"../../../assets/img/aws.png"}
      ],
      "link":"researchportal.sonatech.ac.in"
    },
    {
      "title":"Sahaayata",
      "description":"Web portal and mobile app to simplify the greivance redressal of employees of the Southern Railway Salem division.",
      "images":[
        {"class":"html-logo","src":"../../../assets/img/html.png"},
        {"class":"css-logo","src":"../../../assets/img/css.png"},
        {"class":"angular-logo","src":"../../../assets/img/angular.png"},
        {"class":"node-logo","src":"../../../assets/img/node1.png"},
        {"class":"mongodb-logo","src":"../../../assets/img/mongodb.png"},
      ],
      "link":"researchportal.sonatech.ac.in"
    },
    {
      "title":"Ideathon - Covicare",
      "description":"A mobile app to support and aid the self-quarantining patients by helping analyze healthy home quarantine routine.",
      "images":[
        {"class":"html-logo","src":"../../../assets/img/html.png"},
        {"class":"css-logo","src":"../../../assets/img/css.png"},
        {"class":"angular-logo","src":"../../../assets/img/angular.png"},
        {"class":"node-logo","src":"../../../assets/img/node1.png"},
        {"class":"mongodb-logo","src":"../../../assets/img/mongodb.png"},
      ],
      "link":"researchportal.sonatech.ac.in"
    },


  ]
  ngOnInit(): void {
  }

}
