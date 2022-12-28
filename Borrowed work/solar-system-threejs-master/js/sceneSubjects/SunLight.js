// Sun Light is a Point Light

function SunLight(scene) {
    const color = 0xFFFFFF;
    const intensity = 0.5;
    const sunLight = new THREE.PointLight(color, intensity);
    sunLight.position.set(0, 0, 0);

    scene.add(sunLight)

    this.update = function () {
        // do something
    }
}