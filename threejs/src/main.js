import * as THREE from 'three'
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader.js';
import { MTLLoader } from 'three/examples/jsm/loaders/MTLLoader.js';


const renderer = new THREE.WebGLRenderer()
renderer.setSize(window.innerWidth, window.innerHeight)
document.body.appendChild(renderer.domElement)

const scene = new THREE.Scene()
scene.background = new THREE.Color(0x000000)

let aspecto = window.innerWidth / window.innerHeight
const camera = new THREE.PerspectiveCamera(
  40, //campo de visao vertical
  aspecto, //aspecto da imagem (Largura/Altura)
  0.1, //Plano proximo
  100//Plano distante
);
camera.position.z = 10

// const geometry = new THREE.BoxGeometry(20, 20, 20)
// const texture = new THREE.TextureLoader()
// 			.load('img/jason.jpg',animate);
// const material = new THREE.MeshBasicMaterial(
// 	{ map: texture });
// const cube = new THREE.Mesh(geometry, material)
// scene.add(cube)

 //Luz
 var light = new THREE.AmbientLight(0xffffff, 10);
 scene.add(light);

 //Ponto de Luz
 var plight = new THREE.PointLight(0xffff00, 100);
 plight.position.set(-1, 1, 0);
 scene.add(plight);

let model
const modelPath = 'img/'
const mtlFile = 'Capsule.mtl'
const objFile = 'Capsule.obj'

const manager = new THREE.LoadingManager();
manager.onProgress = function (item, loaded, total) {
  console.log(item, loaded, total);
};

const mtlLoader = new MTLLoader(manager);
const objLoader = new OBJLoader();

mtlLoader.setPath(modelPath)
  .load(mtlFile, (materials) => {
  materials.preload()
  objLoader.setMaterials(materials)
  objLoader.setPath(modelPath).load(objFile, (object) => {
    model = object
    model.scale.setScalar(.5)//redimensiona o objeto
    model.position.y=-.5
    model.position.x=.3
    model.rotation.x=.5
    scene.add(model)
    animate()
  })
})

function animate() {
  renderer.render(scene, camera)
  model.rotation.y += 0
  requestAnimationFrame(animate)
}

window.addEventListener('mousemove',event=>{
//   let wh = window.innerHeight
//   let my = event.clientY
//   if(model)  model.rotation.x += (my-wh/2)/wh/100
model.rotation.x = 1
model.rotation.y = 5
model.rotation.z += .5
})