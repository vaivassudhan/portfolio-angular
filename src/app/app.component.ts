import { Component, OnInit } from '@angular/core';
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import * as dat from 'dat.gui'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'portfolio';
  public sidebarShow: boolean = false;
  ngOnInit(): void {
   
    // // Debug
    const gui = new dat.GUI()

    // // Canvas
    const canvas = document.getElementById("webgl")!

    // // Scene
    const scene = new THREE.Scene()

    // // Objects
    const geometry = new THREE.TorusGeometry( .7, .2, 16, 100 );

    // // Materials

    // const material = new THREE.MeshBasicMaterial()
    // material.color = new THREE.Color(0xff0000)

    // // // Mesh
    // const sphere = new THREE.Mesh(geometry,material)
    // scene.add(sphere)

    // // Lights

    const pointLight = new THREE.PointLight(0xffffff, 0.1)
    pointLight.position.x = 2
    pointLight.position.y = 3
    pointLight.position.z = 4
    scene.add(pointLight)

    /**
     * Sizes
     */
    const sizes = {
        width: window.innerWidth,
        height: window.innerHeight
    }

    window.addEventListener('resize', () =>
    {
        // Update sizes
        sizes.width = window.innerWidth
        sizes.height = window.innerHeight

        // Update camera
        camera.aspect = sizes.width / sizes.height
        camera.updateProjectionMatrix()

        // Update renderer
        renderer.setSize(sizes.width, sizes.height)
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    })

    /**
     * Camera
     */
    // Base camera
    const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 100)
    camera.position.x = 0
    camera.position.y = 0
    camera.position.z = 2
    scene.add(camera)

    // Controls

    /**
     * Renderer
     */
    const renderer = new THREE.WebGLRenderer({
        canvas: canvas!
    })
    renderer.setSize(sizes.width, sizes.height)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

    /**
     * Animate
     */
     const minispheregeometry = new THREE.SphereBufferGeometry(.03,20,20)
     const starmaterialw = new THREE.MeshBasicMaterial({
         color:'0xaaaaaa'
     })
     const minisphere:any=[];
     function addStar() {
       const minispherew = new THREE.Mesh(minispheregeometry,starmaterialw)
       const [x,y,z] =  Array(3).fill(1).map(()=>THREE.MathUtils.randFloat(-20,20))
       minispherew.position.set(x,y,z)
       scene.add(minispherew)
       minisphere.push(minispherew);
     }
     Array(1000).fill(1).forEach(addStar)
     function moveStar() {
       for(var i=0;i<1000;i++){
         let singleMiniSphere=minisphere[i];
         if(singleMiniSphere.position.z<=20)
         {singleMiniSphere.position.z+=0.01}
         else
         {singleMiniSphere.position.z=-20}
       }
     }
    const clock = new THREE.Clock()
    const tick = () =>
    {

        const elapsedTime = clock.getElapsedTime()

        // Update objects
        // sphere.rotation.y = .5 * elapsedTime

        // Update Orbital Controls
        // controls.update()
        moveStar();
        // Render
        renderer.render(scene, camera)

        // Call tick again on the next frame
        window.requestAnimationFrame(tick)
    }

    tick()
  }
  
}
