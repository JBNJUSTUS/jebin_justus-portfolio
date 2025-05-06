import * as THREE from './three/three.module.js';
import { GLTFLoader } from './three/GLTFLoader.js';
import { OrbitControls } from './three/OrbitControls.js';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ antialias: true });

renderer.setSize(window.innerWidth, window.innerHeight);
document.getElementById('canvas-container').appendChild(renderer.domElement);

// Light
const light = new THREE.DirectionalLight(0xffffff, 1);
light.position.set(5, 10, 7.5);
scene.add(light);

// Controls
const controls = new OrbitControls(camera, renderer.domElement);

// Load Model
const loader = new GLTFLoader();
loader.load('models/project torroid propeller.GLB', gltf => {
  scene.add(gltf.scene);
}, undefined, error => {
  console.error(error);
});

camera.position.z = 5;

// Animate
function animate() {
  requestAnimationFrame(animate);
  controls.update();
  renderer.render(scene, camera);
}
animate();
