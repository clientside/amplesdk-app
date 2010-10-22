Workspace.DeleteDataItemCommand	= function() {
	MVC.Command.apply(this, arguments);
};

Workspace.DeleteDataItemCommand.prototype	= new MVC.Command;

Workspace.DeleteDataItemCommand.prototype.execute	= function(notification) {
	var proxy	= this.facade.retrieveProxy("DataProxy");
	proxy.deleteItem(notification.body);
};