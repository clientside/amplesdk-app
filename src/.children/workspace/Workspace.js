function Workspace() {
	//
	Controller.call(this);
};

Workspace.prototype	= new Controller;

Workspace.prototype.init	= function() {
	this.model	= new Workspace.Model(this);
	this.view	= new Workspace.View(this);
	// Register commands
	this.registerCommand("_Ready",			Workspace._ReadyCommand);
};