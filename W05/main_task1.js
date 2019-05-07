function main()
{
      var scene = new THREE.Scene();
      var camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 1000 );

      var renderer = new THREE.WebGLRenderer();
      renderer.setSize( window.innerWidth, window.innerHeight );
      document.body.appendChild( renderer.domElement );
      
      var vertices = [
        [0, 0, 0], //0
        [0, 0, 1], //1
        [0, 1, 0], //2
        [0, 1, 1], //3
        [1, 0, 1], //4
        [1, 0, 0], //5
        [1, 1, 1], //6
        [1, 1, 0], //7
      ];

      var faces = [
        [0, 1, 2],
        [1, 3, 2], //0123
        [4, 5, 6],
        [5, 7, 6], //4567
        [0, 5, 1],
        [5, 4, 1], //0145
        [3, 6, 2],
        [6, 7, 2], //2367
        [5, 0, 2],
        [5, 2, 7],
        [1, 4, 3],
        [4, 6, 3],
      ];
    

      var geometry = new THREE.Geometry();
      for (let i = 0; i < vertices.length; ++i) {
        geometry.vertices.push(new THREE.Vector3().fromArray(vertices[i]));
      }
      for (let i = 0; i < faces.length; ++i) {
        geometry.faces.push(new THREE.Face3(faces[i][0], faces[i][1], faces[i][2]));
        geometry.faces[i].color = new THREE.Color(1, 0, 0);
      }

      var material = new THREE.MeshBasicMaterial();
      material.vertexColors = THREE.FaceColors;
      var cube = new THREE.Mesh( geometry, material );
      scene.add( cube );
      
      camera.position.z = 5;

      var animate = function () {
        requestAnimationFrame( animate );

        cube.rotation.x += 0.01;
        cube.rotation.y += 0.02;

        renderer.render( scene, camera );
      };

      document.addEventListener('mousedown', e => {
        let x_win = e.clientX;
        let y_win = e.clientY;

        let vx = renderer.domElement.offsetLeft;
        let vy = renderer.domElement.offsetTop;
        let vw = renderer.domElement.width;
        let vh = renderer.domElement.height;

        let x_NDC = 2 * (x_win - vx) / vw - 1;
        let y_NDC = - (2 * (y_win - vy) / vh - 1);

        let p_NDC = new THREE.Vector3(x_NDC, y_NDC, 1);
        let p_wld = p_NDC.unproject(camera);
        let origin = p_NDC;
        let direction = p_wld;

        let raycaster = new THREE.Raycaster(origin, direction);
        let intersects = raycaster.intersectObject(triangle);
        if (intersects.length > 0) {
          intersects[0].face.color.setRGB(0, 1, 0);
          intersects[0].object.geometry.colorsNeedUpdate = true;
        }
      });

      animate();
}

function pick_triangle(mouse_x, mouse_y, geometry) {
  let origin;
  let direction;
  let raycaster = new THREE.Raycaster(origin, direction);
  //for (let i = 0; i < geometry.faces.length; ++i) {
    let intersects = raycaster.intersectObject(geometry.faces);
    if (intersects.length > 0) {
      intersects[0].face.color.setRGB(0, 1, 0);
      intersects[0].object.geometry.colorsNeedUpdate = true;
    }
  //}
}
