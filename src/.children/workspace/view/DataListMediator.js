Workspace.DataListMediator	= function() {
	MVC.Mediator.apply(this, arguments);
};

Workspace.DataListMediator.prototype	= new MVC.Mediator;

Workspace.DataListMediator.prototype.onRegister	= function() {
	//
	ample.query(this.element)
			.bind("select", this);

	// Populate list
	var dataEntries	= this.facade.retrieveProxy("DataProxy").data;
	for (var nIndex = 0; nIndex < dataEntries.length; nIndex++) {
		ample.query(this.element.body).append(
				ample.query("<xul:listitem data-id=\"" + dataEntries[nIndex].id + "\">\
								<xul:listcell>" + dataEntries[nIndex].id + "</xul:listcell>\
								<xul:listcell>" + dataEntries[nIndex].name + "</xul:listcell>\
								<xul:listcell>" + dataEntries[nIndex].description + "</xul:listcell>\
							</xul:listitem>"));
	}
};

Workspace.DataListMediator.prototype.onRemove		= function() {
	ample.query(this.element)
			.unbind("select", this);
};

Workspace.DataListMediator.prototype.handleNotification	= function(oNotification) {
	switch (oNotification.name) {
/*
		case "CreateDataItem":
			ample.query(this.element.body).append(
				ample.query("<xul:listitem data-id=\"temporary-" + new Date().getTime() + "\">\
								<xul:listcell></xul:listcell>\
								<xul:listcell></xul:listcell>\
								<xul:listcell></xul:listcell>\
							</xul:listitem>"));
			// Select last item
			this.element.selectItem(this.element.items[this.element.items.length - 1]);
			this.element.focus();
			break;
*/
		case "Show":
			ample.query(this.element).show("slow");
			break;

		case "Hide":
			ample.query(this.element).hide();
			break;
	}
};

Workspace.DataListMediator.prototype.handleEvent	= function(oEvent) {
	if (oEvent.type == "select") {
		if (oEvent.target.getAttribute("id") == "Workspace-datalist")
			this.sendNotification("SelectionChange", this.getSelectedDataItem());
	}
};

Workspace.DataListMediator.prototype.getSelectedDataItem	= function() {
	return this.element.selectedItems.length
		? this.facade.retrieveProxy("DataProxy").getItem(this.element.selectedItems[0].getAttribute("data-id"))
		: null;
};
