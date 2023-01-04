// Sun Light is a Point Light

function SunLight(scene) {
  const color = 0xffffff;
  const intensity = 0.5;
  const sunLight = new THREE.PointLight(color, intensity);
  sunLight.position.set(0, 0, 0);
  sunLight.castShadow = true;
  sunLight.shadow.mapSize.width = 1024;
  sunLight.shadow.mapSize.height = 1024;

  scene.add(sunLight);

  this.update = function () {
    // do something
  };
}
