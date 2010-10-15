Main.HideWorkspaceCommand	= function() {
	Command.apply(this, arguments);
};

Main.HideWorkspaceCommand.prototype	= new Command;

Main.HideWorkspaceCommand.prototype.execute	= function() {
	var oWorkspace	= this.controller.getChild("Workspace");
	oWorkspace.sendNotification("Hide");
};