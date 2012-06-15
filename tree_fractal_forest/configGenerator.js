/*
 configGenerator class
 generates array of tree fractals configuration
 
 public methods
	generate: generate array of fracal configuraiton
******************************************************************/
function generator() {
	this.defaultConfig = {
		items: 10,
		maxDepth: { min: 4, max: 10 },
		branchLength: { min: 20, max: 80 },
		branchShortage: { min: 3, max: 8 },
		angle: { min: 10, max: 60 },
		color: { rmin: 0, rmax: 0, gmin: 30, gmax: 255, bmin: 0, bmax: 0 },
		startPoint: { xmin: 50, xmax: 450, ymin: 420, ymax: 480 }
	};

	// generates array of tree fractal configurations. if configuration is not provided, default one is used.
	this.generate = function (config) {
		if (typeof config !== "object") { config = this.defaultConfig; }
	
		var items = [];
		for (var i = 0; i < config.items; i++) {
			var item = this.generateItem(config);
			items[i] = item;
		};
		return items;
	}
	
	// generates tree fractal configuration
	this.generateItem = function (config) {
		var c = {};
		
		c.maxDepth = this.rnd(config.maxDepth.min, config.maxDepth.max);
		c.branchLength = this.rnd(config.branchLength.min, config.branchLength.max);
		c.branchShortage = this.rnd(config.branchShortage.min, config.branchShortage.max) / 10.0;
		c.angle = this.rnd(config.angle.min, config.angle.max);
		
		var startx = this.rnd(config.startPoint.xmin, config.startPoint.xmax);
		var starty = this.rnd(config.startPoint.ymin, config.startPoint.ymax);
		c.startPoint = new vector(startx, starty);
		
		var red = this.rnd(config.color.rmin, config.color.rmax);
		var green = this.rnd(config.color.gmin, config.color.gmax);
		var blue = this.rnd(config.color.bmin, config.color.bmax);
		c.color = "rgb(" + red + "," + green + "," + blue + ")";
		
		// TODO: make configurable
		c.startDirection = new vector(0,-1); // length = 1
		
		return c;
	};
	
	// gets random number from given interval
	this.rnd = function (x,y) {
		if (typeof x !== "number" || typeof y !== "number") throw new Error("Expecting two numbers to calculate random number from given interval.");
		var interval = Math.abs(y - x) + 1;
		return (Math.floor(Math.random() * interval)) + x; 
	};
};