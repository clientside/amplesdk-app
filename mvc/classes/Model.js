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
	// Create and register proxies
};

Model.prototype.addProxy	= function(oProxy) {
	this.proxies.push(oProxy);
	oProxy.controller	= this;
};