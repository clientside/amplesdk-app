function Proxy(model) {
	this.model	= model;
	this.data	= {};
};

Proxy.prototype.model	= null;
Proxy.prototype.data	= null;

//
Proxy.prototype.getData	= function(key) {
	return this.data[key];
};

Proxy.prototype.setData	= function(key, value) {
	this.data[key]	= value;
};

//
Proxy.prototype.sendNotification	= function(sNotification) {
	// Forward notification to controller
	this.model.controller.sendNotification(sNotification);
};

Proxy.prototype.onRegister	= function() {

};

Proxy.prototype.onRemove	= function() {

};