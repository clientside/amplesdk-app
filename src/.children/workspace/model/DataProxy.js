Workspace.DataProxy	= function() {
	MVC.Proxy.apply(this, arguments);
};

Workspace.DataProxy.prototype	= new MVC.Proxy;

Workspace.DataProxy.prototype.onRegister	= function() {
	this.addItem(new Workspace.DataItemEntity("1", "A name", "A description"));
	this.addItem(new Workspace.DataItemEntity("2", "B name", "B description"));
	this.addItem(new Workspace.DataItemEntity("3", "C name", "C description"));
	this.addItem(new Workspace.DataItemEntity("4", "D name", "D description"));
	this.addItem(new Workspace.DataItemEntity("5", "E name", "E description"));
};

Workspace.DataProxy.prototype.getItem	= function(id) {

};

Workspace.DataProxy.prototype.addItem	= function(/* Workspace.DataItemEntity */ item) {
	this.data.push(item);
};

Workspace.DataProxy.prototype.updateItem	= function(/* Workspace.DataItemEntity */ item) {

};

Workspace.DataProxy.prototype.deleteItem	= function(/* Workspace.DataItemEntity */ item) {

};