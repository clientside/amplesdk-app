Main.ShowLoginCommand	= function() {

};

Main.ShowLoginCommand.prototype	= new Command;

Main.ShowLoginCommand.prototype.execute	= function() {
	var login = this.controller.getChild(Login);
	if (login)
		login.show();
	else
		this.controllers.push(new Login);
};