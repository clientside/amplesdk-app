Login.TryLoginCommand	= function() {
	Command.apply(this, arguments);
};

Login.TryLoginCommand.prototype	= new Command;

Login.TryLoginCommand.prototype.execute	= function() {
	var that = this;
	setTimeout(function() {
		that.sendNotification("LoginSuccess");
		that.controller.parent.sendNotification("HideLogin");
		that.controller.parent.sendNotification("ShowWorkspace");
	}, 500);
};