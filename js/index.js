import * as THREE from 'https://cdn.jsdelivr.net/npm/three@0.124/build/three.module.js'; 

import { OrbitControls } from 'https://cdn.jsdelivr.net/npm/three@0.124/examples/jsm/controls/OrbitControls.js'; 
// DATA IMPORT
let data = [
  {
      "Country":"Afghanistan",
      "Languages":"Pashto, Dari",
      "latitude":33.93911,
      "longitude":67.709953,
      "Region":"ASIA (EX. NEAR EAST)",
      "Population":31056997,
      "Area_sq_mi":647500,
      "GPD_per_capita":700.0,
      "Climate":"1"
  },
  {
      "Country":"Albania",
      "Languages":"Albanian",
      "latitude":41.153332,
      "longitude":20.168331,
      "Region":"EASTERN EUROPE",
      "Population":3581655,
      "Area_sq_mi":28748,
      "GPD_per_capita":4500.0,
      "Climate":"3"
  },
  {
      "Country":"Algeria",
      "Languages":"Arabic, Tamazight",
      "latitude":28.033886,
      "longitude":1.659626,
      "Region":"NORTHERN AFRICA",
      "Population":32930091,
      "Area_sq_mi":2381740,
      "GPD_per_capita":6000.0,
      "Climate":"1"
  },
 
  {
      "Country":"Kazakhstan",
      "Languages":"Kazakh, Russian",
      "latitude":48.019573,
      "longitude":66.923684,
      "Region":"C.W. OF IND. STATES",
      "Population":15233244,
      "Area_sq_mi":2717300,
      "GPD_per_capita":6300.0,
      "Climate":"4"
  },
  {
      "Country":"Kenya",
      "Languages":"English",
      "latitude":-0.023559,
      "longitude":37.906193,
      "Region":"SUB-SAHARAN AFRICA",
      "Population":34707817,
      "Area_sq_mi":582650,
      "GPD_per_capita":1000.0,
      "Climate":"1,5"
  },
  {
      "Country":"Kiribati",
      "Languages":"English",
      "latitude":-3.370417,
      "longitude":-168.734039,
      "Region":"OCEANIA",
      "Population":105432,
      "Area_sq_mi":811,
      "GPD_per_capita":800.0,
      "Climate":"2"
  },
  
  {
      "Country":"Somalia",
      "Languages":"Arabic",
      "latitude":5.152149,
      "longitude":46.199616,
      "Region":"SUB-SAHARAN AFRICA",
      "Population":8863338,
      "Area_sq_mi":637657,
      "GPD_per_capita":500.0,
      "Climate":"1"
  },
  {
      "Country":"South Africa",
      "Languages":"Afrikaans, English, Southern Ndebele, Sotho, Northern Sotho, Swazi, Tsonga, Tswana, Venda, Xhosa, Zulu",
      "latitude":-30.559482,
      "longitude":22.937506,
      "Region":"SUB-SAHARAN AFRICA",
      "Population":44187637,
      "Area_sq_mi":1219912,
      "GPD_per_capita":10700.0,
      "Climate":"1"
  },
  {
      "Country":"Spain",
      "Languages":"Spanish",
      "latitude":40.463667,
      "longitude":-3.74922,
      "Region":"WESTERN EUROPE",
      "Population":40397842,
      "Area_sq_mi":504782,
      "GPD_per_capita":22000.0,
      "Climate":"3"
  },
  {
      "Country":"Sri Lanka",
      "Languages":"Sinhala, Tamil",
      "latitude":7.873054,
      "longitude":80.771797,
      "Region":"ASIA (EX. NEAR EAST)",
      "Population":20222240,
      "Area_sq_mi":65610,
      "GPD_per_capita":3700.0,
      "Climate":"2"
  },
  {
      "Country":"Sudan",
      "Languages":"Arabic, English",
      "latitude":12.862807,
      "longitude":30.217636,
      "Region":"SUB-SAHARAN AFRICA",
      "Population":41236378,
      "Area_sq_mi":2505810,
      "GPD_per_capita":1900.0,
      "Climate":"2"
  },
  {
      "Country":"Suriname",
      "Languages":"Dutch",
      "latitude":3.919305,
      "longitude":-56.027783,
      "Region":"LATIN AMER. & CARIB",
      "Population":439117,
      "Area_sq_mi":163270,
      "GPD_per_capita":4000.0,
      "Climate":"2"
  },
  {
      "Country":"Sweden",
      "Languages":"Swedish",
      "latitude":60.128161,
      "longitude":18.643501,
      "Region":"WESTERN EUROPE",
      "Population":9016596,
      "Area_sq_mi":449964,
      "GPD_per_capita":26800.0,
      "Climate":"3"
  },
  {
      "Country":"Switzerland",
      "Languages":"French ",
      "latitude":46.818188,
      "longitude":8.227512,
      "Region":"WESTERN EUROPE",
      "Population":7523934,
      "Area_sq_mi":41290,
      "GPD_per_capita":32700.0,
      "Climate":"3"
  },
  {
      "Country":"Syria",
      "Languages":"Arabic",
      "latitude":34.802075,
      "longitude":38.996815,
      "Region":"NEAR EAST",
      "Population":18881361,
      "Area_sq_mi":185180,
      "GPD_per_capita":3300.0,
      "Climate":"1"
  },
  {
      "Country":"Taiwan",
      "Languages":"Mandarin ",
      "latitude":23.69781,
      "longitude":120.960515,
      "Region":"ASIA (EX. NEAR EAST)",
      "Population":23036087,
      "Area_sq_mi":35980,
      "GPD_per_capita":23400.0,
      "Climate":"2"
  },
  {
      "Country":"Tajikistan",
      "Languages":"Tajik",
      "latitude":38.861034,
      "longitude":71.276093,
      "Region":"C.W. OF IND. STATES",
      "Population":7320815,
      "Area_sq_mi":143100,
      "GPD_per_capita":1000.0,
      "Climate":"2"
  },
  {
      "Country":"Tanzania",
      "Languages":"English",
      "latitude":-6.369028,
      "longitude":34.888822,
      "Region":"SUB-SAHARAN AFRICA",
      "Population":37445392,
      "Area_sq_mi":945087,
      "GPD_per_capita":600.0,
      "Climate":""
  },
  {
      "Country":"Thailand",
      "Languages":"Thai",
      "latitude":15.870032,
      "longitude":100.992541,
      "Region":"ASIA (EX. NEAR EAST)",
      "Population":64631595,
      "Area_sq_mi":514000,
      "GPD_per_capita":7400.0,
      "Climate":"2"
  },
  {
      "Country":"Togo",
      "Languages":"French",
      "latitude":8.619543,
      "longitude":0.824782,
      "Region":"SUB-SAHARAN AFRICA",
      "Population":5548702,
      "Area_sq_mi":56785,
      "GPD_per_capita":1500.0,
      "Climate":"2"
  },
  {
      "Country":"Tonga",
      "Languages":"English",
      "latitude":-21.178986,
      "longitude":-175.198242,
      "Region":"OCEANIA",
      "Population":114689,
      "Area_sq_mi":748,
      "GPD_per_capita":2200.0,
      "Climate":"2"
  },
  {
      "Country":"Trinidad & Tobago",
      "Languages":"English",
      "latitude":10.691803,
      "longitude":-61.222503,
      "Region":"LATIN AMER. & CARIB",
      "Population":1065842,
      "Area_sq_mi":5128,
      "GPD_per_capita":9500.0,
      "Climate":"2"
  },
  {
      "Country":"Tunisia",
      "Languages":"Arabic",
      "latitude":33.886917,
      "longitude":9.537499,
      "Region":"NORTHERN AFRICA",
      "Population":10175014,
      "Area_sq_mi":163610,
      "GPD_per_capita":6900.0,
      "Climate":"3"
  },
  {
      "Country":"Turkey",
      "Languages":"Turkish",
      "latitude":38.963745,
      "longitude":35.243322,
      "Region":"NEAR EAST",
      "Population":70413958,
      "Area_sq_mi":780580,
      "GPD_per_capita":6700.0,
      "Climate":"3"
  },
  {
      "Country":"Turkmenistan",
      "Languages":"Turkmen",
      "latitude":38.969719,
      "longitude":59.556278,
      "Region":"C.W. OF IND. STATES",
      "Population":5042920,
      "Area_sq_mi":488100,
      "GPD_per_capita":5800.0,
      "Climate":"1"
  },
  {
      "Country":"Tuvalu",
      "Languages":"English ",
      "latitude":-7.109535,
      "longitude":177.64933,
      "Region":"OCEANIA",
      "Population":11810,
      "Area_sq_mi":26,
      "GPD_per_capita":1100.0,
      "Climate":"2"
  },
  {
      "Country":"Uganda",
      "Languages":"English, Swahili",
      "latitude":1.373333,
      "longitude":32.290275,
      "Region":"SUB-SAHARAN AFRICA",
      "Population":28195754,
      "Area_sq_mi":236040,
      "GPD_per_capita":1400.0,
      "Climate":"2"
  },
  {
      "Country":"Ukraine",
      "Languages":"Ukrainian",
      "latitude":48.379433,
      "longitude":31.16558,
      "Region":"C.W. OF IND. STATES",
      "Population":46710816,
      "Area_sq_mi":603700,
      "GPD_per_capita":5400.0,
      "Climate":"3"
  },
  {
      "Country":"United Arab Emirates",
      "Languages":"Arabic",
      "latitude":23.424076,
      "longitude":53.847818,
      "Region":"NEAR EAST",
      "Population":2602713,
      "Area_sq_mi":82880,
      "GPD_per_capita":23200.0,
      "Climate":"1"
  },
  {
      "Country":"United Kingdom",
      "Languages":"English ",
      "latitude":55.378051,
      "longitude":-3.435973,
      "Region":"WESTERN EUROPE",
      "Population":60609153,
      "Area_sq_mi":244820,
      "GPD_per_capita":27700.0,
      "Climate":"3"
  },
  {
      "Country":"United States",
      "Languages":"English ",
      "latitude":37.09024,
      "longitude":-95.712891,
      "Region":"NORTHERN AMERICA",
      "Population":298444215,
      "Area_sq_mi":9631420,
      "GPD_per_capita":37800.0,
      "Climate":"3"
  },
  {
      "Country":"Uruguay",
      "Languages":"Spanish ",
      "latitude":-32.522779,
      "longitude":-55.765835,
      "Region":"LATIN AMER. & CARIB",
      "Population":3431932,
      "Area_sq_mi":176220,
      "GPD_per_capita":12800.0,
      "Climate":"3"
  },
  {
      "Country":"Uzbekistan",
      "Languages":"Uzbek",
      "latitude":41.377491,
      "longitude":64.585262,
      "Region":"C.W. OF IND. STATES",
      "Population":27307134,
      "Area_sq_mi":447400,
      "GPD_per_capita":1700.0,
      "Climate":"1"
  },
  {
      "Country":"Vanuatu",
      "Languages":"English, French",
      "latitude":-15.376706,
      "longitude":166.959158,
      "Region":"OCEANIA",
      "Population":208869,
      "Area_sq_mi":12200,
      "GPD_per_capita":2900.0,
      "Climate":"2"
  },
  {
      "Country":"Venezuela",
      "Languages":"Spanish, Venezuelan Sign Language",
      "latitude":6.42375,
      "longitude":-66.58973,
      "Region":"LATIN AMER. & CARIB",
      "Population":25730435,
      "Area_sq_mi":912050,
      "GPD_per_capita":4800.0,
      "Climate":"2"
  },
  {
      "Country":"Vietnam",
      "Languages":null,
      "latitude":14.058324,
      "longitude":108.277199,
      "Region":"ASIA (EX. NEAR EAST)",
      "Population":84402966,
      "Area_sq_mi":329560,
      "GPD_per_capita":2500.0,
      "Climate":"2"
  },
  {
      "Country":"Yemen",
      "Languages":"Arabic",
      "latitude":15.552727,
      "longitude":48.516388,
      "Region":"NEAR EAST",
      "Population":21456188,
      "Area_sq_mi":527970,
      "GPD_per_capita":800.0,
      "Climate":"1"
  },
  {
      "Country":"Zambia",
      "Languages":"English",
      "latitude":-13.133897,
      "longitude":27.849332,
      "Region":"SUB-SAHARAN AFRICA",
      "Population":11502010,
      "Area_sq_mi":752614,
      "GPD_per_capita":800.0,
      "Climate":"2"
  },
  {
      "Country":"Zimbabwe",
      "Languages":"Chewa, Chibarwe, English, Kalanga, Khoisan, Nambya, Ndau, Ndebele, Shangani, Shona, Sign language, Sotho, Tonga, Tswana, Venda, Xhosa",
      "latitude":-19.015438,
      "longitude":29.154857,
      "Region":"SUB-SAHARAN AFRICA",
      "Population":12236805,
      "Area_sq_mi":390580,
      "GPD_per_capita":1900.0,
      "Climate":"2"
  }
];


