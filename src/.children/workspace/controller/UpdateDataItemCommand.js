Workspace.UpdateDataItemCommand	= function() {
	MVC.Command.apply(this, arguments);
};

Workspace.UpdateDataItemCommand.prototype	= new MVC.Command;

Workspace.UpdateDataItemCommand.prototype.execute	= function(notification) {
	var proxy	= this.facade.retrieveProxy("DataProxy");
	proxy.updateItem(notification.body);
};