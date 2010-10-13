Main.View	= function() {
	View.apply(this, arguments);
	// register mediators
	this.mediators.push(new Main.View.AuthPaneMediator(this));
};

Main.View.prototype	= new View;

Main.View.prototype.init	= function() {
	//
	this.element	= ample.query("#Main")[0];
	//
	View.prototype.init.call(this);
};

Main.View.prototype.handleNotification	= function(oNotification) {
	if (oNotification.name == "ready") {
		ample.query(this.element).show("slow");
	}
};