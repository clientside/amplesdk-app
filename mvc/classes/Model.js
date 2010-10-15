function Model(oController) {
	//
	this.proxies	= {};
	this.controller	= oController;
};

//
Model.prototype.data	= null;
//
Model.prototype.proxies		= null;
Model.prototype.controller	= null;

//
Model.prototype.init	= function() {

};

Model.prototype.getProxy	= function(sName) {
	return this.proxies.hasOwnProperty(sName) ? this.proxies[sName] : null;
};

Model.prototype.addProxy	= function(sName, oProxy) {
	this.proxies[sName]	= oProxy;
	oProxy.model	= this;
};