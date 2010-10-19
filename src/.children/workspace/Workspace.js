function Workspace() {
	//
	MVC.call(this);
};

Workspace.prototype	= new MVC;

Workspace.prototype.initController	= function() {
	// Register commands
	this.registerCommand("_Ready",	Workspace._ReadyCommand);
};

Workspace.prototype.initView	= function() {
	// register mediators
	this.registerMediator("DummyMediator", new Workspace.DummyMediator(this, ample.query("#Workspace-dummy")[0]));
}