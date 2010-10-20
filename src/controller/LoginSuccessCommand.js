Main.LoginSuccessCommand	= function() {
	MVC.Command.apply(this, arguments);
};

Main.LoginSuccessCommand.prototype	= new MVC.Command;

Main.LoginSuccessCommand.prototype.execute	= function() {
	this.sendNotification("HideLogin");
	this.sendNotification("ShowLogout");
	this.sendNotification("ShowWorkspace");
};