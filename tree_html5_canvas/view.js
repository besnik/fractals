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

	// initializes view
	this.init = function (canvasId) {
		this.canvas = $("#" + canvasId);
		this.c = this.canvas.get(0).getContext("2d");
	};
	
	// clears canvas
	this.clear = function () {
		this.c.clearRect(0, 0, this.canvas.width(), this.canvas.height()); // width and height are from jquery
	};
	
	// draws line
	this.line = function (from, to) {
		var c = this.c;
		
		c.strokeStyle = "#00F";
		c.lineWidth = 1;
		
		c.beginPath();
		c.moveTo(from.x, from.y);
		c.lineTo(to.x, to.y);
		c.closePath();
		c.stroke();
	};
	
	// call init during constructing of the object
	this.init(canvasId);
}