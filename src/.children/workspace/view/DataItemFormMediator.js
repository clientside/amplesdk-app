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
			// TODO:
			this.setFormVisible(false);
			break

		case "InitDataItem":
			this.setFormVisible(true);
			this.presentItem(null);
			break;

		case "EditDataItem":
			this.setFormVisible(true);
			this.presentItem(oNotification.body);
			break;

		case "Show":
			this.setFormVisible(true);
			break;

		case "Hide":
			this.setFormVisible(false);
			break;
	}
};

Workspace.DataItemFormMediator.prototype.handleEvent	= function(oEvent) {
	if (oEvent.type == "DOMActivate") {
		switch (oEvent.target.getAttribute("id")) {
			case "Workspace-dataitemform-save":
				var item	= this.facade.retrieveMediator("DataListMediator").getSelectedDataItem(),
					name		= ample.query("xul|textbox[name=name]", this.element).attr("value"),
					description	= ample.query("xul|textbox[name=description]", this.element).attr("value");
				if (item)
					// Update selected item
					this.sendNotification("UpdateDataItem", new Workspace.DataItemEntity(
																	item.id,
																	name,
																	description
															)
					);
				else
					// Create new item
					this.sendNotification("CreateDataItem", new Workspace.DataItemEntity(
																	null,
																	name,
																	description
															)
					);
				break;

			case "Workspace-dataitemform-reset":
				var item	= this.facade.retrieveMediator("DataListMediator").getSelectedDataItem();
				this.presentItem(item);
				break;
		}
	}
};

Workspace.DataItemFormMediator.prototype.presentItem	= function(item) {
	ample.query("xul|textbox[name=name]", this.element).attr("value", item ? item.name : "");
	ample.query("xul|textbox[name=description]", this.element).attr("value", item ? item.description : "");
};

Workspace.DataItemFormMediator.prototype.setFormVisible	= function(visible) {
	ample.query(this.element).attr("hidden", visible ? "false" : "true");
};