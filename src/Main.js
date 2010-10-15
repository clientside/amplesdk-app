function Main() {
	//
	Controller.call(this);
};

Main.prototype	= new Controller;

Main.prototype.init	= function() {
	this.model	= new Main.Model(this);
	this.view	= new Main.View(this);
	//
	// Register commands
	this.registerCommand("$Ready",			Main.StartupCommand);

	this.registerCommand("ShowLogin", 		Main.ShowLoginCommand);
	this.registerCommand("HideLogin", 		Main.HideLoginCommand);
	this.registerCommand("ShowWorkspace",	Main.ShowWorkspaceCommand);
	this.registerCommand("HideWorkspace",	Main.HideWorkspaceCommand);
	//
	Controller.prototype.init.call(this);
};
