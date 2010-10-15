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
	for (var sName in this.proxies)
		if (this.proxies.hasOwnProperty(sName))
			this.proxies[sName].onRegister();
};

Model.prototype.addProxy	= function(sName, oProxy) {
	this.proxies[sName]	= oProxy;
	oProxy.model	= this;
};