// THREEJS CODE

// CREATE scene where objects will be placed (kind of like a stage)
const scene = new THREE.Scene();

// CREATE camera to see objects (kind of like sitting in the audience)
const camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000);

// CREATE renderer to display the created objects (kind of like the people who place the diferent sets on the stage)
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// CREATE controls so that we can interact with the objects/have interactivity
const controls = new OrbitControls(camera, renderer.domElement);
// var controls = new THREE.TrackballControls(camera);
// CREATE raycaster for mouse interaction
const raycaster = new THREE.Raycaster();

// CREATE vector2 for mouse and mobile x,y coordinates
const mouse = new THREE.Vector2();
const touch = new THREE.Vector2();

// CREATE earth
// Earthmap is used for the basic texture which has the various continents/countries/etc. on it
let earthMap = new THREE.TextureLoader().load('./IMAGES/earthmap4k.jpg');

// EarthBumpMap is used to give the texture some "depth" so it is more appealing on eyes and data visuals
let earthBumpMap = new THREE.TextureLoader().load('./IMAGES/earthbump4k.jpg');

// EarthSpecMap gies the earth some shininess to the environment, allowing reflectivity off of the lights
let earthSpecMap = new THREE.TextureLoader().load('./IMAGES/earthspec4k.jpg');

