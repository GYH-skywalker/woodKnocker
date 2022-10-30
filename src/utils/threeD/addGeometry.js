import * as THREE from "three";
import {addTransController, axisHelper, getScene} from "@/utils/threeD/index";


function addCube(){
    let scene = getScene()
    const size = Math.floor(Math.random() * 200) + 50
    const cubeGeo = new THREE.BoxGeometry(size,size,size)
    const color = "0x" + Math.floor(Math.random() * 0xffffff).toString(16).padEnd(6,'0')
    const material = new THREE.MeshBasicMaterial({color:parseInt(color)})
    const cubeMesh= new THREE.Mesh(cubeGeo,material)
    const x = Math.random() * 200 - 100
    const y = Math.random() * 200 - 100
    const z = Math.random() * 100 - 50
    cubeMesh.position.set(x,y,z)
    cubeMesh.name="test"
    scene.add(cubeMesh)
}
function addSphere(){
    let scene = getScene()
    const size = Math.floor(Math.random() * 200) + 50
    const sphereGeo = new THREE.SphereGeometry(100,100,100)
    const color = "0x" + Math.floor(Math.random() * 0xffffff).toString(16).padEnd(6,'0')
    console.log(color);
    const material = new THREE.MeshBasicMaterial({color:parseInt(color)})
    const cubeMesh= new THREE.Mesh(sphereGeo,material)
    // const x = Math.random() * 200 - 100
    // const y = Math.random() * 200 - 100
    // const z = Math.random() * 100 - 50
    cubeMesh.position.set(0,0,0)
    cubeMesh.name="test"
    scene.add(cubeMesh)
}

function addCylinder(){
    let scene = getScene()
    const geometry = new THREE.CylinderGeometry( 1, 3, 400, 64 );
    const material = new THREE.MeshBasicMaterial( {color: 0xff0000} );
    const cylinder = new THREE.Mesh( geometry, material );
    cylinder.position.set(100,100,100)
    cylinder.rotation.set(-180,0,-120)
    console.log(cylinder);
    addTransController(cylinder)
    scene.add( cylinder );
}


export {
    addCube,
    addSphere,
    addCylinder
}