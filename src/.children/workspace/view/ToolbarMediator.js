Workspace.ToolbarMediator	= function() {
	MVC.Mediator.apply(this, arguments);
};

Workspace.ToolbarMediator.prototype	= new MVC.Mediator;

Workspace.ToolbarMediator.prototype.onRegister	= function() {
	ample.query(this.element).bind("DOMActivate", this);

	//
	ample.query("#Workspace-toolbar-remove", this.element).attr("disabled", "true");
};

Workspace.ToolbarMediator.prototype.handleNotification	= function(oNotification) {
	switch (oNotification.name) {
		case "Show":
			ample.query(this.element).show("slow");
			break;

		case "Hide":
			ample.query(this.element).hide();
			break;

		case "SelectionChange":
			ample.query("#Workspace-toolbar-remove", this.element).attr("disabled", oNotification.body == null ? "true" : null);
			break;
	}
};

Workspace.ToolbarMediator.prototype.handleEvent	= function(oEvent) {
	if (oEvent.type == "DOMActivate") {
		switch (oEvent.target.getAttribute("id")) {
			case "Workspace-toolbar-add":
				this.sendNotification("CreateDataItem");
				break;

			case "Workspace-toolbar-remove":
				var item	= this.facade.retrieveMediator("DataListMediator").getSelectedDataItem();
				if (item)
					this.sendNotification("DeleteDataItem", item);
				break;
		}
	}
};