function Login() {

};

Login.prototype	= new Controller;

Login.prototype.init	= function() {
	this.model	= new Login.Model;
	this.view	= new Login.View;
	//
	// Register commands
	this.registerCommand("$Ready",			Login.StartupCommand);
	//
	Controller.prototype.init.call(this);
};