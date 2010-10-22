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
			this.presentItem(oNotification.body);
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
				var item	= this.facade.retrieveMediator("DataListMediator").getSelectedDataItem();
				this.sendNotification("UpdateDataItem", new Workspace.DataItemEntity(
																item.id,
																ample.query("xul|textbox[name=name]", this.element).attr("value"),
																ample.query("xul|textbox[name=description]", this.element).attr("value")
														));
				break;

			case "Workspace-dataitemform-reset":
				var item	= this.facade.retrieveMediator("DataListMediator").getSelectedDataItem();
				this.presentItem(item);
				break;
		}
	}
};

Workspace.DataItemFormMediator.prototype.presentItem	= function(item) {
	ample.query(this.element).attr("hidden", item ? null : "true");
	ample.query("xul|textbox[name=name]", this.element).attr("value", item ? item.name : "");
	ample.query("xul|textbox[name=description]", this.element).attr("value", item ? item.description : "");
};