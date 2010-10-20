Main.TryLoginCommand	= function() {
	MVC.Command.apply(this, arguments);
};

Main.TryLoginCommand.prototype	= new MVC.Command;

Main.TryLoginCommand.prototype.execute	= function(notification) {
	console.log(notification)
	var that = this;
	setTimeout(function() {
		that.sendNotification("LoginSuccess");
	}, 500);
};