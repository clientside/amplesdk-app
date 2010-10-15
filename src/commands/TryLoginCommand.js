Main.TryLoginCommand	= function() {
	Command.apply(this, arguments);
};

Main.TryLoginCommand.prototype	= new Command;

Main.TryLoginCommand.prototype.execute	= function() {
	var that = this;
	setTimeout(function() {
		that.sendNotification("LoginSuccess");
		that.sendNotification("HideLogin");
		that.sendNotification("ShowWorkspace");
	}, 500);
};