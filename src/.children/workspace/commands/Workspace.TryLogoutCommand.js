Workspace.TryLogoutCommand	= function() {
	Command.apply(this, arguments);
};

Workspace.TryLogoutCommand.prototype	= new Command;

Workspace.TryLogoutCommand.prototype.execute	= function() {
	var that = this;
	setTimeout(function() {
		that.sendNotification("LogoutSuccess");
		that.controller.parent.sendNotification("HideWorkspace");
		that.controller.parent.sendNotification("ShowLogin");
	}, 500);
};