Main._ReadyCommand	= function() {
	Command.apply(this, arguments);
};

Main._ReadyCommand.prototype	= new Command;

Main._ReadyCommand.prototype.execute	= function() {
	//
	if (this.controller.model.getProxy("UserProxy").getData("key") == "secrets") {
		this.controller.sendNotification("ShowWorkspace");
	}
	else {
		this.controller.sendNotification("ShowLogin");
	}
};