function View(oController) {
	this.mediators	= {};
	this.controller	= oController;
};

//
View.prototype.mediators	= null;
View.prototype.controller	= null;

//
View.prototype.init	= function() {

};

//
View.prototype.getMediator	= function(sName) {
	return this.mediators.hasOwnProperty(sName) ? this.mediators[sName] : null;
};

View.prototype.addMediator	= function(sName, oMediator) {
	if (!(oMediator instanceof Mediator))
		throw String(oMediator) + " is not instanceof Mediator";

	this.mediators[sName]	= oMediator;
};