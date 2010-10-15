function Workspace() {

};

Workspace.prototype	= new Controller;

Workspace.prototype.init	= function() {
	this.model	= new Workspace.Model(this);
	this.view	= new Workspace.View(this);
	//
	// Register commands
	this.registerCommand("$Ready",			Workspace.StartupCommand);
	this.registerCommand("TryLogout",		Workspace.TryLogoutCommand);
	//
	Controller.prototype.init.call(this);
};