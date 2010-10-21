Workspace.DataItemFormMediator	= function() {
	MVC.Mediator.apply(this, arguments);
};

Workspace.DataItemFormMediator.prototype	= new MVC.Mediator;

Workspace.DataItemFormMediator.prototype.onRegister	= function() {
	ample.query("xul|textbox[name=name], xul|textbox[name=description]", this.element).bind("change", this);
	ample.query("#Workspace-dataitemform-save, #Workspace-dataitemform-reset", this.element).bind("DOMActivate", this);
};

Workspace.DataItemFormMediator.prototype.handleNotification	= function(oNotification) {
	switch (oNotification.name) {
		case "SelectionChange":
			var oItem	= oNotification.body;
			ample.query(this.element).attr("hidden", oItem ? null : "true");
			ample.query("xul|textbox[name=name]", this.element).attr("value", oItem ? oItem.name : "");
			ample.query("xul|textbox[name=description]", this.element).attr("value", oItem ? oItem.description : "");
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
	if (oEvent.type == "DOMActivate") {
		switch (oEvent.target.getAttribute("id")) {
			case "Workspace-dataitemform-save":
				this.sendNotification("UpdateDataItem");
				break;
		}
	}
};