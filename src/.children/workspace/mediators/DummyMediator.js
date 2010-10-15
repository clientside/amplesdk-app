Workspace.View.DummyMediator	= function() {
	Mediator.apply(this, arguments);
};

Workspace.View.DummyMediator.prototype	= new Mediator;

Workspace.View.DummyMediator.prototype.onRegister	= function() {

};

Workspace.View.DummyMediator.prototype.handleNotification	= function(oNotification) {
	switch (oNotification.name) {
		case "Show":
			ample.query(this.view.element).show("slow");
			break;

		case "Hide":
			ample.query(this.view.element).hide();
			break;
	}
};

Workspace.View.DummyMediator.prototype.handleEvent	= function(oEvent) {

};