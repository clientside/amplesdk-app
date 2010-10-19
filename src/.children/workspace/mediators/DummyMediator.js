Workspace.DummyMediator	= function() {
	MVC.Mediator.apply(this, arguments);
};

Workspace.DummyMediator.prototype	= new MVC.Mediator;

Workspace.DummyMediator.prototype.onRegister	= function() {
	ample.query(this.element).bind("click", this);
};

Workspace.DummyMediator.prototype.onRemove		= function() {
	ample.query(this.element).unbind("click", this);
};

Workspace.DummyMediator.prototype.handleNotification	= function(oNotification) {
	switch (oNotification.name) {
		case "Show":
			ample.query(this.element).show("slow");
			break;

		case "Hide":
			ample.query(this.element).hide();
			break;
	}
};

Workspace.DummyMediator.prototype.handleEvent	= function(oEvent) {

};