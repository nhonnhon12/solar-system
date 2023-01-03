// Sun Light is a Point Light

function SunLight(scene) {
  const color = 0xffffff;
  const intensity = 0.2;
  const sunLight = new THREE.PointLight(color, intensity);
  sunLight.position.set(0, 0, 0);
  sunLight.castShadow = true;
  sunLight.shadow.mapSize.height = 1024;
  sunLight.shadow.mapSize.width = 1024;
  sunLight.shadowDarkness = 0.5;

  const intensity2 = 0.5;
  const sunLight2 = new THREE.PointLight(color, intensity2);
  sunLight2.position.set(0, 0, 0);

  scene.add(sunLight);
  scene.add(sunLight2);

  this.update = function () {
    // do something
  };
}
