const vehicleColors = [
  0xa52523,
  0xef2d56,
  0x0ad3ff,
  0xff9f1c /*0xa52523, 0xbdb638, 0x78b14b*/
];


function Car() {
  const car = new THREE.Group();

  const backWheel = Wheel();

  car.add(backWheel);
  backWheel.position.z = 6;
  backWheel.position.x = -18;


  // Frontwheel
  const frontWheel = Wheel();
  frontWheel.position.z = 6;
  frontWheel.position.x = 18;
  
  car.add(frontWheel);

  const main = new THREE.Mesh(
    new THREE.BoxBufferGeometry(60,30,15),
    new THREE.MeshLambertMaterial({color: pickRandom(vehicleColors)})
  );

  main.position.z = 12;
  car.add(main);

  const cabin = new THREE.Mesh(
    new THREE.BoxBufferGeometry(33,24,12),
    new THREE.MeshLambertMaterial({color: 0xffffff})
  );

  cabin.position.x = -6;
  cabin.position.z = 25.5;
  car.add(cabin);
  
  return car;
}

function Wheel() {
   const wheel = new THREE.Mesh(
    new THREE.BoxBufferGeometry(12, 33, 12),
    new THREE.MeshLambertMaterial({color: 0x333333})
  );
  wheel.position.z = 6;
  return wheel;
}

function pickRandom(array) {
  return array[Math.floor(Math.random() * array.length)];
}