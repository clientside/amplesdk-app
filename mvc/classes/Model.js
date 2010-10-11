function Model() {
	this.data	= {};
	//
	this.proxies	= [];
};

//
Model.prototype.data	= null;
//
Model.prototype.proxies	= null;

Model.prototype.sendNotification	= function(oNotification) {

};

//
Model.prototype.init	= function() {
	// Dispatch ready
	this.sendNotification(new Notification("ready", this));
};

Model.prototype.addProxy	= function(oProxy) {
	this.proxies.push(oProxy);
	oProxy.model	= this;
};