/*
 vector class
 represents 2D vector. methods produces new instances of vectors
 
 public methods
	multiply - manipulates length of the vector
	rotate - rotates vector over (0,0) using rotation matrix or given angle
******************************************************************/
function vector(x,y) {
	this.x = (typeof x === "number") ? x : 0;
	this.y = (typeof y === "number") ? y : 0;
	
	// multiplies vector by scalar
	this.multiply = function (scalar) {
		if (typeof scalar !== "number") throw new Error("Expecting scalar number");
		var nx = this.x * scalar;
		var ny = this.y * scalar;
		return new vector(nx,ny);
	};
	
	// rotates vector by given angle or matrix
	this.rotate = function (o) {
		if (typeof o === "number") { return this.rotateByAngle(o); }
		if (typeof o === "object") { return this.rotateByMatrix(o); }
		throw new Error("Input parameter must be either number (angle) or rotation matrix.");
	};
	
	// rotates vector by given transformation matrix
	this.rotateByMatrix = function (matrix) {
		var nx = (this.x * matrix.p11) + (this.y * matrix.p12);
		var ny = (this.y * matrix.p21) + (this.y * matrix.p22);
		return new vector(nx,ny);
	};
	
	// rotates vector by given angle
	this.rotateByAngle = function (angle) {
		var m = new matrix();
		m.rotate(angle); // set rotation matrix
		return this.rotateByMatrix(m);
	};
	
	// adds vector
	this.add = function(v) {
		return new vector(this.x + v.x, this.y + v.y);
	};
};