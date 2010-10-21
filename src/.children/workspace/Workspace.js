function Workspace() {
	//
	MVC.call(this);
};

Workspace.prototype	= new MVC;

Workspace.prototype.initializeController	= function() {
	// Register commands
	this.registerCommand("_Ready",	Workspace._ReadyCommand);
	//
	this.registerCommand("CreateDataItem",	Workspace.CreateDataItemCommand);
	this.registerCommand("DeleteDataItem",	Workspace.DeleteDataItemCommand);
	this.registerCommand("UpdateDataItem",	Workspace.UpdateDataItemCommand);
};

Workspace.prototype.initializeModel	= function() {
	// Register proxies
	this.registerProxy("DataProxy", new Workspace.DataProxy(new Array()));
};

Workspace.prototype.initializeView	= function() {
	// Register mediators
	this.registerMediator("ToolbarMediator", new Workspace.ToolbarMediator(ample.query("#Workspace-toolbar")[0]));
	this.registerMediator("DataListMediator", new Workspace.DataListMediator(ample.query("#Workspace-datalist")[0]));
	this.registerMediator("DataItemFormMediator", new Workspace.DataItemFormMediator(ample.query("#Workspace-dataitemform")[0]));
};