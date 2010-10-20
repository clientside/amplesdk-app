Workspace._ReadyCommand	= function() {
	MVC.Command.apply(this, arguments);
};

Workspace._ReadyCommand.prototype	= new MVC.Command;

Workspace._ReadyCommand.prototype.execute	= function(notification) {

};