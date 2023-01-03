// Modal orbital distances, sizes and astrionomical bodies.
function SolarSystem(scene, time) {
    const loader = new THREE.TextureLoader();

    var astrionomicalBodies = [];

    // Create sun
    const solarSystem = new THREE.Group();
    scene.add(solarSystem);
    var sunMesh = createSun("sun", 40, scene, solarSystem, astrionomicalBodies, loader);

    // Create planets
    var mercuryOrbit = createOrbit(solarSystem);
    var mercuryMesh = createPlanet("mercury", 3, 60, scene, mercuryOrbit, astrionomicalBodies, loader);
    createOrbitLine(60, scene, astrionomicalBodies);

    var venusOrbit = createOrbit(solarSystem);
    var venusMesh = createPlanet("venus", 8, 80, scene, venusOrbit, astrionomicalBodies, loader);
    createOrbitLine(80, scene, astrionomicalBodies);

    var earthOrbit = createOrbit(solarSystem);
    var earthMesh = createPlanet("earth", 10, 110, scene, earthOrbit, astrionomicalBodies, loader);
    createOrbitLine(110, scene, astrionomicalBodies);

    var moonOrbit = createMoonOrbit(110, earthOrbit);
    var moonMesh = createPlanet("moon", 2, 18, scene, moonOrbit, astrionomicalBodies, loader);
    createOrbitLine(18, moonOrbit, astrionomicalBodies);

    var marsOrbit = createOrbit(solarSystem);
    var marsMesh = createPlanet("mars", 5, 150, scene, marsOrbit, astrionomicalBodies, loader);
    createOrbitLine(150, scene, astrionomicalBodies);

    var jupiterOrbit = createOrbit(solarSystem);
    var jupiterMesh = createPlanet("jupiter", 25, 220, scene, jupiterOrbit, astrionomicalBodies, loader);
    createOrbitLine(220, scene, astrionomicalBodies);

    var saturnOrbit = createOrbit(solarSystem);
    var saturnMesh = createPlanet("saturn", 17, 320, scene, saturnOrbit, astrionomicalBodies, loader);
    createOrbitLine(320, scene, astrionomicalBodies);

    // Saturns ring
    const innerRadius = 26;
    const outerRadius = 32;
    const thetaSegments = 60;
    const saturnBelt = new THREE.RingBufferGeometry(
        innerRadius, outerRadius, thetaSegments);
    const material = new THREE.MeshPhongMaterial({
        side: THREE.DoubleSide,
    });
    const mesh = new THREE.Mesh(saturnBelt, material);
    mesh.rotation.set(5,0,0);

    mesh.position.set(320, 0, 0);
    saturnOrbit.add(mesh);


    var uranusOrbit = createOrbit(solarSystem);
    var uranusMesh = createPlanet("uranus", 13, 420, scene, uranusOrbit, astrionomicalBodies, loader);
    createOrbitLine(420, scene, astrionomicalBodies);

    var neptuneOrbit = createOrbit(solarSystem);
    var neptuneMesh = createPlanet("neptune", 12, 500, scene, neptuneOrbit, astrionomicalBodies, loader);
    createOrbitLine(500, scene, astrionomicalBodies);


    this.update = function (time) {
        // rotate the planets
        sunMesh.rotation.y = time / 200 / 0.27;

        mercuryOrbit.rotation.y = time / 0.88; // rotate around the sun
        mercuryMesh.rotation.y = time / 200 / 14.076; // rotate the planet

        venusOrbit.rotation.y = time / 2.247;
        venusMesh.rotation.y = time / 200 / 2.43;

        earthOrbit.rotation.y = time / 1000 / 3.6525;
        earthMesh.rotation.y = time / 200 / 0.01;

        moonOrbit.rotation.y = time / 10 / 0.0273;
        moonMesh.rotation.y = time / 200 / 0.027;

        marsOrbit.rotation.y = time / 6.87;
        marsMesh.rotation.y = time / 200 / 0.012;

        jupiterOrbit.rotation.y = time / 43.326;
        jupiterMesh.rotation.y = time / 200 / 0.0041;

        saturnOrbit.rotation.y = time / 107.6;
        saturnMesh.rotation.y = time / 200 / 0.0044;

        uranusOrbit.rotation.y = time / 306.9;
        uranusMesh.rotation.y = time / 200 / -0.0072;

        neptuneOrbit.rotation.y = time / 601.9;
        neptuneMesh.rotation.y = time / 200 / 0.16;
    }

    this.getAstrionomicalBodies = function () {
        return astrionomicalBodies;
    }
}

function createOrbit() {
    const orbit = new THREE.Group();

    for (let i = 0, j = arguments.length; i < j; i++) {
        arguments[i].add(orbit);
    }

    return orbit;
}

function createMoonOrbit(distanceX) {
    const orbit = new THREE.Group();
    orbit.position.x = distanceX;

    for (let i = 0, j = arguments.length; i < j; i++) {
        if (i == 0) continue;
        arguments[i].add(orbit);
    }

    return orbit;
}

function createPlanet(name, size, distanceX, scene, orbit, astrionomicalBodies, loader) {
    var geometry = new THREE.SphereGeometry(size, 32, 16);

    let texturePath = "assets/textures/" + name + ".jpg";

    // Without callback
    var texture = loader.load(texturePath);

    var material = new THREE.MeshPhongMaterial({ map: texture });
    var planetMesh = new THREE.Mesh(geometry, material);

    planetMesh.position.set(distanceX, 0, 0);
    planetMesh.receiveShadow = true;
    planetMesh.castShadow = true;


    orbit.add(planetMesh);
    astrionomicalBodies.push(planetMesh);

    return planetMesh;
}

function createSun(name, size, scene, orbit, astrionomicalBodies, loader) {
    var geometry = new THREE.SphereGeometry(size, 32, 16);

    let texturePath = "assets/textures/" + name + ".jpg";

    // Without callback
    var texture = loader.load(texturePath);
    var material = new THREE.MeshBasicMaterial({ map: texture });
    var sunMesh = new THREE.Mesh(geometry, material);

    orbit.add(sunMesh);
    astrionomicalBodies.push(sunMesh);

    return sunMesh;
}

function createOrbitLine(distanceX, scene, astrionomicalBodies) {
    const innerRadius = distanceX;
    const outerRadius = distanceX + 1;
    const thetaSegments = 80;
    const geometry = new THREE.RingBufferGeometry(innerRadius, outerRadius, thetaSegments);
    const material = new THREE.MeshBasicMaterial({
        color: 0xf5e96c,
        opacity: 0.3,
        transparent: true,
        side: THREE.DoubleSide
    });
    var mesh = new THREE.Mesh(geometry, material);
    mesh.rotation.x = Math.PI / 2;
    scene.add(mesh);
}