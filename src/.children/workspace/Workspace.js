function Workspace() {
	//
	MVC.call(this);
};

Workspace.prototype	= new MVC;

Workspace.prototype.initializeController	= function() {
	// Register commands
	this.registerCommand("_Ready",	Workspace._ReadyCommand);
	//
	this.registerCommand("AddDataItem",	Workspace.AddDataItemCommand);
	this.registerCommand("DeleteDataItem",	Workspace.DeleteDataItemCommand);
	this.registerCommand("UpdateDataItem",	Workspace.UpdateDataItemCommand);
};

Workspace.prototype.initializeModel	= function() {
	// Register proxies
	this.registerProxy("DataProxy", new Workspace.DataProxy);
};

Workspace.prototype.initializeView	= function() {
	// Register mediators
	this.registerMediator("DataListMediator", new Workspace.DataListMediator(this, ample.query("#Workspace-datalist")[0]));
	this.registerMediator("DataItemFormMediator", new Workspace.DataItemFormMediator(this, ample.query("#Workspace-dataitem-form")[0]));
};