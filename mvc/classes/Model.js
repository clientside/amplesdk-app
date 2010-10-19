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
	if (!(oProxy instanceof Proxy))
		throw String(oProxy) + " is not instanceof Proxy";

	this.proxies[sName]	= oProxy;
};