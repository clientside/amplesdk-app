Main.TryLogoutCommand	= function() {
	MVC.Command.apply(this, arguments);
};

Main.TryLogoutCommand.prototype	= new MVC.Command;

Main.TryLogoutCommand.prototype.execute	= function() {
	this.facade.retrieveProxy("AuthProxy").logout();
};