
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
  else if (this.y != min && this.y != max) return this.y;
  else if (this.z != min && this.z != max) return this.z;
}

Vec3.prototype.max = function()
{
  return Math.max(this.x, this.y, this.z);
}

Vec3.prototype.length = function()
{
  return Math.sqrt(this.x*this.x + this.y*this.y + this.z*this.z);
}

Vec3.prototype.sub = function(v)
{
  return new Vec3(this.x - v.x, this.y - v.y, this.z - v.z);
}

function AreaOfTriangle( v0, v1, v2)
{
  const len0 = v0.sub(v1).length();
  const len1 = v0.sub(v2).length();
  const len2 = v2.sub(v1).length();
  const s = (len0 + len1 + len2) / 2;
  return Math.round(Math.sqrt(s * (s - len0) * (s - len1) * (s - len2)) * 1000) / 1000;
}
