Main.View	= function() {
	//
	View.apply(this, arguments);
};

Main.View.prototype	= new View;

Main.View.prototype.init	= function() {
	// register mediators
	this.addMediator("LoginMediator", new Main.View.LoginMediator(this));
	//
	this.element	= ample.query("#Main")[0];
};