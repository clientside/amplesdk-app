Main.Model	= function() {
	//
	Model.apply(this, arguments);
	//
	this.addProxy("AuthenticationProxy", new Main.Model.AuthenticationProxy(this));
};

Main.Model.prototype	= new Model;

Main.Model.prototype.init	= function() {
	//
	this.proxies.AuthenticationProxy.setData("key", "secret");
	//
	Model.prototype.init.call(this);
};

Main.Model.prototype.getKey	= function() {
	return this.data["key"];
};

Main.Model.prototype.setKey	= function(value) {
	this.data["key"]	= value;
};