Workspace.View	= function() {
	//
	View.apply(this, arguments);
	// register mediators
	this.addMediator("DummyMediator", new Workspace.View.DummyMediator(this));
};

Workspace.View.prototype	= new View;

Workspace.View.prototype.init	= function() {
	//
	this.element	= ample.query("#Workspace")[0];
	//
	View.prototype.init.call(this);
};