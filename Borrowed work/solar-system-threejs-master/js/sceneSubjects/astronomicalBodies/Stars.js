function Stars(scene) {
    var vertices = [];

    // Random Spread the stars all over the galaxy (canvas).
    var numPoints = 2000;
    for (var i = 0; i < numPoints; i++) {
        var x = THREE.MathUtils.randFloatSpread(2500);
        var y = THREE.MathUtils.randFloatSpread(2500);
        var z = THREE.MathUtils.randFloatSpread(2500);

        vertices.push(x, y, z);
    }
    
    // Star components.
    var geometry = new THREE.BufferGeometry();
    geometry.setAttribute('position', new THREE.Float32BufferAttribute(vertices, 3));

    var material = new THREE.PointsMaterial({
        color: 0xfffe7d,
        sizeAttenuation: false,
        size: 2,
    });

    var points = new THREE.Points(geometry, material);
    scene.add(points);

    this.update = function () {
        // do something
    }
}