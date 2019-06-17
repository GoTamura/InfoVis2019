
varying vec3 point_color;
varying vec4 point_position;
varying vec3 normal_vector;
uniform vec3 light_position;
uniform vec3 camera_position;

vec3 PhongReflection( vec3 C, vec3 L, vec3 N, vec3 V )
{
  float ka = 0.3;
  float kd = 0.5;
  float ks = 0.8;
  float n = 50.0;
  vec3 R = reflect( -L, N );
  float dd = max( dot( N, L ), 0.0 );
  float ds = pow( max( dot( R, V ), 0.0 ), n );
  if ( dd <= 0.0 ) { ds = 0.0; }
  float Ia = ka;
  float Id = kd * dd;
  float Is = ks * ds;
  return C * ( Ia + Id + Is );
}

void main()
{
  point_position = modelViewMatrix * vec4( position, 1.0 );
  normal_vector = normalMatrix * normal;
  vec3 C = color;
  vec3 L = normalize( light_position - point_position.xyz );
  vec3 N = normalize( normal_vector );
  vec3 V = normalize( camera_position - point_position.xyz );
  point_color = PhongReflection( C, L, N, V );
  gl_Position = projectionMatrix * point_position;
}
