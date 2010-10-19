Main.TryLogoutCommand	= function() {
	MVC.Command.apply(this, arguments);
};

Main.TryLogoutCommand.prototype	= new MVC.Command;

Main.TryLogoutCommand.prototype.execute	= function() {
	var that = this;
	setTimeout(function() {
		that.sendNotification("LogoutSuccess");
		that.sendNotification("HideWorkspace");
		that.sendNotification("ShowLogin");
	}, 500);
};