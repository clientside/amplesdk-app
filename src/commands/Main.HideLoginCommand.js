Main.HideLoginCommand	= function() {
	Command.apply(this, arguments);
};

Main.HideLoginCommand.prototype	= new Command;

Main.HideLoginCommand.prototype.execute	= function() {
	var oLogin	= this.controller.getChild("Login");
	oLogin.sendNotification("Hide");
};