Main.Model	= function() {
	//
	Model.apply(this, arguments);
};

Main.Model.prototype	= new Model;

Main.Model.prototype.init	= function() {
	//
	this.addProxy("UserProxy", new Main.Model.UserProxy(this));
	// TODO: ???
	this.getProxy("UserProxy").setData("key", "secret");
};
