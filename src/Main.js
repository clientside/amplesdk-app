function Main() {
	//
	MVC.call(this);
};

Main.prototype	= new MVC;

Main.prototype.initController	= function() {
	// Register commands
	this.registerCommand("_Ready",			Main._ReadyCommand);

	this.registerCommand("TryLogin",		Main.TryLoginCommand);
	this.registerCommand("TryLogout",		Main.TryLogoutCommand);

	this.registerCommand("ShowWorkspace",	Main.ShowWorkspaceCommand);
	this.registerCommand("HideWorkspace",	Main.HideWorkspaceCommand);
};

Main.prototype.initModel	= function() {
	//
	this.registerProxy("UserProxy", new Main.UserProxy(this, new Main.UserEntity));
	// TODO: ???
	this.retrieveProxy("UserProxy").getData().key	= "secret";
};

Main.prototype.initView		= function() {
	// register mediators
	this.registerMediator("LoginMediator", new Main.LoginMediator(this, ample.query("#Main-auth")[0]));
};