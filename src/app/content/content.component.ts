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
  
    // document.addEventListener('DOMContentLoaded',function(event){
    //   // array with texts to type in typewriter
    //   var dataText = [ "Ideathon 2021 Winner!","I Build MEAN Stack Apps","I Design Websites"];
      
    //   // type one text in the typwriter
    //   // keeps calling itself until the text is finished
    //   function typeWriter(text: string, i: number, fnCallback: { (): void; (...args: any[]): void; }) {
    //     // chekc if text isn't finished yet
    //     if (i < (text.length)) {
    //       // add next character to h1
    //       var dcq = document.getElementById("typetext")!;
    //       dcq.innerHTML = text.substring(0, i+1) +'<span aria-hidden="true"></span>';
    
    //       // wait for a while and call this function again for next character
    //       setTimeout(function() {
    //         typeWriter(text, i + 1, fnCallback)
    //       }, 100);
    //     }
    //     // text finished, call callback if there is a callback function
    //     else if (typeof fnCallback == 'function') {
    //       // call callback after timeout
    //       setTimeout(fnCallback, 700);
    //     }
    //   }
    //   // start a typewriter animation for a text in the dataText array
    //    function StartTextAnimation(i: number) {
    //      if (typeof dataText[i] == 'undefined'){
    //         setTimeout(function() {
    //           StartTextAnimation(0);
    //         }, 2000);
    //      }
    //      // check if dataText[i] exists
    //     if (i < dataText[i].length) {
    //       // text exists! start typewriter animation
    //      typeWriter(dataText[i], 0, function(){
    //        // after callback (and whole text has been animated), start next text
    //        StartTextAnimation(i + 1);
    //      });
    //     }
    //   }
    //   // start the text animation
    //   StartTextAnimation(0);
    // });
    // var scene = new THREE.Scene();
    // var camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 1000 );

    // var renderer = new THREE.WebGLRenderer();
    // var container = document.getElementById('container')!;
    // renderer.setSize( window.innerWidth, window.innerHeight/2 );
    // container.appendChild( renderer.domElement );
    

    // var geometry = new THREE.SphereGeometry( 1,64,64 );
    // var material = new THREE.MeshStandardMaterial();
    // var cube = new THREE.Mesh( geometry, material );
    // scene.add( cube );

    // camera.position.z = 5;

    // var animate = function () {
    //   requestAnimationFrame( animate );

    //   cube.rotation.x += 0.01;
    //   cube.rotation.y += 0.01;

    //   renderer.render( scene, camera );
    // };

    // animate();
  }
  tick() {
    throw new Error('Method not implemented.');
  }
  // tick() {
  //   throw new Error('Method not implemented.');
  // }

}
