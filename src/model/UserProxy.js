Main.UserProxy	= function() {
	MVC.Proxy.apply(this, arguments);
	//
	this.data	= new Main.UserEntity;
};

Main.UserProxy.prototype	= new MVC.Proxy;

Main.UserProxy.prototype.onRegister	= function() {
	this.getData().token	= "secret";
};