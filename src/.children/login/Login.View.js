Login.View	= function() {
	//
	View.apply(this, arguments);
	// register mediators
};

Login.View.prototype	= new Model;

Login.View.prototype.init	= function() {
	//
	this.element	= ample.query("#Login")[0];
	ample.query(this.element).show("slow");
	//
	View.prototype.init.call(this);
};