Main.HideWorkspaceCommand	= function() {
	MVC.Command.apply(this, arguments);
};

Main.HideWorkspaceCommand.prototype	= new MVC.Command;

Main.HideWorkspaceCommand.prototype.execute	= function() {
	var oWorkspace	= this.facade.getChild("Workspace");
	if (oWorkspace)
		oWorkspace.sendNotification("Hide");
};