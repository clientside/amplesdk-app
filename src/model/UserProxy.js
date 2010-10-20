Main.UserProxy	= function() {
	MVC.Proxy.apply(this, arguments);
};

Main.UserProxy.prototype	= new MVC.Proxy;

Main.UserProxy.prototype.onRegister	= function() {
	this.getData().token	= "secret";
};