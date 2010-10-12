Main.ShowLoginCommand	= function() {
	Command.apply(this, arguments);
};

Main.ShowLoginCommand.prototype	= new Command;

Main.ShowLoginCommand.prototype.execute	= function() {
	var main	= this.controller;
	this.controller.getChild(Login, function(login) {
		login.view.show();
	});
};