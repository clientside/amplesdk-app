function Main() {
	//
	Controller.call(this);
};

Main.prototype	= new Controller;

Main.prototype.init	= function() {
	this.model	= new Main.Model;
	this.view	= new Main.View;
	//
	// Register commands
	this.registerCommand("$Ready",			Main.StartupCommand);
	this.registerCommand("ShowLogin", 		Main.ShowLoginCommand);
	this.registerCommand("ShowWorkspace",	Main.ShowWorkspaceCommand);
	//
	Controller.prototype.init.call(this);
};
