function MyCameraControls(camera, canvas) {
    const controls = new THREE.OrbitControls(camera, canvas);    

    this.update = function () {
        controls.update();
    }

    // Zooming limitation
    controls.minDistance = 20;
    controls.maxDistance = 1000;
    //controls.zoomSpeed = 0.5;
}