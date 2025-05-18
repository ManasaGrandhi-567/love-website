import * as THREE from 'https://cdn.jsdelivr.net/npm/three@0.153.0/build/three.module.js';

// 3D Heart Animation using Three.js

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / 400, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
renderer.setSize(window.innerWidth, 400);
document.getElementById('heart3d').appendChild(renderer.domElement);

// Heart shape
const x = 0, y = 0;
const heartShape = new THREE.Shape();
heartShape.moveTo(x + 5, y + 5);
heartShape.bezierCurveTo(x + 5, y + 5, x + 4, y, x, y);
heartShape.bezierCurveTo(x - 6, y, x - 6, y + 7, x - 6, y + 7);
heartShape.bezierCurveTo(x - 6, y + 11, x - 3, y + 15.4, x + 5, y + 19);
heartShape.bezierCurveTo(x + 12, y + 15.4, x + 16, y + 11, x + 16, y + 7);
heartShape.bezierCurveTo(x + 16, y + 7, x + 16, y, x + 10, y);
heartShape.bezierCurveTo(x + 7, y, x + 5, y + 5, x + 5, y + 5);

const geometry = new THREE.ExtrudeGeometry(heartShape, {
    depth: 2,
    bevelEnabled: true,
    bevelThickness: 1,
    bevelSize: 1,
    bevelSegments: 2
});
const material = new THREE.MeshPhongMaterial({ color: 0xff3366, shininess: 100 });
const heart = new THREE.Mesh(geometry, material);
scene.add(heart);

// Lighting
const light = new THREE.PointLight(0xffffff, 1, 100);
light.position.set(10, 20, 20);
scene.add(light);

camera.position.z = 30;

function animate() {
    requestAnimationFrame(animate);
    heart.rotation.y += 0.01;
    heart.rotation.x += 0.005;
    renderer.render(scene, camera);
}
animate();

window.addEventListener('resize', () => {
    renderer.setSize(window.innerWidth, 400);
    camera.aspect = window.innerWidth / 400;
    camera.updateProjectionMatrix();
});