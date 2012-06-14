/*
 class controller
 manages dependecies and events between components of fractal rendering
 ******************************************************************/
function controller(canvasId) {
	this.config = {
		maxDepth: 10,
		branchLength: 100,
		branchShortage: 0.7,
		angle: 30,
		startPoint: new vector(250, 450),
		startDirection: new vector(0,-1) // length = 1
	};
	
	this.services = {};
	this.services.v = new view(canvasId);
	this.services.l = new logic();
	
	this.execute = function() {
		this.services.l.execute(this);
	};
};