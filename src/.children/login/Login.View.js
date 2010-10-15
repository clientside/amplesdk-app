Login.View	= function() {
	//
	View.apply(this, arguments);
	// register mediators
	this.addMediator("FormMediator", new Login.View.FormMediator(this));
};

Login.View.prototype	= new View;

Login.View.prototype.init	= function() {
	//
	this.element	= ample.query("#Login")[0];
	//
	View.prototype.init.call(this);
};