// Geometry is what the shape/size of the globe will be
let earthGeometry = new THREE.SphereGeometry( 10, 32, 32);

// Material is how the globe will look like
let earthMaterial = new THREE.MeshPhongMaterial({
    map: earthMap,
    bumpMap: earthBumpMap,
    bumpScale: 0.10,
    specularMap: earthSpecMap,
    specular: new THREE.Color('grey')
});

// Earth is the final product which ends up being rendered on scene, also is used as a grandparent for the points of interest
let earth = new THREE.Mesh(earthGeometry, earthMaterial);

// Add the earth to scene
scene.add( earth );

// Add clouds to the earth object
let earthCloudGeo = new THREE.SphereGeometry(10, 32, 32);

// Add cloud texture
let earthCloudsTexture = new THREE.TextureLoader().load('./IMAGES/earthhiresclouds4K.jpg');

// Add cloud material
let earthMaterialClouds = new THREE.MeshLambertMaterial({
    color: 0xffffff,
    map: earthCloudsTexture,
    transparent:true,
    opacity: 0.4
});

// Create final texture for clouds
let earthClouds = new THREE.Mesh(earthCloudGeo, earthMaterialClouds);

// Scale above the earth sphere mesh
earthClouds.scale.set( 1.015, 1.015, 1.015);

