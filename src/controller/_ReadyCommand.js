Main._ReadyCommand	= function() {
	MVC.Command.apply(this, arguments);
};

Main._ReadyCommand.prototype	= new MVC.Command;

Main._ReadyCommand.prototype.execute	= function() {
	//
	if (this.facade.retrieveProxy("AuthProxy").isAuthenticated()) {
		this.facade.sendNotification("HideLogin");
		this.facade.sendNotification("ShowWorkspace");
	}
	else {
		this.facade.sendNotification("ShowLogin");
	}
};