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

Workspace.DataListMediator.prototype.handleNotification	= function(notification) {
	switch (notification.name) {
		case "Show":
			ample.query(this.element).show("slow");
			break;

		case "Hide":
			ample.query(this.element).hide();
			break;

		case "CreateDataItem":
		case "DeleteDataItem":
		case "UpdateDataItem":
			this.setListViewDisabled(true);
			break;

		case "DataItemCreated":
			this.setListViewDisabled(false);

			var item	= notification.body;
			ample.query(this.element.body).append(
					ample.query("<xul:listitem data-id=\"" + item.id + "\">\
									<xul:listcell>" + item.id + "</xul:listcell>\
									<xul:listcell>" + item.name + "</xul:listcell>\
									<xul:listcell>" + item.description + "</xul:listcell>\
								</xul:listitem>"));
				// Select last item
				this.element.selectItem(this.element.items[this.element.items.length - 1]);
				this.element.focus();
			break;

		case "DataItemUpdated":
			this.setListViewDisabled(false);

			var item	= notification.body;
			var cells	= ample.query("[data-id=" + item.id + "] xul|listcell", this.element);
			ample.query(cells[1]).attr("label", item.name);
			ample.query(cells[2]).attr("label", item.description);
			break;

		case "DataItemDeleted":
			this.setListViewDisabled(false);

			var item	= notification.body;
			ample.query("[data-id=" + item.id + "]", this.element).remove();
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

Workspace.DataListMediator.prototype.setListViewDisabled	= function(bDisabled) {
	ample.query(this.element).attr("disabled", bDisabled ? "true" : null);
};