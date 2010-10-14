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
Proxy.prototype.sendNotification	= function(oNotification) {
	// Forward notification to controller
	oNotification.target.sendNotification(oNotification);
};

Proxy.prototype.onRegister	= function() {

};

Proxy.prototype.onRemove	= function() {

};