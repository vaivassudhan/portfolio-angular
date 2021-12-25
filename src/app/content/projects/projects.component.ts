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
      "description":"A centralised R&D web portal for Sona college. Currently has around 200 users and deployed on AWS EC2.",
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
      "description":"Built a web portal and mobile app to simplify the grievance redressal of employees of the Southern Railway.",
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
      "description":"App supported by Johns Hopkins University to guide people isolating at home after testing Covid-19 positive",
      "images":[
        {"class":"react-logo","src":"../../../assets/img/react.png"},
        {"class":"css-logo","src":"../../../assets/img/api.png"},

      ],
      "link":"researchportal.sonatech.ac.in"
    },

    {
      "title":"Car Monitoring System",
      "description":"Designed a Raspberry Pi-powered OBD-II car device that allows data from a car to be displayed on a mobile app.",
      "images":[
        {"class":"react-logo","src":"../../../assets/img/react.png"},
        {"class":"aws-logo","src":"../../../assets/img/firebase.png"},
        {"class":"aws-logo","src":"../../../assets/img/RPI.png"},
        // {"class":"node-logo","src":"../../../assets/img/node1.png"},
        // {"class":"mongodb-logo","src":"../../../assets/img/mongodb.png"},
        // {"class":"aws-logo","src":"../../../assets/img/aws.png"}
      ],
      "link":"researchportal.sonatech.ac.in"
    },
    {
      "title":"Team-Hiremee website",
      "description":"A portfolio website designed and developed for Team-Hiremee with PayPal payment gateway integration.",
      "images":[
        {"class":"html-logo","src":"../../../assets/img/html.png"},
        {"class":"css-logo","src":"../../../assets/img/css.png"},
        {"class":"js-logo","src":"../../../assets/img/js.png"},
        {"class":"aws-logo","src":"../../../assets/img/paypal.png"},
      ],
      "link":"researchportal.sonatech.ac.in"
    },
    {
      "title":"Chatbot",
      "description":"A Python based NLP chatbot to provide details about the college, developed for Sona college Admission cell using Wit AI.",
      "images":[
        {"class":"css-logo","src":"../../../assets/img/python.png"},
        {"class":"angular-logo","src":"../../../assets/img/sql.png"},
        {"class":"angular-logo","src":"../../../assets/img/wit.png"},
      ],
      "link":"researchportal.sonatech.ac.in"
    },
  
  ]
  ngOnInit(): void {
  }

}
