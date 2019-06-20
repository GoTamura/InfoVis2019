var COORDS_NUM = 64;
function randomVolume()
{
  var array = [];
  for (var i = 0; i < COORDS_NUM; i++) {
    for (var j = 0; j < COORDS_NUM; j++) {
      for (var k = 0; k < COORDS_NUM; k++) {
        array[COORDS_NUM*COORDS_NUM*i + COORDS_NUM*j + k] = Math.random();
      }
    }
  }
  return array;
}

function lic(streamline, volume)
{
  var randVol = randomVolume();
  var array = [];
  for (var i = 0; i < COORDS_NUM; i++) {
    for (var j = 0; j < COORDS_NUM; j++) {
      for (var k = 0; k < COORDS_NUM; k++) {
        var seed_point = new KVS.Vec3(k, j, i);
        streamline.setSeedPoint( seed_point );
        var line = streamline.exec(volume);
        var sum = 0;
        for (var l = 0; l < line.integration_time; l++) {
          sum = sum + randVol[COORDS_NUM*COORDS_NUM*line.coords[l].z + COORDS_NUM*line.coords[l].y + line.coords[l].x];
        }
        array[COORDS_NUM*COORDS_NUM*i + COORDS_NUM*j + k] = sum / line.integration_time;
      }
    }
  }
  var vol = new KVS.StructuredVolumeObject();
  vol.resolution = new KVS.Vec3(COORDS_NUM,COORDS_NUM,COORDS_NUM);
  vol.values = array;
  vol.updateMinMaxCoords();
  vol.updateMinMaxValues();
  return vol;
}

function lambert_main()
{
    var width = 500;
    var height = 500;

    var scene = new THREE.Scene();

    var fov = 45;
    var aspect = width / height;
    var near = 1;
    var far = 1000;
    var camera = new THREE.PerspectiveCamera( fov, aspect, near, far );
    camera.position.set( 0, 0, 5 );
    scene.add( camera );

    var light = new THREE.PointLight();
    light.position.set( 5, 5, 5 );
    scene.add( light );

    var renderer = new THREE.WebGLRenderer();
    renderer.setSize( width, height );
    renderer.debug.checkShaderErrors = true;
    document.body.appendChild( renderer.domElement );

    var volume = new KVS.CreateTornadoData( COORDS_NUM, COORDS_NUM, COORDS_NUM );
    var seed_point = volume.objectCenter();
    var streamline = new KVS.Streamline();
    streamline.setIntegrationStepLength( 1.0 );
    streamline.setIntegrationTime( 50 );
    streamline.setIntegrationMethod( KVS.RungeKutta4 );
    streamline.setIntegrationDirection( KVS.ForwardDirection );
    streamline.setLineWidth( 5 );
    streamline.setSeedPoint( seed_point );

    var line = streamline.exec(volume);
    var lic_vol = lic(streamline,volume);

    var geometry = new THREE.TorusKnotGeometry( 1, 0.3, 100, 20 );
    var material = new THREE.ShaderMaterial({
        vertexColors: THREE.VertexColors,
        vertexShader: document.getElementById('lambert.vert').text,
        fragmentShader: document.getElementById('lambert.frag').text,
        uniforms: {
          light_position: {type: 'v3', value: light.position}
        }
    });

    var torus_knot = new THREE.Mesh( geometry, material );
    scene.add( torus_knot );

    loop();

    function loop()
    {
        requestAnimationFrame( loop );
        torus_knot.rotation.x += 0.01;
        torus_knot.rotation.y += 0.01;
        renderer.render( scene, camera );
    }
}
