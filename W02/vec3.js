
Vec3 = function(x, y, z)
{
  this.x = x;
  this.y = y;
  this.z = z;
}

Vec3.prototype.add = function(v)
{
  this.x += v.x;
  this.y += v.y;
  this.z += v.z;
  return this;
}

Vec3.prototype.sum = function()
{
  return this.x + this.y + this.z;
}

Vec3.prototype.min = function()
{
  return Math.min(this.x, this.y, this.z);
}

Vec3.prototype.mid = function()
{
  var min = this.min();
  var max = this.max();
  if (this.x != min && this.x != max) return this.x;
  else if (this.y != min && this.y != max) return this.x;
  else if (this.z != min && this.z != max) return this.x;
}

Vec3.prototype.max = function()
{
  return Math.max(this.x, this.y, this.z);
}

function AreaOfTriangle( v0, v1, v2)
{
  return Math.abs((v0.x - v2.x) * (v1.y - v2.y) - (v1.x - v2.x) * (v0.y - v2.y)) / 2
}