// Make child of the earth
earth.add( earthClouds ) 

// CREATE variable to store array of lights
let lights = [];

// CreateSkyBox allows the scene to have more attractiveness to it, in this case by having the blue starred images around Earth
function createSkyBox(scene) {
    const loader = new THREE.CubeTextureLoader();
    const texture = loader.load([
        './IMAGES/space_right.png',
        './IMAGES/space_left.png',
        './IMAGES/space_top.png',
        './IMAGES/space_bot.png',
        './IMAGES/space_front.png',
        './IMAGES/space_back.png'
    ])
    scene.background = texture;
};

// CreateLights is a function which creates the lights and adds them to the scene.
function createLights(scene){
    lights[0] = new THREE.PointLight("#004d99", .5, 0);
    lights[1] = new THREE.PointLight("#004d99", .5, 0);
    lights[2] = new THREE.PointLight("#004d99", .7, 0);
    lights[3] = new THREE.AmbientLight("#ffffff");

    lights[0].position.set(200, 0, -400);
    lights[1].position.set(200, 200, 400);
    lights[2].position.set(-200, -200, -50);

    scene.add(lights[0]);
    scene.add(lights[1]);
    scene.add(lights[2]);
    scene.add(lights[3]);
}

function addSceneObjects(scene) {
    createLights(scene);
    createSkyBox(scene);
}

// AddSceneObjects adds the items to the scene
addSceneObjects(scene);

// Change position so we can see the objects
camera.position.z = 20;

