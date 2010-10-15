Controller.ShutdownCommand	= function() {
	Command.apply(this, arguments);
};

Controller.ShutdownCommand.prototype	= new Command;

Controller.ShutdownCommand.prototype.execute	= function() {
	// TODO: Make async
	this.controller.dispose();
	// Process children
	for (var n = 0, l = this.controller.children.length; n < l; n++)
		new Controller.ShutdownCommand(this.controller.children[n]).execute();
	//
	this.controller.sendNotification("$Disposed");
};