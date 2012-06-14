/*
 class logic
 represents fractal logic
 
 public methods
	execute: calculates and draws fractal
*******************************************************************/
function logic() {
	
	this.execute = function(context) {
		// clear canvas
		context.services.v.clear();
	
		// start point
		var startPoint = context.config.startPoint;
		// start move vector (normalized vector * length)
		var direction = context.config.startDirection.multiply(context.config.branchLength);
		
		// calculate rotation matrixs for left and right child
		var mr = new matrix();
		mr.rotate(context.config.angle);
		var ml = new matrix();
		ml.rotate(-1.0 * context.config.angle);
		context.config.matrix = { left: ml, right: mr };
		
		// start recursion
		this.iterate(context, startPoint, direction, 1);
	};
	
	// tree traversal - depth search first using recursion
	this.iterate = function (context, startPoint, direction, depth) {
		if (depth > context.config.maxDepth) { return; } // stop recursion
		
		var matrix = context.config.matrix; // rotation matrix
		var view = context.services.v;
		
		// calculate end point and draw line
		var endPoint = startPoint.add(direction);
		view.line(startPoint, endPoint);
		
		// recursion for children
		var newDepth = depth + 1;
		
		// right
		var rightDirection = direction.rotate(matrix.right).multiply(context.config.branchShortage);
		this.iterate(context, endPoint, rightDirection, newDepth);
		
		// left
		var leftDirection = direction.rotate(matrix.left).multiply(context.config.branchShortage);
		this.iterate(context, endPoint, leftDirection, newDepth);
	};
};

