Workspace.DataItemFormMediator	= function() {
	MVC.Mediator.apply(this, arguments);
};

Workspace.DataItemFormMediator.prototype	= new MVC.Mediator;

Workspace.DataItemFormMediator.prototype.onRegister	= function() {
	ample.query("xul|textbox[name=name], xul|textbox[name=description]", this.element).bind("change", this);
	ample.query("xul|button[name=save]", this.element).bind("DOMActivate", this);
};

Workspace.DataItemFormMediator.prototype.handleNotification	= function(oNotification) {
	switch (oNotification.name) {
		case "SelectionChange":
			if (oNotification.body)
				ample.query(this.element).attr("hidden", null);
			else
				ample.query(this.element).attr("hidden", "true");
			break;

		case "Show":
			ample.query(this.element).show("slow");
			break;

		case "Hide":
			ample.query(this.element).hide();
			break;
	}
};

Workspace.DataItemFormMediator.prototype.handleEvent	= function(oEvent) {
	console.warn(oEvent);
};