// Disable control function, so users do not zoom too far in or pan away from center
controls.minDistance = 12;
controls.maxDistance = 30;
controls.enablePan = false;
controls.update();
controls.saveState();

// Add event listeners so DOM knows what functions to use when objects/items are interacted with
window.addEventListener('resize', onWindowResize, false);
window.addEventListener('click', onWindowClick, false);
//window.addEventListener('touchstart', onTouch, false);

// Used for showing/hiding the instruction box
let hidden = false;
function hideInstructions(){
    hidden = !hidden;
    if(hidden){
        document.querySelector("#instruction-box").style.display = "none";
    } else {
        document.querySelector("#instruction-box").style.display = "flex";
    }
};

// let instructionClicker = document.getElementById("instructions");
// instructionClicker.addEventListener("click", hideInstructions, false);

// Resizes the window when it changes
function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
};

// Listens for the mouse to intersect object and when clicked returns the data to the inner html
function onWindowClick(event) {
    event.preventDefault();
    mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
    mouse.y = - (event.clientY / window.innerHeight) * 2 + 1;
    raycaster.setFromCamera(mouse, camera);

    let intersects = raycaster.intersectObjects(earthClouds.children);
    console.log(earthClouds.children)
    for (let i = 0; i < intersects.length; i++){
        document.querySelector("#region").innerText = "Region: " + intersects[0].object.userData.region;
        document.getElementById("region").style.color = intersects[0].object.userData.color;
        document.querySelector("#country-info").innerText = "Country: " + intersects[0].object.userData.country;
        document.querySelector("#language").innerText = "Language: " + intersects[0].object.userData.language;
        document.querySelector("#population").innerText = "Population: " + intersects[0].object.userData.population;
        document.querySelector("#area-sq-mi").innerText = "Area(mile^2): " + intersects[0].object.userData.area_sq_mi;
        document.querySelector("#gdp-per-capita").innerText = "GDP Per-Capita: " + intersects[0].object.userData.gdp_per_capita;
        document.querySelector("#climate").innerText = "Climate: " + intersects[0].object.userData.climate;
    }
    // const item = intersects[0];
    console.log(intersects)
    // let point = item.point;
    // let camDistance = camera.position.copy(point).normalize.multiplyScalar(camDistance);
};

// Allows for the scene to move and be interacted with
function animate() {
    requestAnimationFrame( animate );
    render();
	controls.update();
};

// Updates camera renderer
function render() {
    renderer.render( scene, camera );
    
};

// Removes the points of interest freeing up memory and space to have better performance
function removeChildren(){
    let destroy = earthClouds.children.length;
    while(destroy--) {
        earthClouds.remove(earthClouds.children[destroy].material.dispose())
        earthClouds.remove(earthClouds.children[destroy].geometry.dispose())
        earthClouds.remove(earthClouds.children[destroy])
    }
};

// Create and add coordinates for the globe
function addCountryCoord(earth, country, language, latitude, longitude, color, region, population, area_sq_mi, gdp_per_capita, climate){
    let pointOfInterest = new THREE.SphereGeometry( 0.3, 32, 32 );
   
    const cubeImg = new THREE.ImageUtils.loadTexture("./IMAGES/test.svg");


    // load a image resource
   
    // 
    let lat = latitude * (Math.PI/180);
    let lon = -longitude * (Math.PI/180);
    const radius = 10;
    const phi = (90-lat)*(Math.PI/180);
    const theta = (lon+180)*(Math.PI/180);

    // let material = new THREE.MeshBasicMaterial({
    //     color:color
    // });
    let cubeGeometry = new THREE.BoxGeometry( 1, 0.001, 1 );
    let material = new THREE.MeshPhongMaterial({
        map: cubeImg, 
        side:THREE.DoubleSide, 
        transparent: true, 
        opacity:1, 
        shading: THREE.SmoothShading, 
        shininess: 90, 
        specular: 0xFFFFFF
    });
    let mesh = new THREE.Mesh(
        cubeGeometry,
        material
    );
    
// material
    mesh.position.set(
        Math.cos(lat) * Math.cos(lon) * radius,
        Math.sin(lat) * radius,
        Math.cos(lat) * Math.sin(lon) * radius
    );

    mesh.rotation.set(0.0, -lon, lat-Math.PI*0.5);

    mesh.userData.country = country;
    mesh.userData.language = language;
    mesh.userData.color = color;
    mesh.userData.region = region;
    mesh.userData.population = population;
    mesh.userData.area_sq_mi = area_sq_mi;
    mesh.userData.gdp_per_capita = gdp_per_capita;
    mesh.userData.climate = climate;
    
    earthClouds.add(mesh)

};

