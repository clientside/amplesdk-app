Main.ShowLoginCommand	= function() {
	Command.apply(this, arguments);
};

Main.ShowLoginCommand.prototype	= new Command;

Main.ShowLoginCommand.prototype.execute	= function() {
	var login = this.controller.getChild(Login);
	if (login)
		login.show();
	else
		this.controllers.push(new Login);
};