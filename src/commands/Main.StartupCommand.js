Main.StartupCommand	= function() {
	Command.apply(this, arguments);
};

Main.StartupCommand.prototype	= new Command;

Main.StartupCommand.prototype.execute	= function() {
	//
	if (this.controller.model.proxies.AuthenticationProxy.getData("key") == "secrets") {
		this.controller.sendNotification("ShowWorkspace");
	}
	else {
		this.controller.sendNotification("ShowLogin");
	}
};