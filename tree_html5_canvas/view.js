/* 
 view class
 manages canvas, draws lines of fractal
 ctor params:
	ID of the canvas html element
	
 public methods:
	line: draws line
	clear: clears canvas
******************************************************************/
function view (canvasId) {
	this.canvas = null; // canvas jq element
	this.c = null; // holds 2d canvas context
	
	// clears canvas
	this.clear = function () {
		this.c.clearRect(0, 0, this.canvas.width(), this.canvas.height()); // width and height are from jquery
	};
	
	// fills whole canvas with gradient from start color to end color (from top to bottom)
	this.drawGradient = function (gradient) {
		if (typeof gradient === "undefined" || typeof gradient.stops === "undefined") { throw new Error("Gradient configuration with stops was not provided."); }
	
		var c = this.c;
		var canvas = this.canvas;
		var width = canvas.width();
		var height = canvas.height();
		var stops = gradient.stops;
		
		var g = c.createLinearGradient(0, 0, 0, height);
		
		for (var i = 0; i < stops.length; i++)
		{
			var s = stops[i];
			g.addColorStop(s.offset, s.color);
		};
		
		c.fillStyle = g;
		c.fillRect(0,0, width, height);
	};
	
	// sets color of the line. Valid values are the same like in css (e.g. "#FFF" or "rgb(255, 255, 255)"
	this.setStrokeStyle = function (strokeStyle) { this.c.strokeStyle = strokeStyle; }
	
	// sets width of the line. input parameter shall be integer.
	this.setLineWidth = function (lineWidth) { this.c.lineWidth = lineWidth; }
	
	// draws line
	this.line = function (from, to) {
		var c = this.c;

		c.beginPath();
		c.moveTo(from.x, from.y);
		c.lineTo(to.x, to.y);
		c.closePath();
		c.stroke();
	};
	
	// initializes view
	this.init = function (canvasId) {
		this.canvas = $("#" + canvasId);
		this.c = this.canvas.get(0).getContext("2d");
		
		// default painting settings
		this.setStrokeStyle("#000");
		this.setLineWidth(1);
	};
	
	// call init during constructing of the object
	this.init(canvasId);
}