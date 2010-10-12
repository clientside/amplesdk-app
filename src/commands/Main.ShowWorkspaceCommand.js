Main.ShowWorkspaceCommand	= function() {
	Command.apply(this, arguments);
};

Main.ShowWorkspaceCommand.prototype	= new Command;

Main.ShowWorkspaceCommand.prototype.execute	= function() {
	var main	= this.controller;
	this.controller.getChild(Workspace, function(controller) {
//		controller.view.show();
	});
};