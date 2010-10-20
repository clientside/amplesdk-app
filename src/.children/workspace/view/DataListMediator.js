Workspace.DataListMediator	= function() {
	MVC.Mediator.apply(this, arguments);
};

Workspace.DataListMediator.prototype	= new MVC.Mediator;

Workspace.DataListMediator.prototype.onRegister	= function() {
	ample.query(this.element).bind("click", this);
};

Workspace.DataListMediator.prototype.onRemove		= function() {
	ample.query(this.element).unbind("click", this);
};

Workspace.DataListMediator.prototype.handleNotification	= function(oNotification) {
	switch (oNotification.name) {
		case "Show":
			ample.query(this.element).show("slow");
			break;

		case "Hide":
			ample.query(this.element).hide();
			break;
	}
};

Workspace.DataListMediator.prototype.handleEvent	= function(oEvent) {

};