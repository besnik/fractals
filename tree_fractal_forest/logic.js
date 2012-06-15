/*
 class logic
 represents fractal logic
 
 public methods
	execute: calculates and draws fractal
*******************************************************************/
function logic() {
	
	// calculates and draws fractals
	this.execute = function(context) {
		var fractals = context.fractals;
		var items = fractals.items;
		
		// clear canvas
		context.view.clear();
		
		// paint background
		if (typeof fractals.gradient !== "undefined") {	context.view.drawGradient(fractals.gradient); }
	
		// iterate through array of fractals and calculate+draw them
		for (var i = 0; i < items.length; i++) {
			this.calculateFractal(context, items[i]);
		};
	};
	
	// calculates and draws single fractal
	this.calculateFractal = function (context, fractal) {
		// start point
		var startPoint = fractal.startPoint;
		// start move vector (normalized vector * length)
		var direction = fractal.startDirection.multiply(fractal.branchLength);
		
		// calculate rotation matrixs for left and right child
		var mr = new matrix();
		mr.rotate(fractal.angle);
		var ml = new matrix();
		ml.rotate(-1.0 * fractal.angle);
		fractal.matrix = { left: ml, right: mr };
		
		// set color of the fractal
		context.view.setStrokeStyle(fractal.color);
		
		// start recursion
		this.iterate(context, startPoint, direction, 1, fractal);
	};
	
	// tree traversal - depth search first using recursion
	this.iterate = function (context, startPoint, direction, depth, fractal) {
		if (depth > fractal.maxDepth) { return; } // stop recursion
		
		var matrix = fractal.matrix; // rotation matrix
		var branchShortage = fractal.branchShortage;
		var view = context.view;
		
		// calculate end point and draw line
		var endPoint = startPoint.add(direction);
		view.line(startPoint, endPoint);
		
		// recursion for children
		var newDepth = depth + 1;
		
		// right
		var rightDirection = direction.rotate(matrix.right).multiply(branchShortage);
		this.iterate(context, endPoint, rightDirection, newDepth, fractal);
		
		// left
		var leftDirection = direction.rotate(matrix.left).multiply(branchShortage);
		this.iterate(context, endPoint, leftDirection, newDepth, fractal);
	};
};

