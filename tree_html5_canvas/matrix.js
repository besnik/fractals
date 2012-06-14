/*
 class matrix
 represents 2d matrix. Used to rotate vectors.
 
 public methods
	rotate: calculates rotation matrix for given angle in 2d
******************************************************************/
function matrix() {
	this.p11 = 0; this.p21 = 0;
	this.p12 = 0; this.p22 = 0;
	
	// radian value of 1 degree to speed up conversion from deg to rad
	this.oneDegInRadConst = Math.PI / 180.0; 
	
	// calculates rotation matrix for given angle
	this.rotate = function (angle) {
		if (typeof angle !== "number") throw new Error("Angle parameter must be number.");
		
		// javascript trigonometry functions works with radians!
		var r = this.toRadians(angle);
		
		/*  rotation is defined as vector by matrix multiplication:
			( x,y ) * | cos(r), sin(r) | = ( [ x*cos(r) - y*sin(r) ], [ x*sin(r) + y*cos(r) ] ) = ( x', y' )
					  |-sin(r), cos(r) | 																		
		*/
			
		this.p11 = this.p22 = Math.cos(r);
		this.p21 = Math.sin(r);
		this.p12 = -this.p21;
		
		return this;
	};
	
	// converts deg to radians
	this.toRadians = function (deg) {
		return deg * this.oneDegInRadConst;
	};
};