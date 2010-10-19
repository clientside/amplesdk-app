MVC.ShutdownCommand	= function() {
	MVC.Command.apply(this, arguments);
};

MVC.ShutdownCommand.prototype	= new MVC.Command;

MVC.ShutdownCommand.prototype.execute	= function(notification) {
	// TODO: Make async
	this.dispose();
	// Process children
	for (var n = 0, l = this.children.length; n < l; n++)
		new MVC.ShutdownCommand(this.children[n]).execute(notification);
	//
	this.sendNotification("_Disposed");
};