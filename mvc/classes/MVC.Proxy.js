MVC.Proxy	= function(mvc) {
	this.facade	= mvc;
	this.data	= {};
};

MVC.Proxy.prototype.facade	= null;
MVC.Proxy.prototype.data	= null;

//
MVC.Proxy.prototype.getData	= function() {
	return this.data;
};

MVC.Proxy.prototype.setData	= function(value) {
	var oldValue	= this.data;
	this.data	= value;
	if (oldValue != value)
		this.sendNotification("DataChange");
};

//
MVC.Proxy.prototype.sendNotification	= function(sNotification, oDetail) {
	// Forward notification to facade
	this.facade.sendNotification(sNotification, oDetail);
};

MVC.Proxy.prototype.onRegister	= function() {

};

MVC.Proxy.prototype.onRemove	= function() {

};