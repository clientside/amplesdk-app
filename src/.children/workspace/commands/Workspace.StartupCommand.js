Workspace.StartupCommand	= function() {
	Command.apply(this, arguments);
};

Workspace.StartupCommand.prototype	= new Command;

Workspace.StartupCommand.prototype.execute	= function() {

};