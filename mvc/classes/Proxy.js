function Proxy(model) {
	this.model	= model;
	this.data	= {};
};

Proxy.prototype.model	= null;
Proxy.prototype.data	= null;

//
Proxy.prototype.getData	= function() {
	return this.data;
};

Proxy.prototype.setData	= function(value) {
	var oldValue	= this.data;
	this.data	= value;
	if (oldValue != value)
		this.sendNotification("DataChange");
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