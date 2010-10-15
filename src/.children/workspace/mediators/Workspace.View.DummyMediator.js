Workspace.View.DummyMediator	= function() {
	Mediator.apply(this, arguments);
};

Workspace.View.DummyMediator.prototype	= new Mediator;

Workspace.View.DummyMediator.prototype.onRegister	= function() {
	ample.query("#Workspace-logout", this.view.element)
		.bind("DOMActivate", this);
};

Workspace.View.DummyMediator.prototype.handleNotification	= function(oNotification) {
	switch (oNotification.name) {
		case "$Ready":
		case "Show":
			ample.query(this.view.element).show("slow");
			break;

		case "Hide":
			ample.query(this.view.element).hide("slow");
			break;
	}
};

Workspace.View.DummyMediator.prototype.handleEvent	= function(oEvent) {
	if (oEvent.type == "DOMActivate") {
		switch (oEvent.target.getAttribute("id")) {
			case "Workspace-logout":
				this.sendNotification("TryLogout");
				break;
		}
	}
};