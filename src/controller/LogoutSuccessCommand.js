Main.LogoutSuccessCommand	= function() {
	MVC.Command.apply(this, arguments);
};

Main.LogoutSuccessCommand.prototype	= new MVC.Command;

Main.LogoutSuccessCommand.prototype.execute	= function() {
	this.sendNotification("HideWorkspace");
	this.sendNotification("ShowLogin");
};