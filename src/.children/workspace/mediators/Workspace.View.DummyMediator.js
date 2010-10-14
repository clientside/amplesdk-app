Workspace.View.DummyMediator	= function() {
	Mediator.apply(this, arguments);
};

Workspace.View.DummyMediator.prototype	= new Mediator;

Workspace.View.DummyMediator.prototype.handleNotification	= function(oNotification) {
	switch (oNotification.name) {

	}
};