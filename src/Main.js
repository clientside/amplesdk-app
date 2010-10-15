function Main() {
	//
	Controller.call(this);
};

Main.prototype	= new Controller;

Main.prototype.init	= function() {
	this.model	= new Main.Model(this);
	this.view	= new Main.View(this);
	// Register commands
	this.registerCommand("_Ready",			Main._ReadyCommand);

	this.registerCommand("TryLogin",		Main.TryLoginCommand);
	this.registerCommand("TryLogout",		Main.TryLogoutCommand);

	this.registerCommand("ShowWorkspace",	Main.ShowWorkspaceCommand);
	this.registerCommand("HideWorkspace",	Main.HideWorkspaceCommand);
};
