Workspace.DeleteDataItemCommand	= function() {
	MVC.Command.apply(this, arguments);
};

Workspace.DeleteDataItemCommand.prototype	= new MVC.Command;

Workspace.DeleteDataItemCommand.prototype.execute	= function(notification) {
	alert('delete');return;
	var oItem	= this.facade.retrieveMediator("DataListMediator").getSelectedDataItem();
	if (oItem)
		this.facade.retrieveProxy("DataProxy").deleteItem(oItem);
};