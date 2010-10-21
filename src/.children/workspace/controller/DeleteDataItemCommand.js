Workspace.DeleteDataItemCommand	= function() {
	MVC.Command.apply(this, arguments);
};

Workspace.DeleteDataItemCommand.prototype	= new MVC.Command;

Workspace.DeleteDataItemCommand.prototype.execute	= function(notification) {
	var oItem	= this.facade.retrieveProxy("DataProxy").getSelectedItem();
	alert(oItem)
	if (oItem) {

	}
};