/*
 class matrix
 represents 2d matrix. Used to rotate vectors.
 
 public methods
	rotate: calculates rotation matrix for given angle in 2d
******************************************************************/
function matrix() {
	this.p11 = 0; this.p21 = 0;
	this.p12 = 0; this.p22 = 0;
	
	// calculates rotation matrix for given angle
	this.rotate = function (angle) {
		if (typeof angle !== "number") throw new Error("Angle parameter must be number.");
		
		/*	| cos(a), sin(a) |
			|-sin(a), cos(a) |	*/
			
		this.p11 = this.p22 = Math.cos(angle);
		this.p21 = Math.sin(angle);
		this.p12 = -1.0 * this.p21;
		
		return this;
	};
};