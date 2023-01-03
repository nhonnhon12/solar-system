import * as THREE from "three";
import { SUN, MERCURY, VENUS, EARTH, MARS, JUPITER, SATURN, URANUS, NEPTUNE } from "./constant/objects.js";
import { sphereSegment } from "./constant/sphere.js";

const TimeRatio = 365 * 24 * 60 * 60
const radiusCal = (object) => {
  // return 2
  return 2 + object.radius * 1/50000;
}

const distantCal = (object) => {
  return object.index * 20 + object.distant * 35 + 5;
}

const locationCal = (object, time = 0) => {
  const distant = distantCal(object);
  const angle = (2 * Math.PI) * time / 60   ;
  const x = distant * Math.cos(angle);
  const y = distant * Math.sin(angle);
  return { x, y };
}

const node = document.getElementsByTagName("body")[0];

// Scene & Camera
const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
    );
camera.position.x = 100;
camera.position.y = 0;
camera.position.z = 1000;
camera.lookAt(0, 0, 0);

// Sun
const sunGeometry = new THREE.SphereGeometry(radiusCal(SUN), sphereSegment, sphereSegment);
const sunMaterial = new THREE.MeshBasicMaterial({ color: 0xffff00 });
const sun = new THREE.Mesh(sunGeometry, sunMaterial);
sun.position.x = distantCal(SUN);
sun.position.y = 0;
sun.position.z = 0;
scene.add(sun);

// Mercury
const mercuryGeometry = new THREE.SphereGeometry(radiusCal(MERCURY), sphereSegment, sphereSegment);
const mercuryMaterial = new THREE.MeshBasicMaterial({ color: 0x808080 });
const mercury = new THREE.Mesh(mercuryGeometry, mercuryMaterial);
mercury.position.x = distantCal(MERCURY);
mercury.position.y = 0;
mercury.position.z = 0;
scene.add(mercury);

// Venus
const venusGeometry = new THREE.SphereGeometry(radiusCal(VENUS), sphereSegment, sphereSegment);
const venusMaterial = new THREE.MeshBasicMaterial({ color: 0x808080 });
const venus = new THREE.Mesh(venusGeometry, venusMaterial);
venus.position.x = distantCal(VENUS);
venus.position.y = 0;
venus.position.z = 0;
scene.add(venus);

// Earth
const earthGeometry = new THREE.SphereGeometry(radiusCal(EARTH), sphereSegment, sphereSegment);
const earthMaterial = new THREE.MeshBasicMaterial({ color: 0x0000ff });
const earth = new THREE.Mesh(earthGeometry, earthMaterial);
earth.position.x = distantCal(EARTH);
earth.position.y = 0;
earth.position.z = 0;
scene.add(earth);

// Mars
const marsGeometry = new THREE.SphereGeometry(radiusCal(MARS), sphereSegment, sphereSegment);
const marsMaterial = new THREE.MeshBasicMaterial({ color: 0xff0000 });
const mars = new THREE.Mesh(marsGeometry, marsMaterial);
mars.position.x = distantCal(MARS);
mars.position.y = 0;
mars.position.z = 0;
scene.add(mars);

// Jupiter
const jupiterGeometry = new THREE.SphereGeometry(radiusCal(JUPITER), sphereSegment, sphereSegment);
const jupiterMaterial = new THREE.MeshBasicMaterial({ color: 0x808080 });
const jupiter = new THREE.Mesh(jupiterGeometry, jupiterMaterial);
jupiter.position.x = distantCal(JUPITER);
jupiter.position.y = 0;
jupiter.position.z = 0;
scene.add(jupiter);

// Saturn
const saturnGeometry = new THREE.SphereGeometry(radiusCal(SATURN), sphereSegment, sphereSegment);
const saturnMaterial = new THREE.MeshBasicMaterial({ color: 0x808080 });
const saturn = new THREE.Mesh(saturnGeometry, saturnMaterial);
saturn.position.x = distantCal(SATURN);
saturn.position.y = 0;
saturn.position.z = 0;
scene.add(saturn);

// Uranus
const uranusGeometry = new THREE.SphereGeometry(radiusCal(URANUS), sphereSegment, sphereSegment);
const uranusMaterial = new THREE.MeshBasicMaterial({ color: 0x808080 });
const uranus = new THREE.Mesh(uranusGeometry, uranusMaterial);
uranus.position.x = distantCal(URANUS);
uranus.position.y = 0;
uranus.position.z = 0;
scene.add(uranus);

// Neptune
const neptuneGeometry = new THREE.SphereGeometry(radiusCal(NEPTUNE), sphereSegment, sphereSegment);
const neptuneMaterial = new THREE.MeshBasicMaterial({ color: 0x808080 });
const neptune = new THREE.Mesh(neptuneGeometry, neptuneMaterial);
neptune.position.x = distantCal(NEPTUNE);
neptune.position.y = 0;
neptune.position.z = 0;
scene.add(neptune);

// Set up the renderer
const renderer = new THREE.WebGLRenderer({
  antialias: true,
  alpha: true,
});
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setClearColor(0x000000, 1);
document.body.appendChild(renderer.domElement);

// Ambient Light
var ambientLight = new THREE.AmbientLight(0xffffff, 0.2);
scene.add(ambientLight);

// animate
for (let i = 0; i < 60; i++) {
  console.log(locationCal(EARTH, i));
}

renderer.render(scene, camera);
