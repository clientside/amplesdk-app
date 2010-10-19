function Workspace() {
	//
	MVC.call(this);
};

Workspace.prototype	= new MVC;

Workspace.prototype.initializeController	= function() {
	// Register commands
	this.registerCommand("_Ready",	Workspace._ReadyCommand);
};

Workspace.prototype.initializeView	= function() {
	// register mediators
	this.registerMediator("DummyMediator", new Workspace.DummyMediator(this, ample.query("#Workspace-dummy")[0]));
}