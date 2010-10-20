Workspace.DataListMediator	= function() {
	MVC.Mediator.apply(this, arguments);
};

Workspace.DataListMediator.prototype	= new MVC.Mediator;

Workspace.DataListMediator.prototype.onRegister	= function() {
	ample.query(this.element).bind("click", this);

	// Populate list
	var dataEntries	= this.facade.retrieveProxy("DataProxy").data,
		listbody	= this.element.body;
	for (var nIndex = 0; nIndex < dataEntries.length; nIndex++) {
		ample.query(listbody).append(
				ample.query("<xul:listitem>\
								<xul:listcell>" + dataEntries[nIndex].id + "</xul:listcell>\
								<xul:listcell>" + dataEntries[nIndex].name + "</xul:listcell>\
								<xul:listcell>" + dataEntries[nIndex].description + "</xul:listcell>\
							</xul:listitem>"));
	}
};

Workspace.DataListMediator.prototype.onRemove		= function() {
	ample.query(this.element).unbind("click", this);
};

Workspace.DataListMediator.prototype.handleNotification	= function(oNotification) {
	switch (oNotification.name) {
		case "Show":
			ample.query(this.element).show("slow");
			break;

		case "Hide":
			ample.query(this.element).hide();
			break;
	}
};

Workspace.DataListMediator.prototype.handleEvent	= function(oEvent) {

};