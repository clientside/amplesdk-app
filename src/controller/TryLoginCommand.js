Main.TryLoginCommand	= function() {
	MVC.Command.apply(this, arguments);
};

Main.TryLoginCommand.prototype	= new MVC.Command;

Main.TryLoginCommand.prototype.execute	= function(notification) {
	this.facade.retrieveProxy("AuthProxy").login(notification.body);
};