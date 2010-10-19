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
	var oldValue	= this.data[key];
	this.data[key]	= value;
	if (oldValue != value)
		this.sendNotification("DataPropertyChange", key);
};

//
Proxy.prototype.sendNotification	= function(sNotification, oDetail) {
	// Forward notification to controller
	this.model.controller.sendNotification(sNotification, oDetail);
};

Proxy.prototype.onRegister	= function() {

};

Proxy.prototype.onRemove	= function() {

};