// Variables to get information and change accordingly
// let countryInfo = document.getElementById("country");
// countryInfo.addEventListener("click", changeToCountry);
changeToCountry();
// Changes the information so data points can be seen
function changeToCountry() {
    // Show/hide needed and unneeded elements
   
    removeChildren();

    // Get the data from the JSON file
    for (let i = 0; i < data.length; i++){
        if(data[i].Region == 'ASIA (EX. NEAR EAST)'){
            addCountryCoord(earth, data[i].Country, data[i].Languages, data[i].latitude, data[i].longitude, 'yellow', data[i].Region, data[i].Population, data[i].Area_sq_mi, data[i].GPD_per_capita, data[i].Climate);
        } else if(data[i].Region == 'NEAR EAST'){
            addCountryCoord(earth, data[i].Country, data[i].Languages, data[i].latitude, data[i].longitude, 'orange', data[i].Region, data[i].Population, data[i].Area_sq_mi, data[i].GPD_per_capita, data[i].Climate);
        } else if(data[i].Region == 'NORTHERN AMERICA'){
            addCountryCoord(earth, data[i].Country, data[i].Languages, data[i].latitude, data[i].longitude, 'lightblue', data[i].Region, data[i].Population, data[i].Area_sq_mi, data[i].GPD_per_capita, data[i].Climate);
        } else if(data[i].Region == 'WESTERN EUROPE'){
            addCountryCoord(earth, data[i].Country, data[i].Languages, data[i].latitude, data[i].longitude, 'cyan', data[i].Region, data[i].Population, data[i].Area_sq_mi, data[i].GPD_per_capita, data[i].Climate);
        } else if(data[i].Region == 'EASTERN EUROPE'){
            addCountryCoord(earth, data[i].Country, data[i].Languages, data[i].latitude, data[i].longitude, 'red', data[i].Region, data[i].Population, data[i].Area_sq_mi, data[i].GPD_per_capita, data[i].Climate);
        } else if(data[i].Region == 'BALTICS'){
            addCountryCoord(earth, data[i].Country, data[i].Languages, data[i].latitude, data[i].longitude, 'purple', data[i].Region, data[i].Population, data[i].Area_sq_mi, data[i].GPD_per_capita, data[i].Climate);
        } else if(data[i].Region == 'C.W. OF IND. STATES'){
            addCountryCoord(earth, data[i].Country, data[i].Languages, data[i].latitude, data[i].longitude, 'orange', data[i].Region, data[i].Population, data[i].Area_sq_mi, data[i].GPD_per_capita, data[i].Climate);
        } else if(data[i].Region == 'NORTHERN AFRICA'){
            addCountryCoord(earth, data[i].Country, data[i].Languages, data[i].latitude, data[i].longitude, 'beige', data[i].Region, data[i].Population, data[i].Area_sq_mi, data[i].GPD_per_capita, data[i].Climate);
        } else if(data[i].Region == 'SUB-SAHARN AFRICA'){
            addCountryCoord(earth, data[i].Country, data[i].Languages, data[i].latitude, data[i].longitude, 'brown', data[i].Region, data[i].Population, data[i].Area_sq_mi, data[i].GPD_per_capita, data[i].Climate);
        } else if(data[i].Region == 'LATIN AMER. & CARIB'){
            addCountryCoord(earth, data[i].Country, data[i].Languages, data[i].latitude, data[i].longitude, 'gold', data[i].Region, data[i].Population, data[i].Area_sq_mi, data[i].GPD_per_capita, data[i].Climate);
        } else if(data[i].Region == 'OCEANIA'){
            addCountryCoord(earth, data[i].Country, data[i].Languages, data[i].latitude, data[i].longitude, 'lightgreen', data[i].Region, data[i].Population, data[i].Area_sq_mi, data[i].GPD_per_capita, data[i].Climate);
        }
    }
    
    document.getElementById("info-box").style.display = "flex";
};

// Call the animation function so scene is properly rendered
animate();