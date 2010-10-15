function Login() {

};

Login.prototype	= new Controller;

Login.prototype.init	= function() {
	this.model	= new Login.Model(this);
	this.view	= new Login.View(this);
	//
	// Register commands
	this.registerCommand("$Ready",			Login.StartupCommand);
	this.registerCommand("TryLogin",		Login.TryLoginCommand);
	//
	Controller.prototype.init.call(this);
};