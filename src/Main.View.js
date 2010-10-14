Main.View	= function() {
	//
	View.apply(this, arguments);
	// register mediators
	this.addMediator("AuthPaneMediator", new Main.View.AuthPaneMediator(this));
};

Main.View.prototype	= new View;

Main.View.prototype.init	= function() {
	//
	this.element	= ample.query("#Main")[0];
	ample.query(this.element).show("slow");
	//
	View.prototype.init.call(this);
};