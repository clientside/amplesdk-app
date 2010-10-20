function Main() {
	//
	MVC.call(this);
};

Main.prototype	= new MVC;

Main.prototype.initializeController	= function() {
	// Register commands
	this.registerCommand("_Ready",			Main._ReadyCommand);

	this.registerCommand("TryLogin",		Main.TryLoginCommand);
	this.registerCommand("TryLogout",		Main.TryLogoutCommand);

	this.registerCommand("LoginSuccess",	Main.LoginSuccessCommand);
	this.registerCommand("LogoutSuccess",	Main.LogoutSuccessCommand);

	this.registerCommand("ShowWorkspace",	Main.ShowWorkspaceCommand);
	this.registerCommand("HideWorkspace",	Main.HideWorkspaceCommand);
};

Main.prototype.initializeModel	= function() {
	//
	this.registerProxy("UserProxy", new Main.UserProxy(this, new Main.UserEntity));
};

Main.prototype.initializeView		= function() {
	// register mediators
	this.registerMediator("LoginMediator", new Main.LoginMediator(this, ample.query("#Main-auth")[0]));
};