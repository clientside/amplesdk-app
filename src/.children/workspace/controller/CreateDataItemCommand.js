Workspace.CreateDataItemCommand	= function() {
	MVC.Command.apply(this, arguments);
};

Workspace.CreateDataItemCommand.prototype	= new MVC.Command;

Workspace.CreateDataItemCommand.prototype.execute	= function(notification) {
	var proxy	= this.facade.retrieveProxy("DataProxy");
	proxy.createItem();
};