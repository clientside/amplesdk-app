Main.LoginSuccessCommand	= function() {
	MVC.Command.apply(this, arguments);
};

Main.LoginSuccessCommand.prototype	= new MVC.Command;

Main.LoginSuccessCommand.prototype.execute	= function() {
	// Save token
	if (this.facade.retrieveMediator("LoginMediator").isRemember())
		ample.cookie("token", this.facade.retrieveProxy("AuthProxy").data.token);
	//
	this.sendNotification("HideLogin");
	this.sendNotification("ShowLogout");
	this.sendNotification("ShowWorkspace");
};