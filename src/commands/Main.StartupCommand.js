Main.StartupCommand	= function() {
	Command.apply(this, arguments);
};

Main.StartupCommand.prototype	= new Command;

Main.StartupCommand.prototype.execute	= function() {
	//
	if (this.controller.model.proxies.AuthenticationProxy.getData("key") == "secret") {
		this.controller.sendNotification(new Notification("ShowWorkspace", this.controller));
	}
	else {
		this.controller.sendNotification(new Notification("ShowLogin", this.controller));
	}
};