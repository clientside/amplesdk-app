Controller.StartupCommand	= function() {
	Command.apply(this, arguments);
};

Controller.StartupCommand.prototype	= new Command;

Controller.StartupCommand.prototype.execute	= function() {
	// TODO: Make async
	this.controller.init();
	// Process children
	for (var n = 0, l = this.controller.children.length; n < l; n++)
		new Controller.StartupCommand(this.controller.children[n]).execute();
	//
	this.controller.sendNotification("$Ready");
};