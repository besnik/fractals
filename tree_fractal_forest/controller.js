/*
 class controller
 manages dependecies and events between components of fractal rendering
 ******************************************************************/
function controller(canvasId) {
	this.services = {};
	this.services.v = new view(canvasId);
	this.services.l = new logic();
	
	this.execute = function (fractals) {
		if (typeof fractals === "undefined") { throw new Error("Expecting array of fractal configuration to be rendered."); }
	
		var context = {};
		context.view = this.services.v;
		context.fractals = fractals;
		this.services.l.execute(context);
	};
};