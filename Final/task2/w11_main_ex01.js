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

function main()
{
    var volume = new KVS.CreateTornadoData( 64, 64, 64 );
    var screen = new KVS.THREEScreen();

    screen.init( volume );
    setup();
    screen.loop();

    function setup()
    {
        var color = new KVS.Vec3( 0, 0, 0 );
        var box = new KVS.BoundingBox();
        box.setColor( color );
        box.setWidth( 2 );

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
        console.log(lic_vol);

        var line1 = KVS.ToTHREELine( box.exec( volume ) );
        var line2 = KVS.ToTHREELine( line );
        screen.scene.add( line1 );
        screen.scene.add( line2 );
        screen.draw();

        document.addEventListener( 'mousemove', function() {
            screen.light.position.copy( screen.camera.position );
        });
    }
}
