Main.Model	= function() {
	Model.apply(this, arguments);
};

Main.Model.prototype	= new Model;

Main.Model.prototype.init	= function() {
	this.data.key	= "secret";
	//
	Model.prototype.init.call(this);
};

Main.Model.prototype.getKey	= function() {
	return this.data["key"];
};

Main.Model.prototype.setKey	= function(value) {
	this.data["key"]	= value;
};